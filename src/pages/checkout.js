import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { MyCheckout, useStyles } from "../styles/checkout.styles";
import { Button, Dialog, DialogContent, DialogTitle, Paper, TextField, TextareaAutosize } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button1 from "@/components/Button";
import { CartContext } from "@/context/cart";
import { country } from "@/api/country";
import { createOrder } from "@/api/order";
import ErrorIcon from '@mui/icons-material/Error';
import ErrorDisplay from "@/components/ErrorDisplay";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { paymentgetway } from "@/api/payment";
import { useRouter } from "next/router";
import { editUserAddress, getLoggedUserData, getUserAddressData, submitUserAddress } from "@/api/auth";
import Link from "next/link";
import { NextSeo } from "next-seo";
import SEO from "@/next-seo.config";
import LoaderCartElement from "@/components/loader/LoaderCartElement";

function Checkout_c(props) {
	const classes = useStyles();
	const router = useRouter();
	//extracting the cartId value from the query parameters using the useRouter
	const { cartId } = router.query;
	if (typeof window !== 'undefined') {
		var accessToken = window.localStorage.getItem('accessToken');
		const refreshToken = window.localStorage.getItem('refreshToken');
		var userId = window.localStorage.getItem("authToken");
	}

	//to fetch user address data if already have created for logged in user
	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				const fielddata = await getUserAddressData(userId);
				setUserAddressId({ ...userAddressId, data: fielddata.data.result?._id })
				setName({ ...name, data: fielddata.data.result?.name });
				setFirstName({ ...firstName, data: fielddata.data.result?.firstName });
				setLastName({ ...lastName, data: fielddata.data.result?.lastName });
				setAddress1({ ...address1, data: fielddata.data.result?.address1 });
				setAddress2({ ...address2, data: fielddata.data.result?.address2 });
				setState({ ...state, data: fielddata.data.result?.state });
				setCity({ ...city, data: fielddata.data.result?.city });
				setCountryCode({ ...countryCode, data: fielddata.data.result?.countryCode });
				setCountryName({ ...countryName, data: fielddata.data.result?.countryName });
				setZipCode({ ...zipCode, data: fielddata.data.result?.zipCode });
				setPhone({ ...phone, data: fielddata.data.result?.phone });
				setZipCode({ ...zipCode, data: fielddata.data.result?.zipCode });
				setApartment({ ...apartment, data: fielddata.data.result?.apartment });
			}
		};
		fetchData().catch(console.error);
	}, []);

	// to fetch logged in user data 
	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				const fielddata = await getLoggedUserData(userId);
				setEmailId({ ...emailId, data: fielddata?.data.result?.email });
			}

		};
		fetchData().catch(console.error);
	}, []);

	const [emailId, setEmailId] = useState({
		field: "emailId",
		data: "",
		isChanged: false,
	});
	const [name, setName] = useState({
		field: "name",
		data: "",
		isChanged: false,
	});
	const [firstName, setFirstName] = useState({
		field: "firstName",
		data: "",
		isChanged: false,
	});
	const [lastName, setLastName] = useState({
		field: "lastName",
		data: "",
		isChanged: false,
	});
	const [address1, setAddress1] = useState({
		field: "address1",
		data: "",
		isChanged: false,
	});
	const [address2, setAddress2] = useState({
		field: "address2",
		data: "",
		isChanged: false,
	});
	const [city, setCity] = useState({
		field: "city",
		data: "",
		isChanged: false,
	});

	const [countryCode, setCountryCode] = useState({
		field: "countryCode",
		data: "",
		isChanged: false,
	});
	const [countryName, setCountryName] = useState({
		field: "countryName",
		data: "",
		isChanged: false,
	});
	const [zipCode, setZipCode] = useState({
		field: "zipCode",
		data: "",
		isChanged: false,
	});
	const [phone, setPhone] = useState({
		field: "phone",
		data: "",
		isChanged: false,
	});
	const [state, setState] = useState({
		field: "state",
		data: "",
		isChanged: false,
	});
	const [apartment, setApartment] = useState({
		field: "apartment",
		data: "",
		isChanged: false,
	});
	const [status, setStatus] = useState('');
	const { cartState } = useContext(CartContext);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCountryCode, setSelectedCountryCode] = useState('');
	const [productId, setProductId] = useState([]);
	const [productVariantId, setProductVariantId] = useState([]);
	const [totalPrice, setTotalPrice] = useState();
	const [quantity, setQuantity] = useState();
	const [count, setCount] = useState();
	const [productVariantPrice, setProductVariantPrice] = useState();
	const [currency, setCurrency] = useState();
	const [notes, setNotes] = useState({
		field: 'notes',
		data: "",
		isChanged: false
	});
	const [userAddressId, setUserAddressId] = useState({
		field: "userAddressId",
		data: "",
		isChanged: false,
	});
	const [productPackageCost, setProductPackageCost] = useState('')


	const [Ename, setEname] = useState('');
	const [EfirstName, setEfirstName] = useState('');
	const [ElastName, setElastName] = useState('');
	const [Eaddress1, setEaddress1] = useState('');
	const [Ecity, setECity] = useState('');
	const [Estate, setEState] = useState('');
	const [EcountryCode, setEcountryCode] = useState('');
	const [EcountryName, setEcountryName] = useState('');
	const [EzipCode, setEzipCode] = useState('');
	const [Ephone, setEphone] = useState('');
	const [Eemail, setEemail] = useState('');

	useEffect(() => {
		if (emailId.data === "" && emailId.isChanged === true) {
			setEemail("Email can't Be Empty.");
		} else {
			setEemail("");
		}
	}, [emailId.data]);

	useEffect(() => {
		if (state.data === "" && state.isChanged === true) {
			setEState("State can't Be Empty.");
		} else {
			setEState("");
		}
	}, [state.data]);

	useEffect(() => {
		if (countryCode.data === "" && countryCode.isChanged === true) {
			setEcountryCode("Country Code can't Be Empty.");
		} else {
			setEcountryCode("");
		}
	}, [countryCode.data]);

	useEffect(() => {
		if (countryName.data === "" && countryName.isChanged === true) {
			setEcountryName("Country Name can't Be Empty.");
		} else {
			setEcountryName("");
		}
	}, [countryName.data]);

	useEffect(() => {
		if (zipCode.data === "" && zipCode.isChanged === true) {
			setEzipCode("Zip Code can't Be Empty.");
		} else {
			setEzipCode("");
		}
	}, [zipCode.data]);

	useEffect(() => {
		if (phone.data === "" && phone.isChanged === true) {
			setEphone("Phone can't Be Empty.");
		}
		else if (phone.data.length !== 10 && phone.isChanged === true) {
			setEphone("Minimum Phone number Length should be Ten characters");
		} else {
			setEphone("");
		}
	}, [phone.data]);

	useEffect(() => {
		if (city.data === "" && city.isChanged === true) {
			setECity("City can't Be Empty.");
		} else {
			setECity("");
		}
	}, [city.data]);

	useEffect(() => {
		if (name.data === "") {
			setEname("Name can't Be Empty.");
		} else {
			setEname("");
		}
	}, [name.data]);

	useEffect(() => {
		if (firstName.data === "" && firstName.isChanged === true) {
			setEfirstName("First Name can't Be Empty.");
		} else {
			setEfirstName("");
		}
	}, [firstName.data]);

	useEffect(() => {
		if (lastName.data === "" && lastName.isChanged === true) {
			setElastName("Last Name  can't Be Empty.");
		} else {
			setElastName("");
		}
	}, [lastName.data]);

	useEffect(() => {
		if (address1.data === "" && address1.isChanged === true) {
			setEaddress1("Address1 can't Be Empty.");
		} else {
			setEaddress1("");
		}
	}, [address1.data]);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (firstName.data === "") {
			setEfirstName("First Name can't Be Empty.");
		}
		if (lastName.data === "") {
			setElastName("Last Name can't Be Empty.");
		}
		if (address1.data === "") {
			setEaddress1("Address1 can't Be Empty.");
		}
		if (city.data === "") {
			setECity("City can't Be Empty.");
		}
		if (phone.data === "") {
			setEphone("Phone can't Be Empty.");
		}
		if (zipCode.data === "") {
			setEzipCode("ZipCode can't Be Empty.");
		}
		if (countryCode.data === "") {
			setEcountryCode("Country Code can't Be Empty.");
		}
		if (countryName.data === "") {
			setEcountryName("Country Name can't Be Empty.");
		}
		if (state.data === "") {
			setEState("State can't Be Empty.");
		}
		if (emailId.data === "") {
			setEemail("Email id can't Be Empty.");
		}
		const response = {
			userId: userId,
			emailId: emailId,
			name: name,
			firstName: firstName,
			lastName: lastName,
			address1: address1,
			status: 1,
			city: city,
			phone: phone,
			state: state,
			zipCode: zipCode,
			countryCode: countryCode,
			countryName: countryName,
			apartment: apartment
		}
		if (response.firstName.data !== '' && response.state.data !== '' && response.lastName.data !== '' && response.address1.data !== '' && response.city.data !== '' && response.zipCode.data !== '' && response.countryName.data !== '') {
			const UserAddressData = response;
			if (accessToken) {
				if (userAddressId.data) {
					const UserRes = await editUserAddress(UserAddressData, userId);//to update user address if user have already address and user update again
					if (UserRes) {

						if (userAddressId.data) {
							handleCreateOrder(e, userAddressId.data);//function to create order
						}
					} else {
						console.log('User Address not succesfully added');
					}
				} else {
					const UserRes = await submitUserAddress(UserAddressData, userId);////to create user address
					if (UserRes) {
						const userAddressId = UserRes.data.result._id;
						if (userAddressId) {
							handleCreateOrder(e, userAddressId);//function to create order
						}
					} else {
						console.log('User Address not succesfully added');
					}
				}
			}

		}

	};

	const [singleCartId, setSingleCartId] = useState('');
	const [cartIds, setCartIds] = useState('');

	const cartItems = singleCartId
		? cartState.cartData.filter((item) => item._id === singleCartId)
		: cartState.cartData;

	useEffect(() => {
		const cartId = cartItems.map((products) => products._id);//to extract cart id from cart data
		setCartIds(cartId);

		const currency = cartItems.map((products) => products.productId.currency);
		const uniqueArr = [...new Set(currency)];
		const currencyCode = uniqueArr[0];
		setCurrency(currencyCode);

		//to get product variant price from cart data
		const productVariantPrice = cartItems.map((products) => (products.productVariantId.price) * (products.qty));
		const variantprice = productVariantPrice.reduce((acc, cur) => acc + cur, 0);
		setProductVariantPrice(variantprice);

		//to get package weight of each product and set shipping cost according to package weight
		const weight = cartItems.map((products) => (products.productVariantId.weight.packageWeight) * (products.qty));
		const totalWeight = weight.reduce((acc, cur) => acc + cur, 0);
		const roundedWeight = Math.ceil(totalWeight);
		const shippingCost = roundedWeight * 70;
		setProductPackageCost(shippingCost);

		const qty = cartItems.qty

		const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

		setQuantity(totalQty);

		const totalPrice = cartItems.totalPrice;
		setTotalPrice(totalPrice);
		const count = cartItems.cartCount;
		setCount(count);
	}, [cartIds, productId, productVariantId, totalPrice, quantity, count])

	const [error, setError] = useState("");

	//function to create order
	const handleCreateOrder = async (e, userAddressId) => {
		e.preventDefault();
		const response = {
			userId: localStorage.getItem("authToken"),
			cartId: cartId ? cartId : cartIds,
			currency: currency,
			userAddressId: userAddressId,
			notes: notes.data
		}
		const OrderresData = response;
		if (accessToken) {
			const Orderres = await createOrder(OrderresData);//api call to create order

			//to get unique order id from orders created 
			const uniqueOrderId = Orderres.data.result.map((ele) => ele.uniqueOrderId);
			const uniqueOrderIdSet = new Set(uniqueOrderId);
			const uniqueOrderIdString = Array.from(uniqueOrderIdSet).join(", ");

			//to get currency from orders created 
			const currencyRes = Orderres.data.result.map((ele) => ele.currency);
			const currencySet = new Set(currencyRes);
			const currency = Array.from(currencySet).join(", ");

			//to get total price from orders created 
			const totalPriceRes = Orderres.data.result.map((ele) => (ele.totalPrice));
			const totalPriceSum = totalPriceRes.reduce((acc, cur) => acc + cur, 0);

			if (Orderres) {
				const paymentRes = {
					order_id: uniqueOrderIdString,
					currency: currency,
					amount: totalPriceSum + productPackageCost,
					billing_name: firstName.data,
					billing_address: address1.data,
					billing_city: city.data,
					billing_state: state.data,
					billing_zip: zipCode.data,
					billing_country: countryName.data,
					billing_tel: phone.data,
					billing_email: emailId.data,
					customer_identifier: userId ? userId : guestUserId
				}
				if (paymentRes) {
					const paymentData = paymentRes;
					const paymentsuccess = await paymentgetway(paymentData);//api call to create payment url
					if (paymentsuccess) {
						const url = paymentsuccess.data.result;
						router.push(url);  //to redirect to payment url
					}
				}
			} else {
				console.log('Order not created succesfully added');
			}
		}
	};

	const filteredCountries = country.filter((country) => {
		if (!searchTerm) return true;
		return country.name.toLowerCase().includes(searchTerm.toLowerCase());
	});

	function handleSelectCountryCode(event) {
		setSelectedCountryCode(event.target.value);
	}

	function handleSearchInputChange(event) {
		setSearchTerm(event.target.value);
	}

	function handleCountrySelect(country) {
		setSelectedCountryCode(country.code);
		setSearchTerm(country.name);
	}

	return (
		<>
			<NextSeo
				title={SEO.checkout.title}
				description={SEO.checkout.description}
				canonical={`${SEO.checkout.canonical.api}/checkout`}
				openGraph={{
					title: SEO.checkout.title,
					description: SEO.checkout.description,
					images: [
						{
							url: SEO.checkout.image,
							width: 800,
							height: 600,
							alt: 'Checkout Image',
						},
					],
					url: `${SEO.checkout.canonical.api}/checkout`,
				}}
				twitter={{
					cardType: SEO.twitter.cardType,
					site: SEO.twitter.site,
					title: SEO.twitter.title,
					handle: SEO.twitter.handle,
				}}
			/>
			{
				error &&
				<Dialog open={true} onClose={() => setError("")}>
					<DialogTitle><ErrorIcon sx={{ marginLeft: '45%', color: 'red', fontSize: '32px' }} /></DialogTitle>
					<DialogContent sx={{ fontWeight: '700', fontSize: '22px' }}>{error}</DialogContent>
				</Dialog>
			}

			<MyCheckout {...props} onClick={props.onClick}>
				<div className={classes.userDetails}>
					<div className={classes.checkouthead}>
						<div className={classes.contactTitle}>Contact Information</div>
					</div>
					<div className={classes.inputFields}>
						<TextField
							label="Email Id"
							name="Email Id"
							autoFocus
							sx={{ minWidth: '100%' }}
							value={emailId.data}
							onChange={(e) =>
								setEmailId({
									...emailId,
									data: e.target.value,
									isChanged: true,
								})
							}
						/>
						<div style={{ marginTop: '10px' }}>
							<ErrorDisplay data={Eemail} />
						</div>

					</div>
					<div className={classes.inputFields}>
						<div className={classes.multipleInputsRow}>
							<TextField
								required
								label="Country Code"
								name="CountryCode"
								autoFocus
								sx={{ minWidth: '20%' }}
								value={countryCode.data}
								type="text"
								onChange={(e) =>
									setCountryCode({
										...countryCode,
										data: e.target.value,
										isChanged: true,
									})
								}
							/>
							<TextField
								required
								label="Phone No"
								name="Phone No"
								autoFocus
								sx={{ minWidth: '80%' }}
								value={phone.data}
								type="number"
								onChange={(e) =>
									setPhone({
										...phone,
										data: e.target.value,
										isChanged: true,
									})
								}
							/>

						</div>
						<div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
							{/* <ErrorDisplay data={EcountryCode} /> */}
							<ErrorDisplay data={Ephone} />
						</div>
					</div>
					<div className={classes.shippingtitle}>Shipping Address</div>
					<div className={classes.inputFields}>
						<select
							style={{ minWidth: '100%', minHeight: '45px' }}
							value={countryName.data}
							onChange={(e) =>
								setCountryName({
									...countryName,
									data: e.target.value,
									isChanged: true,
								})
							}
						>
							<option value="">Country</option>
							<option>India</option>
							<option>England</option>
							<option>America</option>
						</select>
						<div style={{ marginTop: '10px' }}>
							<ErrorDisplay data={EcountryName} />
						</div>
					</div>
					<div className="mobile">
						<div className={classes.inputFields}>
							<TextField
								required
								label="First Name"
								name="First Name"
								autoFocus
								sx={{ minWidth: '100%' }}
								value={firstName.data}
								onChange={(e) =>
									setFirstName({
										...firstName,
										data: e.target.value,
										isChanged: true,
									})
								}
							/>
							<div style={{ marginTop: '10px' }}>
								<ErrorDisplay data={EfirstName} />
							</div>
						</div>
						<div className={classes.inputFields}>
							<div>
								<TextField
									required
									label="Last Name"
									name="Last Name"
									autoFocus
									sx={{ minWidth: '100%' }}
									value={lastName.data}
									onChange={(e) =>
										setLastName({
											...lastName,
											data: e.target.value,
											isChanged: true,
										})
									}
								/>
								<div style={{ marginTop: '10px' }}>
									<ErrorDisplay data={ElastName} />
								</div>
							</div>
						</div>
					</div>
					<div className="desktop">
						<div className={classes.inputFields}>
							<div className={classes.multipleInputsRow}>
								<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
									<TextField
										required
										label="First Name"
										name="First Name"
										autoFocus
										sx={{ minWidth: '100%' }}
										value={firstName.data}
										onChange={(e) =>
											setFirstName({
												...firstName,
												data: e.target.value,
												isChanged: true,
											})
										}
									/>
								</div>
								<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>

									<TextField
										required
										label="Last Name"
										name="Last Name"
										autoFocus
										sx={{ minWidth: '100%' }}
										value={lastName.data}
										onChange={(e) =>
											setLastName({
												...lastName,
												data: e.target.value,
												isChanged: true,
											})
										}
									/>
								</div>
							</div>
						</div>
						<div className={classes.multipleInputsRow}>
							<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
								<div style={{ marginTop: '10px' }}>
									<ErrorDisplay data={EfirstName} />
								</div>
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
								<div style={{ marginTop: '10px' }}>
									<ErrorDisplay data={ElastName} />
								</div>
							</div>
						</div>
					</div>
					<div className="desktop">
						<div className={classes.inputFields}>
							<div className={classes.multipleInputsRow}>
								<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
									<TextField
										label="City"
										name="City"
										autoFocus
										sx={{ minWidth: '100%' }}
										value={city.data}
										required
										onChange={(e) =>
											setCity({
												...city,
												data: e.target.value,
												isChanged: true,
											})
										}
									/>
								</div>
								<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
									<TextField
										required
										label="State"
										name="State"
										autoFocus
										sx={{ minWidth: '100%' }}
										value={state.data}
										onChange={(e) =>
											setState({
												...state,
												data: e.target.value,
												isChanged: true,
											})
										}
									/>
								</div>
							</div>

							<div className={classes.multipleInputsRow}>
								<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
									<div style={{ marginTop: '10px' }}>
										<ErrorDisplay data={Ecity} />
									</div>
								</div>
								<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
									<div style={{ marginTop: '10px' }}>
										<ErrorDisplay data={Estate} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.inputFields}>
						<TextField
							required
							label="Address"
							name="Address"
							autoFocus
							sx={{ minWidth: '100%' }}
							value={address1.data}
							onChange={(e) =>
								setAddress1({
									...address1,
									data: e.target.value,
									isChanged: true,
								})
							}
						/>
						<div style={{ marginTop: '10px' }}>
							<ErrorDisplay data={Eaddress1} />
						</div>
					</div>
					<div className={classes.inputFields}>
						<TextField
							label="Apartment"
							name="Apartment"
							autoFocus
							sx={{ minWidth: '100%' }}
							value={apartment.data}
							onChange={(e) =>
								setApartment({
									...apartment,
									data: e.target.value,
									isChanged: true,
								})
							}
						/>

					</div>

					<div className="mobile">
						<div className={classes.inputFields}>
							<div>
								<TextField
									label="City"
									name="City"
									autoFocus
									sx={{ minWidth: '100%', }}
									value={city.data}
									required
									onChange={(e) =>
										setCity({
											...city,
											data: e.target.value,
											isChanged: true,
										})
									}
								/>
								<div style={{ marginTop: '10px' }}>
									<ErrorDisplay data={Ecity} />
								</div>
							</div>
						</div>

						<div className={classes.inputFields}>

							<div>
								<TextField
									required
									label="State"
									name="State"
									autoFocus
									sx={{ minWidth: '100%' }}
									value={state.data}
									onChange={(e) =>
										setState({
											...state,
											data: e.target.value,
											isChanged: true,
										})
									}
								/>
								<div style={{ marginTop: '10px' }}>
									<ErrorDisplay data={Estate} />
								</div>
							</div>
						</div>
					</div>
					<div className={classes.inputFields}>
						<TextField
							required
							label="PinCode"
							name="pincode"
							autoFocus
							sx={{ minWidth: '100%' }}
							value={zipCode.data}
							onChange={(e) =>
								setZipCode({
									...zipCode,
									data: e.target.value,
									isChanged: true,
								})
							}
						/>
						<div style={{ marginTop: '10px' }}>
							<ErrorDisplay data={EzipCode} />
						</div>
					</div>
					<div className={classes.inputFields}>
						<TextareaAutosize
							minRows={3}
							placeholder="Add Notes"
							style={{
								borderRadius: "5px",
								padding: "2px 2px 2px 2px", width: '100%', textAlign: 'left'
							}}
							value={notes.data}
							type="text"
							onChange={(e) =>
								setNotes({
									...notes,
									data: e.target.value,
									isChanged: true,
								})
							}
						/>

					</div>
				</div>


				<div className={classes.cartParent}>
					{
						cartState.loading ? (
							<div><LoaderCartElement/></div>
						) :
							cartItems?.length > 0 ? (
								cartItems.map((data, index) => {
									return (
										<div className={classes.cartDetails} key={index}>
											<div className={classes.cartList}>
												<div className={classes.img}>
													<img
														className={classes.cartImg}
														src={data.productId.images && data.productId.images.length > 0 ? data.productId.images[0] : '/defaultimage.png'}
													/>
												</div>
												<div className={classes.middleCart}>
													<div>
														<div className={classes.cartTitle}>{data.productId.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())} ({data.productVariantId.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())})</div>
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
														<div className={classes.priceperpiece}>Package Weight : {(data.productVariantId.weight.packageWeight * data.qty)} Kg</div>
													</div>
												</div>
												<div className={classes.quantitydisplay}>
													<div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} /> {data.productVariantId.price * data.qty}</div>
													<div className={classes.qtyperpiece}>Qty : {data.qty}</div>
												</div>
											</div>
											<div className={classes.paddingdstock}>{data.inventoryQuantity < 1 ?
												<div className={classes.outofstock}>! Out of Stock</div>
												: ''}
											</div>
										</div>
									)
								})) : "Cart is empty"}
					<div className={classes.priceDetails}>
						<div className={classes.priceDetailsTilte}>Price Detail</div>
						<div className={classes.amountTitle}><div>Product Prices : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {productVariantPrice}</div></div>
						<div className={classes.amountTitle}><div>Shipping Cost : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {productPackageCost}</div></div>
						<div className={classes.amountTitle}><div>Total Amount : </div><div className={classes.alignStars}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {productVariantPrice + (productPackageCost)}</div></div>
					</div>
					<div className={classes.continueBtnwrap}>
						<button className={classes.continueBtn} onClick={onSubmit}>Continue</button>
					</div>
				</div>

			</MyCheckout >
		</>

	);
}
export default Checkout_c;
