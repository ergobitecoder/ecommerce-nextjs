import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import {
	MyNavbar,
	SearchIconWrapper,
	useStyles,
	Search,
	IconLink,
} from "../styles/navbar.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
// import '../pages/navbar.css'
import Autosuggest from "react-autosuggest";
import { Menu, MenuItem, Typography } from '@mui/material';
import { AccountCircle, ExitToApp, ListAlt } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Disclosure } from '@headlessui/react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Transition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { autoSuggestion, getParentList } from "@/api/category";
import { getLoggedUserData } from "@/api/auth";
import { commonData } from "@/context/CommonDataContext";
import { useUserStatus } from "@/hooks/useUserStatus";
import { CartContext } from "@/context/cart";
import { useRouter } from "next/router";
function Navbar(props) {
	const childFunc = useRef();
	const classes = useStyles(props);
	const { cartState } = useContext(CartContext);
	const [category, setCategoryData] = useState([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [params, setParams] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [firstName, setFirstName] = useState({
		firstName: "company",
		data: "",
		isChanged: false,
	});
	const userSttus = useUserStatus();
	const router = useRouter();
	if (typeof window !== 'undefined') {
		var userId = localStorage.getItem("authToken")

		var cartCount = localStorage.getItem("cartCount")
	}
	// const location = useLocation();
	// const [userStatus, setUserStatus] = useState({ isLogged: false, userName: '' });
	const [anchorEl, setAnchorEl] = useState(null);
	const [commonData1, setCommonData1] = React.useContext(commonData);
	const handleClick = () => {
		if (userSttus.isLogged) {
			localStorage.clear();
			router.push("/");
		} else {
			router.push("/login");

		}
	};

	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				const fielddata = await getLoggedUserData(userId);
				// console.log(fielddata);
				setFirstName({ ...firstName, data: fielddata.data.result?.firstName });
			};
		}
		fetchData().catch(console.error);
	}, [userId]);

	useEffect(() => {
		const fetchData = async () => {
			const categorydata = await getParentList();
			setCategoryData(categorydata.data.result);
		};
		fetchData().catch(console.error);
	}, []);

	useEffect(() => {
		toggleMenu()
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			const productdata = await autoSuggestion({ name: params });
			//setData(productdata.data.result);
			const data = productdata.data.result.map((suggestion) => ({
				name: suggestion.name,
				url: suggestion.url,
			}));
			setSuggestions(data);
			// console.log(data, 'productdata.data.result');
		};

		fetchData().catch(console.error);
	}, [params]);

	function toggleMenu() {
		var menu = document.getElementById("menu");
		if (menu.style.display === "none") {
			console.log('aaacc');

			menu.style.display = "block";
			setIsMenuOpen(prevState => !prevState);
			document.addEventListener('click', closeMenu);
		} else {
			menu.style.display = "none";
			setIsMenuOpen(prevState => !prevState);
			document.removeEventListener('click', closeMenu);
		}

		function closeMenu(event) {
			if (!menu.contains(event.target) && event.target.id !== "category-btn") {
				menu.style.display = "none";
				setIsMenuOpen(false);
				document.removeEventListener('click', closeMenu);
			} else if (event.target.value !== "") {
				menu.style.display = "none";
				setIsMenuOpen(false);
				document.removeEventListener('click', closeMenu);
			}
		}
	}

	const renderSuggestionsContainer = ({ containerProps, children, query }) => {
		return (
			<div
				{...containerProps}

				className="suggestions-container"
			>
				{children}
			</div>
		);
	};
	const [autosuggestOpen, setAutosuggestOpen] = useState(false);

	const wrapperRef = useRef(null);
	const searchWrapperRef = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setAutosuggestOpen(false);
				setIsInputOpen(false);
			}
		};
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);

		};
	}, [wrapperRef]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
				setIsInputOpen(false);
			}
		};
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, [searchWrapperRef]);

	useEffect(() => {
		setIsInputOpen(false);
		setAnchorEl(null);
	}, [router]);

	const handleAttribute = (event, { suggestionValue } = {}) => {
		// code for handling user input and suggestion selection goes here
	};
	const [isInputOpen, setIsInputOpen] = useState(false);

	const handleSearchClick = () => {
		setIsInputOpen(!isInputOpen);
	}


	const closeDisclosure = () => {
		setCommonData1(prevState => ({ ...prevState, open: false }));
	};


	useEffect(() => {
		return () => {
			if (commonData1.open) {
				closeDisclosure();
			}
		};
	}, [router]);
	return (
		<MyNavbar>
			<div className={classes.desktopnav}>
				{/* <div className="sidedrawer">
                    <SideDrawer childFunc={childFunc} isMenuOpen={isMenuOpen} />
                </div> */}

				<div className={classes.navwidth}>
					<Box container="true" className={classes.responsivenav}>
						<Box className="desktop">
							<Link href={"/"}>
								<div className={classes.logo}>
									<img src="/title-logo.png" alt="" className={classes.titleLogo} />
									<img src="/infinity-logo.png" alt="" className={classes.infinityLogo} />
								</div>
							</Link>
						</Box>
						<Box className="mobile">
							<Link href={"/"}>
								<div className={classes.logo}>
									<img src="/title-logo.png" alt="" className={classes.titleLogo} />
									<img src="/infinity-logo.png" alt="" className={classes.infinityLogo} />
								</div>
							</Link>
						</Box>
						<Box>
							<Grid className="desktop" sx={{ textAlign: 'right', mb: '10px' }}>
								<div className={classes.root}>
									{/* <Link to="/">
                                        <IconLink>
                                            <HomeIcon />
                                        </IconLink>
                                    </Link> */}
									<Link href="/cart">
										<IconLink sx={{ mx: '22px' }}>
											<Badge badgeContent={cartCount >= 1 ? cartCount : ''} color={cartCount >= 1 ? "secondary" : "default"} invisible={cartCount < 1}>
												<ShoppingCartIcon />
											</Badge>
										</IconLink>
									</Link>

									<div className={classes.root}>
										<div className="desktop" style={{ zIndex: 10000 }}>
											{userSttus.isLogged ?
												<div className="dropdown">
													<div className="dropbtn">
														<div>
															{firstName.data.split(' ')
																.map(word => word.charAt(0).toUpperCase() + word.slice(1))
																.join(' ')}
														</div>
														<div>
															{/* { ? <KeyboardArrowUpIcon sx={{ marginTop: '10px' }} /> : <KeyboardArrowDownIcon sx={{ marginTop: '10px' }} />} */}
														</div>
													</div>
													<div className="dropdown-content">
														<Link href={'/orderlist'}>
															Order List
														</Link>
														<div onClick={handleClick} >
															Logout
														</div>
													</div>
												</div>
												:
												<Button className="bg-[#6B6868] text-[14px] text-[#FFFFFF] font-semibold rounded-full w-[52px]" onClick={handleClick}>Login</Button>
											}

										</div>
									</div>

								</div>
							</Grid>
							<Grid>
								<Grid
									display={"flex"}
									justifyContent={"space-around"}
									alignItems={"center"}
								>
									<Grid className="mobile">
										<div ref={searchWrapperRef}>
											<SearchIcon sx={{ color: '#FF00AE', mx: '10px' }} onClick={handleSearchClick} />
											{isInputOpen && (
												<div style={{ position: 'absolute', top: '78px', width: '100%', left: '0px', zIndex: '999', backgroundColor: 'white' }}>
													<Search>
														<Autosuggest
															suggestions={suggestions}
															onSuggestionsFetchRequested={() => { }}
															onSuggestionsClearRequested={() => { }}
															getSuggestionValue={(suggestion) => {
																return suggestion.name;
															}} renderSuggestion={(suggestion) => {
																const capitalizedSuggestion = suggestion.name.charAt(0).toUpperCase() + suggestion.name.slice(1);
																const url = suggestion.url;
																return (
																	<Link href={url}>
																		<div>{capitalizedSuggestion}</div>
																	</Link>
																);
															}}
															inputProps={{
																value: params,
																placeholder: "Search for Products",
																onChange: (event, { newValue }) => {
																	setParams(newValue);
																},
																onFocus: (event) => setAutosuggestOpen(true),
																onBlur: ((event) => (setAutosuggestOpen(false), setParams(""))),
																style: {
																	minWidth: "300px",
																	minHeight: "35px",
																	border: "0px",
																	// borderRadius: "20px",
																	width: "100%",
																	outline: "none",
																	paddingLeft: '10px',
																},
															}}
															renderSuggestionsContainer={renderSuggestionsContainer}
															onSuggestionSelected={(event, { suggestionValue }) => {
																setParams("");
																setSuggestions([]);
																setAutosuggestOpen(false);
															}}
															resetInputOnSelect={true}
															open={autosuggestOpen}

														/>
														<SearchIconWrapper>
															<SearchIcon sx={{ color: "#FF00AE", mt: '-2px' }} />
														</SearchIconWrapper>
													</Search>
												</div>

											)}
										</div>
									</Grid>
									<Grid className="mobile" >


										{/* <div className="dropdown">
                                            <div className="dropbtn">
                                                <div>
                                                    <IconLink>
                                                        <PersonIcon />
                                                    </IconLink>
                                                </div>
                                            </div>
                                            <div className="dropdown-content">
                                                <Link to={'/orderlist'}>
                                                    Order List
                                                </Link>
                                                {userSttus.isLogged ?
                                                    <div onClick={handleClick}>
                                                        Logout
                                                    </div> : <div onClick={handleClick}>
                                                        Login
                                                    </div>
                                                }
                                            </div>
                                        </div> */}
										{userSttus.isLogged ?
											<div className="dropdown">
												<div className="dropbtn">
													<div>
														<IconLink>
															<PersonIcon />
														</IconLink>
													</div>
												</div>
												<div className="dropdown-content">
													<Link href={'/orderlist'}>
														Order List
													</Link>
													<div onClick={handleClick}>
														Logout
													</div>
												</div>
											</div>
											: <IconLink onClick={handleClick}>
												<PersonIcon />
											</IconLink>}
									</Grid>
									<Grid className="mobile">
										{/* <IconLink sx={{ mx: '10px' }}>
                                            <Link to="/">
                                                <HomeIcon />
                                            </Link>
                                        </IconLink> */}
									</Grid>
									<Grid className="mobile" style={{ marginLeft: '10px' }}>
										<IconLink>
											<Link href="/cart">
												<Badge badgeContent={cartCount >= 1 ? cartCount : ''} color={cartCount >= 1 ? "secondary" : "default"} invisible={cartCount < 1}>
													<ShoppingCartIcon />
												</Badge>
											</Link>
										</IconLink>
									</Grid>


									<div id="menu" className="borderstyle">
										<ul className="categorycolumns">
											{/* <div className="mobile">
                                                <div style={{ textAlign: 'right' }}>
                                                    <CloseIcon sx={{ background: '#6B6868', color: 'white', borderRadius: '50px' }} />
                                                </div>
                                            </div> */}
											{category.map((categories, index) => {
												return (
													<div key={index} className="categoryhead">
														<Link href={{
															pathname: `/category`,
															search: `categoryId=${categories.parentCategory.id}`
														}}>
															<ul className={classes.parentCategory}>{categories.parentCategory.name}</ul>
														</Link>
														{categories.subCategories.map((subCategory) => {
															return (
																<div key={subCategory.id}>
																	<Link href={{
																		pathname: `/products`,
																		search: `categoryId=${subCategory.id}`
																	}}>
																		<li>
																			{subCategory.name}
																		</li>
																	</Link>
																</div>
															)
														})}
													</div>
												)
											})}
										</ul>
									</div>
									<Grid className="desktop">
										<Button className="bg-[#FF00AE] text-[14px] text-white font-semibold rounded-full mx-[15px] px-[10px]" id="category-btn" onClick={toggleMenu}>CATEGORY</Button>
									</Grid>
									<Grid className="desktop">
										<Link href="/aboutus">
											<Button className="bg-[#FF00AE] text-[14px] text-white font-semibold rounded-full mr-[15px] px-[8px]">ABOUT US</Button>
										</Link>
									</Grid>
									<Grid className="desktop">
										<Link href="/contact">
											<Button className="bg-[#FF00AE] text-[14px] text-white font-semibold rounded-full mx-[15px] px-[10px]">CONTACT</Button>
										</Link>
									</Grid>
									<Grid className="desktop">
										<Search>
											<Autosuggest
												suggestions={suggestions}
												onSuggestionsFetchRequested={() => { }}
												onSuggestionsClearRequested={() => { }}
												getSuggestionValue={(suggestion) => {
													return suggestion.name;
												}} renderSuggestion={(suggestion) => {
													const capitalizedSuggestion = suggestion.name.charAt(0).toUpperCase() + suggestion.name.slice(1);
													const url = suggestion.url;
													return (
														<Link href={url}>
															<div>{capitalizedSuggestion}</div>
														</Link>
													);
												}}
												inputProps={{
													value: params,
													placeholder: "Search for Products",
													onChange: (event, { newValue }) => {
														setParams(newValue);
													},
													onFocus: (event) => setAutosuggestOpen(true),
													onBlur: ((event) => (setAutosuggestOpen(false), setParams(""))),
													style: {
														minWidth: "187px",
														minHeight: "35px",
														border: "0px",
														borderRadius: "20px",
														width: "100%",
														outline: "none",
														paddingLeft: '10px',
													},
												}}
												renderSuggestionsContainer={renderSuggestionsContainer}

												onSuggestionSelected={(event, { suggestionValue }) => {
													setParams("");
													setSuggestions([]);
													setAutosuggestOpen(false);
												}}
												resetInputOnSelect={true}
												open={autosuggestOpen}

											/>
											<SearchIconWrapper>
												<SearchIcon sx={{ color: "#FF00AE" }} />
											</SearchIconWrapper>
										</Search>
									</Grid>
									{/* <Grid className="mobile" sx={{ mx: '10px' }}>
                                        <div onClick={() => childFunc.current()}>
                                            <IconLink>
                                                <MenuIcon />
                                            </IconLink>
                                        </div>
                                    </Grid> */}
									<Grid className="mobile" sx={{ mx: '7px' }}>
										{(commonData1.open) && <Disclosure>
											{({ open }) => (
												<div>
													<Disclosure.Button className={classes.disclosurebtn}>


														{open ? (
															<IconLink>
																<CloseIcon />
															</IconLink>
														) : (
															<IconLink>
																<MenuIcon />
															</IconLink>
														)}
													</Disclosure.Button>
													<Transition
														show={open}
														enter="transition duration-300 ease-in-out"
														enterFrom="transform scale-100 opacity-0"
														enterTo="transform scale-100 opacity-100"
														leave="transition duration-100 ease-in-out"
														leaveFrom="transform scale-100 opacity-100"
														leaveTo="transform scale-100 opacity-0"
													>

														<Disclosure.Panel style={{ position: 'absolute', top: '78px', width: '100%', left: '0px', borderTop: '1px solid #FF00AE' }} >
															<div className={classes.disclosure}>
																<div className="list">
																	<Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', px: '10px', width: '150px', marginTop: '15px' }} id="category-btn" onClick={toggleMenu}>CATEGORY</Button>
																	<Link href="/aboutus">
																		<Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', px: '10px', my: '20px', width: '150px' }}>ABOUT US</Button>
																	</Link>
																	<Link href="/contact">
																		<Button sx={{ background: '#FF00AE', fontSize: '14px', color: '#FFFFFF', fontWeight: '600', borderRadius: '50px', marginRight: '15px', px: '10px', width: '150px' }}>CONTACT</Button>
																	</Link>
																</div>

															</div>
														</Disclosure.Panel>
													</Transition>
												</div>
											)}
										</Disclosure>}
									</Grid>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</div>
			</div>

		</MyNavbar >
	);
}

Navbar.propTypes = {
	bgcolor: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Navbar;
