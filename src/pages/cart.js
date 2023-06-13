import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { MyCart, MyMobileCart, Item, MyCartParent, useStyles } from "../styles/cart.styles";
import { Button, Grid, Paper, Dialog, DialogContent, DialogTitle } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import Button1 from "@/components/Button";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "@/context/cart";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { styled } from '@mui/material/styles';
// import LoaderCartElement from "../../../components/loader/LoaderCartElement";
import { useRouter } from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import { useUserStatus } from "@/hooks/useUserStatus";
import Link from "next/link";
import SEO from "@/next-seo.config";
import { NextSeo } from "next-seo";
function Cart_c(props) {
	const userSttus = useUserStatus();
	const classes = useStyles()
	const childFunc = useRef();
	if (typeof window !== 'undefined') {
		var userId = localStorage.getItem("authToken");
		var UsercartList = JSON.parse(localStorage.getItem('UsercartList')) ? JSON.parse(localStorage.getItem('UsercartList')) : JSON.parse(localStorage.getItem('GuestUsercartList'));
	}

	const router = useRouter()
	const [cartData, setCartData] = useState([]);
	const [totalPrice, setTotalPrice] = useState('');
	const [error, setError] = useState("");

	const { cartState, cartDispatch } = useContext(CartContext);

	//function to increase quantity of product from cart 
	const UpdateAddCart = (productId, productVariantId, qty) => {
		cartDispatch.UpdateAddCart(productId, productVariantId, qty);
	};

	//function to decrease quantity of product from cart 
	const UpdateremoveCart = (productId, productVariantId, qty) => {
		cartDispatch.UpdateremoveCart(productId, productVariantId, qty);
	};

	//function to delete product from cart 
	const handleDeleteCart = (productId) => {
		cartDispatch.handleDeleteCart(productId);
	};

	//function to navigate on checkout page with cart data
	const handlecheckout = () => {
		const cartData = cartState.cartData;
		for (let i = 0; i < cartData.length; i++) {
			if (cartData[i].inventoryQuantity < 1) {
				setError("Product in your cart is out of stock"); //if Product in your cart is out of stock and click on checkout  button show error msg 
				return;
			}
		}
		if (userSttus.isLogged) {
			router.push('/checkout');  //if user is logged in and click on checkout navigate checkout page

		} else {
			router.push('/login');  //if user is not logged in and click on checkout navigate login page

		}
	}
	return (
		<>
			<NextSeo
				title={SEO.cart.title}
				description={SEO.cart.description}
				canonical={`${SEO.cart.canonical.api}/cart`}
				openGraph={{
					title: SEO.cart.title,
					description: SEO.cart.description,
					images: [
						{
							url: SEO.cart.image,
							width: 800,
							height: 600,
							alt: 'Cart Image',
						},
					],
					url: `${SEO.cart.canonical.api}/cart`,
				}}
			/>
			<div className={classes.desktopwidth}>
				{error &&
					<Dialog open={true} onClose={() => setError("")}>
						<DialogTitle><ErrorIcon sx={{ marginLeft: '45%', color: 'red', fontSize: '32px' }} /></DialogTitle>
						<DialogContent sx={{ fontWeight: '700', fontSize: '22px' }}>{error}</DialogContent>
					</Dialog>
				}
				<div className="mobile">

					<Grid className="mobile" sx={{ width: '100%', position: 'fixed', bottom: '0px', padding: '0px' }}>
						{cartState.cartData?.length > 0 ? (
							<button className={classes.checkoutBtn} onClick={handlecheckout}><MenuIcon /> Checkout</button>

						) :
							''
						}
					</Grid>

				</div>
				<MyCartParent>
					{UsercartList?.length > 0 ? (

						<div className="mobile">
							<Item><div>Sub Total :</div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
						</div>
					) : ''}
					<div className="desktop">
						{UsercartList?.length > 0 ? (
							<div className={classes.cartHeader}>
								<Item sx={{ mt: '30px' }}><div>Sub Total:</div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
								<div className="desktop">

									<button className={classes.checkoutBtn} onClick={handlecheckout}>Checkout</button>

								</div>
							</div>
						) :
							''
						}
					</div>

					<div elevation={5} {...props} onClick={props.onClick}>
						{UsercartList?.length > 0 ?
							<div className={classes.tabledisplay}>
								<div className={classes.cartListheadings}>
									<div className={classes.cartImageparent}>Image</div>
									<div className={classes.cartdescparent}>Product Description</div>
									<div className={classes.cartdeletes}>Date</div>
									<div className={classes.cartquantparent}>Product</div>
									<div className={classes.cartdelete}>Subtotal</div>
								</div>
							</div>
							: ''}
						{UsercartList?.length > 0 ?
							(
								UsercartList.map((data) => {
									const date = new Date(data.createdAt);
									const month = date.toLocaleString('default', { month: 'long' });
									const day = date.getDate();
									const year = date.getFullYear();
									const formattedDate = `${month} ${day}, ${year}`;

									return (
										<div className={classes.cartListborder} key={data.productVariantId.name}>
											<div className={classes.cartList}>
												<div className={classes.cartImageparent}>
													<img
														className={classes.cartImg}
														src={data.productId.images && data.productId.images.length > 0 ? data.productId.images[0] : '/defaultimage.png'}
													/>
												</div>
												<div className={classes.cartdescparent}>
													{data.productId.description}
												</div>
												<div className={classes.cartdeletes}>
													{formattedDate}
												</div>
												<div className={classes.cartquantparent}>
													<div className={classes.cartTitle}>{data.productId.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())} ({data.productVariantId.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())})</div>
													<div className={classes.priceperpiece}>Price : <CurrencyRupeeIcon sx={{ fontSize: '12px' }} /> {data.productVariantId.price}</div>
													{/* <div className={classes.priceperpiece}>Price : {data.productId.currency?.charAt(0).toUpperCase() + data.productId.currency?.slice(1).toLowerCase()} {data.productVariantId.price}</div> */}


													<div className={classes.productVariants}>
														<div className={classes.middleCart}>
															<div className={classes.alignSizeQuantity}>
																{data.productVariantId.attribute?.slice(0, 2).map((attribute, index, arr) => {
																	return (
																		<div className={classes.cartattribute} key={attribute.name}>
																			<div className={classes.varablesTitle}>{attribute.name} : </div>
																			<div>{attribute.values}<span style={{ marginRight: '5px' }}>{index < arr.length - 1 && arr.length > 1 ? ',' : ''}</span></div>
																		</div>
																	)
																})}

															</div>
															{/* <div className={classes.priceperpiece}>Net Weight : {(data.productVariantId.weight.netWeight * data.qty)}</div> */}
															<div className={classes.priceperpiece}>Package Weight : {(data.productVariantId.weight.packageWeight * data.qty)} Kg</div>
															<div className={classes.Quantity}>
																<div className={classes.varablesTitle}>Quantity : </div>
																<div className={classes.quantitySelector}>
																	{data.qty <= 1 ? " "
																		:
																		<button className={classes.quantityButton1} onClick={() => UpdateremoveCart(data._id, data.productVariantId._id, data.qty)}>-</button>
																	}
																	<span className={classes.quantityNumber}>{data.qty}</span>
																	<button className={classes.quantityButton2} onClick={() => UpdateAddCart(data._id, data.productVariantId._id, data.qty)}>+</button>
																</div>
															</div>
														</div>
													</div>

												</div>
												<div className={classes.cartdelete}>
													<div className="mobile">
														<div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {data.productVariantId.price * data.qty}</div>
													</div>
													<div className="desktop">
														<div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '22px' }} /> {data.productVariantId.price * data.qty}</div>
													</div>
													{/* <div className={classes.alignStars}>{data.productId.currency?.charAt(0).toUpperCase() + data.productId.currency?.slice(1).toLowerCase()} {data.productVariantId.price * data.qty}</div> */}
													<div className={classes.alignStars} style={{ cursor: 'pointer' }}>
														<DeleteIcon onClick={() => handleDeleteCart(data._id)} />
													</div>
												</div>
											</div>
											<div>{data.inventoryQuantity < 1 ?
												<div className={classes.outofstock}>! Out of Stock</div>
												: ''}
											</div>
										</div>
									)
								})
							) : (cartState.loading) ? (
								<div>loading...</div>
							) : (
								<div className={classes.emptycart}>Cart is empty</div>
							)
						}

					</div>
					<div className="mobile">
						{UsercartList?.length > 0 ?

							<Item><div>Sub Total  : </div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
							: ''}

					</div>
					<div className="desktop">
						<div className={classes.cartHeader}>
							{UsercartList?.length > 0 ?
								<Item><div>Sub Total  : </div><div className={classes.currancy}><CurrencyRupeeIcon sx={{ fontSize: '18px' }} /> {cartState.totalPrice}</div></Item>
								: ''}
							<div className="desktop">
								{UsercartList?.length > 0 ? (
									<button className={classes.checkoutBtn} onClick={handlecheckout}>Checkout</button>

								) :
									''
								}
							</div>
						</div>
					</div>
				</MyCartParent>
			</div>
		</>
	);
}

Cart_c.propTypes = {
	bgcolor: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Cart_c;
