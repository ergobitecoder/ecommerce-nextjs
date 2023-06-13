import React, { useContext, useEffect, useState } from "react";
import { MyThankYou, OrderList, useStyles } from "./index.styles";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaStar } from 'react-icons/fa'
import { saveRating } from "../../../services/apis/rating/rating";
import LoaderCartElement from "@/components/loader/LoaderCartElement";
import { useRouter } from "next/router";
import { getOrderDetails } from "@/api/order";
import { CartContext } from "@/context/cart";

function ThankYou_c(props) {
	const classes = useStyles()
	const [orderItems, setOrderItems] = useState([])
	const [totalPrice, setTotalPrice] = useState('');
	const [totalPackageCost, setTotalPackageCost] = useState('');
	const [loading, setLoading] = useState(true);
	const [status, setStatus] = useState(true);
	const { cartState, cartDispatch } = useContext(CartContext);
	const router = useRouter();
	const { uniqueOrderId } = router.query;

	// const [rating, setRating] = useState(null);
	// const [hover, setHover] = useState(null);

	// const GiveRating = async (productId, ratingsValue, userId) => {
	//     setRating(ratingsValue);
	//     const response = {
	//         userId: userId,
	//         productId: productId,
	//         rating: ratingsValue
	//     }
	//     const ratingData = response;
	//     const productRes = await saveRating(ratingData);
	// }


	useEffect(() => {
		const fetchData = async () => {
			if (uniqueOrderId) {
				const ordersDeatails = await getOrderDetails(uniqueOrderId);
				const token = localStorage.getItem("authToken");
				cartDispatch.fetchData(token);

				setOrderItems(ordersDeatails.data.result);
				setLoading(false);
				const productVariantTotalPrice = ordersDeatails.data.result.map((ele) => ele.totalPrice);
				const totalPrice = productVariantTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
				setTotalPrice(totalPrice);

				const weight = ordersDeatails.data.result.map((products) => (products.productVariantDetails.productVariantId.weight.packageWeight) * (products.productVariantDetails.qty));
				const totalWeight = weight.reduce((acc, cur) => acc + cur, 0);
				const roundedWeight = Math.ceil(totalWeight);
				const shippingCost = roundedWeight * 70;
				setTotalPackageCost(shippingCost);

				const uniqueStatus = ordersDeatails.data.result.map((data) => data.status);
				const uniqueStatusSet = new Set(uniqueStatus);
				const uniqueStatusString = Array.from(uniqueStatusSet).join(", ");
				setStatus(uniqueStatusString);

				setLoading(false);

			}
		};
		fetchData().catch(console.error);
	}, [uniqueOrderId]);
	return (
		<>
			
			{loading ? (
				<div><LoaderCartElement /></div>
			) : status == 2 ?
				<MyThankYou {...props} onClick={props.onClick}>
					<div className={classes.thankText}>
						<CheckCircleIcon sx={{ color: '#2AC957', fontSize: '22px' }} />Thank you for your order
					</div>
					<OrderList elevation={5} {...props} onClick={props.onClick}>
						<div className={classes.orderListhead}>
							<div className={classes.orderListhead1}>
								<div className={classes.estimatedTltle}>Estimated Delievery</div>
								{/* <div className={classes.estimatedTltle1}>dd month year</div> */}
							</div>
							<div className={classes.estimatedTltle}>Invoice</div>
						</div>
						<div>
							{loading ? (
								<div><LoaderCartElement /></div>
							) : orderItems?.length > 0 ? (
								orderItems.map((data, index) => {
									return (
										<div className={classes.cartList} key={index}>

											<div className={classes.imageparent}>
												<img
													className={classes.cartImg}
													src={data.productId.images && data.productId.images.length > 0 ? data.productId.images[0] : '/defaultimage.png'}
												/>
											</div>
											<div className={classes.cartdeletes}>
												{data.productId.description}
											</div>
											<div className={classes.middleCart}>
												<div className={classes.cartTitle}>{data.productName.replace(/(?:^|\s)\S/g, c => c.toUpperCase())} ({data.productVariantDetails.productVariantName.replace(/(?:^|\s)\S/g, c => c.toUpperCase())})</div>
												<div className={classes.priceperpiece}>Price : <CurrencyRupeeIcon sx={{ fontSize: '12px' }} /> {data.productVariantDetails.price}</div>

												<div className="">
													<div className={classes.priceperpiece}>Address : {data.userAddressId.address1},{data.userAddressId.city},{data.userAddressId.countryName}</div>
													<div className={classes.priceperpiece} style={{ marginTop: '6px' }}>Status : {data.status == 1 ? "In Progress" : data.status == 2 ? "Confirm" : "Completed"}</div>

												</div>
											</div>

											<div className={classes.quantitydisplay}>
												<div className={classes.alignStar}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} /> {data.totalPrice}</div>
												<div className={classes.qtyperpiece}>Qty : {data.productVariantDetails.quantity}</div>
											</div>
											{/* <div>
                                                        {[...Array(5)].map((star, i) => {
                                                            const ratingsValue = i + 1;
                                                            return (
                                                                <label key={i}>
                                                                    <input type="radio"
                                                                        name={`rating_${index}`}
                                                                        value={ratingsValue}
                                                                        onClick={() => {
                                                                            GiveRating(data.productId, ratingsValue,data.userId);
                                                                        }}
                                                                    />
                                                                    <FaStar
                                                                        className='star'
                                                                        size={30}
                                                                        color={((ratingsValue <= (hover || rating))) ? "#ffc107" : "black"}
                                                                        onMouseEnter={() => setHover(ratingsValue)}
                                                                        onMouseLeave={() => setHover(null)}
                                                                    />
                                                                </label>
                                                            )
                                                        })}
                                                    </div> */}
										</div>
									)
								})) : "Your Order is empty"}
						</div>
					</OrderList>
					<div className={classes.priceDetails}>
						<div className={classes.priceDetailsTilte}>Price Detail</div>
						<div className={classes.amountTitle}><div>Product Prices : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPrice}</div></div>
						<div className={classes.amountTitle}><div>shipping Cost : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPackageCost}</div></div>
						<div className={classes.amountTitle}><div>Total Amount : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {totalPrice + (totalPackageCost)}</div></div>
					</div>
				</MyThankYou>


				: <div className={classes.ordererror}>Your Order not succesfully done</div>}

		</>

	);
}
export default ThankYou_c;


