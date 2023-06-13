import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { MyMain, MyStyledGrid, MySideMenu } from "../../styles/category.styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Drawer, Paper, Slider } from "@mui/material";
import { useStyles } from "../../styles/category.styles";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";
import { getFiltersList } from "@/api/products";
import { getCategorysList } from "@/api/category";
import Link from "next/link";
import SEO from "@/next-seo.config";
import { NextSeo } from "next-seo";

const ProductCategory = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [csmProductData, setProductData] = useState('');
	const [page, setPage] = useState(0);
	const [selectedPage, setSelectedPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [id, setCategoriesId] = useState("");
	const location = useRouter();
	const childFunc = useRef(null);
	const [filterAttributes, setFilterAttributes] = useState([]);
	const [filtercategories, setFiltercategories] = useState([]);
	const [value, setValue] = useState([]);
	const [selectedValues, setSelectedValues] = useState([]);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [sortOrder, setSortOrder] = useState();
	const [priceRange, setPriceRange] = useState([0, 1000]);
	const [csmCategoryData, setCategoryData] = useState('');
	const [loading, setLoading] = useState(true);
	const [selectedChildCategory, setSelectedChildCategory] = useState('');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const router = useRouter();
	//extracting the categoryId value from the query parameters using the useRouter
	const { categoryId } = router.query;

	// fetching category list which have parent category of categoryId 
	useEffect(() => {
		const fetchData = async () => {
			if (categoryId) {
				const data = await getCategorysList(csmCategoryData, categoryId, priceRange, sortOrder);//api call to to fetch category list
				console.log(data);
				setData(data.data.result);
				setLoading(false);
			}
		};
		fetchData().catch(console.error);
	}, [csmCategoryData, categoryId, priceRange, sortOrder]);


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handlePageClick = (pageNum) => {
		setSelectedPage(pageNum);
		setPage(pageNum - 1);
	}

	//fetching attributes and child categories under categoryId
	useEffect(() => {
		const fetchData = async () => {
			if (categoryId) {
				const filterData = await getFiltersList(categoryId);
				setFilterAttributes(filterData.data.result.attributes);
				setFiltercategories(filterData.data.result.categories);
			}
		};
		fetchData().catch(console.error);
	}, [categoryId]);
	// console.log(selectedValues);



	const [state, setState] = React.useState({
		top: false,
	});

	//to show drawer to display categories names and attribute list in mobile device
	React.useEffect(() => {
		childFunc.current = toggleDrawer("top", true)
	}, [])

	const [selectedCategory, setSelectedCategory] = useState(null);

//to change css for selected category
	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		setState({ ...state, [anchor]: open });
	};

//to sort category list according to price 
	const handleSortChange = (event) => {
		setSortOrder(event.target.value);
	};

//to filter category list in selected price range 
	const handlePriceRangeChange = (event, newValue) => {
		setPriceRange(newValue);
	};

//to display category name and attribute filter in mobile device
	const list = (anchor) => (
		<div className="sidedrawer">

			<Box
				sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300, paddingLeft: '20px' }}
				role="presentation"
				// onClick={toggleDrawer(anchor, false)}
				onKeyDown={toggleDrawer(anchor, false)}
			>
				<div>
					<div>
						{filtercategories.map((categories) => {
							return (
								<>
									<div className={`categeorylinks ${categories.id === categoryId ? "selected" : ""}`} key={categories.name}>
										<Link href={`categories.url`}>
											<div className={`parentcategory ${categories.id === categoryId ? "selectedtext" : ""}`}>
												{categories.name.split(' ')
													.map(word => word.charAt(0).toUpperCase() + word.slice(1))
													.join(' ')}
											</div>
										</Link>
									</div>
									{/* {categories.child_cateegories.map((childcategories) => {
                                        return (
                                            <div className={`categeorylinks ${childcategories.id === id ? "selected" : ""}`} key={childcategories.name}>
                                                <Link to={childcategories.url}>
                                                    <div className={`childcategory ${childcategories.id === id ? "selectedtext" : ""}`}>
                                                        {childcategories.name.split(' ')
                                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                            .join(' ')}
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })} */}
									<div style={{ marginTop: '20px' }}>
										{data.length > 1 ? <div className="mobile">
											<select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px' }}>
												<option value="">Sort by</option>
												<option value="mintomax">Price : Low to High</option>
												<option value="maxtomin">Price : High to Low</option>
											</select>
										</div>
											: ''}
									</div>
									{data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ?
										<div className={classes.pricefilter} style={{ paddingRight: '20px' }}>
											<div className={classes.attributeName}>Price in  <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :
											</div>
											<Slider
												value={priceRange}
												onChange={handlePriceRangeChange}
												min={0}
												max={1000}
												valueLabelDisplay="auto"
											/>
											<div>{`Min Price : ${priceRange[0]}`}</div>
											<div>{`Max Price : ${priceRange[1]}`}</div>
										</div>
										: ''}
								</>

							)
						})}
					</div>
				</div>


			</Box>
		</div>
	);

	return (
		<>
			<div className="mx-auto lg:w-[1140px] 2xl:w-[1420px]">

				{filtercategories.map((category, index) => (
					<NextSeo
						key={index}
						title={`${category.name} - ${SEO.category.title}`}
						description={SEO.category.description}
						canonical={`${SEO.category.canonical.api}/category/${category.id}`}
						openGraph={{
							title: category.name,
							description: SEO.category.description,
							images: [
								{
									url: SEO.category.image,
									width: 800,
									height: 600,
									alt: 'Category Image',
								},
							],
							url: `${SEO.category.canonical.api}`,
						}}
					/>
				))}
				<MyMain>
					<MySideMenu>
						<div>
							{filtercategories.map((categories, index) => {
								return (
									<>
										<div className={`categeorylinks ${categories.id === categoryId ? "selected" : ""}`} key={categories.name}>
											<Link href={`categories.url`}>
												<div className={`parentcategory ${categories.id === categoryId ? "selectedtext" : ""}`}>
													{categories.name.split(' ')
														.map(word => word.charAt(0).toUpperCase() + word.slice(1))
														.join(' ')}
												</div>
											</Link>
										</div>
										{/* {categories.child_cateegories.map((childcategories) => {
										return (
											<div className={`categeorylinks ${childcategories.id === id ? "selected" : ""}`} key={childcategories.name}>
												<Link href={`childcategories.url`}>
													<div className={`childcategory ${childcategories.id === id ? "selectedtext" : ""}`}>
														{childcategories.name.split(' ')
															.map(word => word.charAt(0).toUpperCase() + word.slice(1))
															.join(' ')}
													</div>
												</Link>
											</div>
										)
									})} */}
									</>

								)
							})}
						</div>
						{data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ? <div className={classes.pricefilter}>
							<div className={classes.attributeName}>
								Price in  <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :
							</div>
							<Slider
								value={priceRange}
								onChange={handlePriceRangeChange}
								min={0}
								max={1000}
								valueLabelDisplay="auto"
							/>
							<div>{`Min Price : ${priceRange[0]}`}</div>
							<div>{`Max Price : ${priceRange[1]}`}</div>
						</div> : ''}
					</MySideMenu>

					<div className="filterdisplay">
						<Grid className="mobile" sx={{ width: '100%', position: 'fixed', bottom: '0px', padding: '0px' }}>
							<div onClick={() => childFunc.current()} className={classes.FilterButton}>
								<MenuIcon />  Filter
							</div>
						</Grid>
					</div>
					<div className="sidedrawer">
						<div className="sidedrawer">
							{["top"].map((anchor) => (
								<React.Fragment key={anchor}>
									<Drawer
										anchor={anchor}
										open={state[anchor]}
										onClose={toggleDrawer(anchor, false)}
										PaperProps={{
											style: {
												top: "76px",
												bottom: "52px"
											}
										}}
									>
										{list(anchor)}
									</Drawer>
								</React.Fragment>
							))}
						</div>
					</div>
					<MyStyledGrid>
						<Box sx={{ flexGrow: 1 }}>
							<div>
								<div className={classes.productpageheader}>
									<div>
										{filtercategories.map((categories, index) => {
											console.log(categories, 'categories');
											return (
												<>
													<div className={classes.selectedcat}>
														{categories.id === id ? categories.name.split(' ')
															.map(word => word.charAt(0).toUpperCase() + word.slice(1))
															.join(' ') : ''}
													</div>
													{categories.child_cateegories.map((childcategories) => {
														return (
															<div className={classes.selectedcat}>
																{childcategories.id === id ? childcategories.name.split(' ')
																	.map(word => word.charAt(0).toUpperCase() + word.slice(1))
																	.join(' ') : ''}
															</div>
														)
													})}
												</>

											)
										})}
									</div>
									<div>
										{data.length > 1 ? <div className="desktop">
											<select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px' }}>
												<option value="">Sort by</option>
												<option value="mintomax">Price: Low to High</option>
												<option value="maxtomin">Price: High to Low</option>
											</select>
										</div>
											: ''}
									</div>
								</div>
							</div>
							{data.length > 0 ?
								<div className={classes.productparent}>
									{data.map((ele, index) => {
										return (

											<div key={index} className={classes.spaceBox}>
												<Link href={`/products?categoryId=${ele._id}`}>
													<Paper sx={{ padding: { sm: '15px' } }}>
														<div className={classes.categoryList}>
															<img className={classes.categoryImage} src={ele.images && ele.images.length > 0 ? ele.images[0] : '/defaultimage.png'} alt={'product'} />
															<div className={classes.sliderspace}>
																<div className={classes.sliderflexBox}>
																	<div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
																	<div className={classes.StarIconsdesktop}><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /></div>
																</div>
																<div className={classes.StarIcons}><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /></div>
																<div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} />{ele.price}</div>
															</div>
														</div>
													</Paper>
												</Link>
											</div>
										)
									})}
								</div>
								:
								<div className={classes.noproductsParent}>
									<div>
										Currently we dont have child categories for this parent category
									</div>
									<div>
										please check later.
									</div>
								</div>
							}
						</Box>
					</MyStyledGrid>

				</MyMain>

				<div className="sidedrawer">
					{/* <FilterDrawer childFunc={childFunc} /> */}
				</div>
			</div>


		</>
	);
}

export default ProductCategory;