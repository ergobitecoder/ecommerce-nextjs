import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from "react";
import { MyMain, MyStyledGrid, MySideMenu, useStyles } from "../styles/category.styles";
import Box from "@mui/material/Box";
import { Drawer, Grid, Paper, Slider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import FilterDrawer from "../../stories/containers/filterDrawer/FilterDrawer";
import MenuIcon from "@mui/icons-material/Menu";
// import LoaderElement from "../../components/loader/LoaderElement";
import Link from "next/link";
// import { Helmet } from "react-helmet";
import { getFiltersList, getProductsList } from '@/api/products';
import { NextSeo } from 'next-seo';
import SEO from '@/next-seo.config';
function Products() {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [csmProductData, setProductData] = useState('');
	const [page, setPage] = useState(0);
	const [selectedPage, setSelectedPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const location = useRouter();
	const childFunc = useRef(null);
	const [filterAttributes, setFilterAttributes] = useState([]);
	const [filtercategories, setFiltercategories] = useState([]);
	const [value, setValue] = useState([]);
	const [selectedValues, setSelectedValues] = useState([]);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [sortOrder, setSortOrder] = useState();
	const [priceRange, setPriceRange] = useState([0, 1000]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handlePageClick = (pageNum) => {
		setSelectedPage(pageNum);
		setPage(pageNum - 1);
	}

	const router = useRouter();
	const { categoryId } = router.query;
	useEffect(() => {
		const fetchData = async () => {
			// console.log(id);
			if (categoryId) {
				const filterData = await getFiltersList(categoryId);
				setFilterAttributes(filterData.data.result.attributes);
				setFiltercategories(filterData.data.result.categories);
			}
		};
		fetchData().catch(console.error);
	}, [categoryId]);
	// console.log(selectedValues);

	const handlePriceRangeChange = (event, newValue) => {
		setPriceRange(newValue);
	};

	useEffect(() => {
		const fetchData = async () => {
			if (categoryId) {
				const start = page * 10;
				const productdata = await getProductsList(csmProductData, categoryId, start, 12, selectedValues, priceRange, sortOrder);
				setData(productdata.data.result);
				setLoading(false);
				const totalOrders = productdata.data.total;
				const totalPages = Math.ceil(totalOrders / 10);
				setTotalPages(totalPages);
			}
		};
		fetchData().catch(console.error);
	}, [csmProductData, categoryId, page, selectedValues, priceRange, sortOrder]);

	const showArrows = totalPages > 1;
	let pageNumbers = [];
	if (showArrows) {
		const startPage = Math.max(selectedPage - 2, 1);
		const endPage = Math.min(startPage + 4, totalPages);
		pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	} else {
		pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	}


	const [state, setState] = React.useState({
		top: false,
	});


	React.useEffect(() => {
		childFunc.current = toggleDrawer("top", true)
	}, [])

	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	const toggleDrawer = (anchor, open) => (event) => {

		setState({ ...state, [anchor]: open });
	};
	const handleSortChange = (event) => {
		setSortOrder(event.target.value);
	};

	const handleSelectAll = () => {
		// setSelectedValues(values);
	};

	const handleClearAll = () => {
		setSelectedValues([]);
	};

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
									<div className={`categeorylinks ${categories.id === categoryId ? "selected" : ""}`} key={categories.id}>
										<Link href={categories.url}>
											<div className={`parentcategory ${categories.id === categoryId ? "selectedtext" : ""}`}>
												{categories.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())}
											</div>
										</Link>
									</div>
									{categories.child_cateegories.map((childcategories) => {
										return (
											<div className={`categeorylinks ${childcategories.id === categoryId ? "selected" : ""}`} key={childcategories.id}>
												<Link href={childcategories.url}>
													<div className={`childcategory ${childcategories.id === categoryId ? "selectedtext" : ""}`}>
														{childcategories.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())}
													</div>
												</Link>
											</div>
										)
									})}
								</>

							)
						})}
						{data.length > 1 ? <div style={{ marginTop: '20px', marginBottom: '20px' }}>
							<select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px', }}>
								<option value="">Sort by</option>
								<option value="mintomax">Price : Low to High</option>
								<option value="maxtomin">Price : High to Low</option>
							</select>

						</div>
							: ''}
					</div>
					{data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ? <div className={classes.pricefilter} style={{ paddingRight: '20px' }}>
						<div className={classes.attributeName}>Price in <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :</div>
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
					<div>

						{filterAttributes.map((attr, index) => {
							const { name, values, data } = attr;
							return (
								<div key={index} className={classes.singlefilter}>
									<div className={classes.attributeName}>{name
										.replace(/(?:^|\s)\S/g, c => c.toUpperCase())}</div>
									{values.map((value) => {
										const isSelected = selectedValues.includes(value);
										return (
											<div className={classes.attributeValues} key={value}>
												<label>
													<input
														type="checkbox"
														checked={isSelected}
														onChange={() => {
															if (isSelected) {
																setSelectedValues(selectedValues.filter(val => val !== value));
															} else {
																setSelectedValues([...selectedValues, value]);
															}
														}}
													/>
													{value}
												</label>
											</div>
										);
									})}
									{selectedValues.some(selected => values.includes(selected)) && <div>{data}</div>}
								</div>
							);
						})}
					</div>
				</div>

			</Box>
		</div>
	);
	const [allSelected, setAllSelected] = useState(filterAttributes.map(() => false));
	const [selectedChildCategory, setSelectedChildCategory] = useState(null);
console.log(SEO.category.canonical,'SEO.category.canonical');
	return (
		<>
			{filtercategories.map((category, index) => (
				<NextSeo
					key={index}
					title={`${selectedChildCategory ? selectedChildCategory : category.name} - ${SEO.category.title}`}
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
						url: `${SEO.category.canonical.api}/category/${category.id}`,
					}}
				/>
			))}
			<MyMain className="mx-auto lg:w-[1140px] 2xl:w-[1420px]">
				<MySideMenu>
					<div>
						{filtercategories.map((categories, index) => {
							return (
								<div key={categories.id}>
									<div className={`categeorylinks ${categories.id === categoryId ? "selected" : ""}`} key={categories.id}>
										<Link href={categories.url}>
											<div className={`parentcategory ${categories.id === categoryId ? "selectedtext" : ""}`} onClick={() => setSelectedChildCategory(categories.name)}>
												{categories.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())}
											</div>
										</Link>
									</div>
									{categories.child_cateegories.map((childcategories) => {
										return (

											<div className={`categeorylinks ${childcategories.id === categoryId ? "selected" : ""}`} key={childcategories.id}>
												<Link href={childcategories.url}>
													<div className={`childcategory ${childcategories.id === categoryId ? "selectedtext" : ""}`} onClick={() => setSelectedChildCategory(childcategories.name)}>
														{childcategories.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase())}
													</div>
												</Link>
											</div>
										)
									})}
								</div>

							)
						})}
					</div>
					{data.length > 1 || priceRange[0] !== 0 || priceRange[1] !== 1000 ? <div className={classes.pricefilter}>
						<div className={classes.attributeName}>Price in <CurrencyRupeeIcon sx={{ fontSize: '22px', marginBottom: '-5px' }} /> :</div>
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

					<div className={classes.attributeslist}>
						{filterAttributes.map((attr, index) => {
							const { name, values, data } = attr;
							const isSelectedAll = allSelected[index];
							const isSelectedSome = selectedValues.some(selected => values.includes(selected));

							return (
								<div key={index} className={classes.singlefilter}>
									<div className={classes.attributeName}>{name
										.replace(/(?:^|\s)\S/g, c => c.toUpperCase())}</div>
									{values.length >= 2 ?
										<div className={classes.attributeValues} key={values}>
											<label>
												<input
													type="checkbox"
													checked={isSelectedAll}
													onChange={(e) => {
														const isChecked = e.target.checked;
														setAllSelected(prev => prev.map((selected, i) => i === index ? isChecked : selected));
														if (isChecked) {
															setSelectedValues(prev => [...prev, ...values]);
														} else {
															setSelectedValues(prev => prev.filter(val => !values.includes(val)));
														}
													}}
													className="custom-checkbox"
												/>
												Select All
											</label>
										</div> : ''
									}
									{values.map((value) => {
										const isSelected = selectedValues.includes(value);
										return (
											<div className={classes.attributeValues} key={value}>
												<label>
													<input
														type="checkbox"
														checked={isSelected}
														onChange={() => {
															if (isSelected) {
																setSelectedValues(selectedValues.filter(val => val !== value));
															} else {
																setSelectedValues([...selectedValues, value]);
															}
														}}
														className="custom-checkbox"
													/>
													{value}
												</label>
											</div>
										);
									})}
									{selectedValues.some(selected => values.includes(selected)) && <div>{data}</div>}
								</div>
							);
						})}
					</div>
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
						<div className={classes.productpageheader}>
							<div>
								{filtercategories.map((categories, index) => {
									return (
										<>
											<div className={classes.selectedcat} key={categories.id}>
												{categories.id === categoryId ? categories.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase()) : ''}
											</div>
											{categories.child_cateegories.map((childcategories) => {
												return (
													<div className={classes.selectedcat} key={childcategories.id}>

														{childcategories.id === categoryId ? childcategories.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase()) : ''}
													</div>
												)
											})}
										</>

									)
								})}
							</div>
							{data.length > 1 ? <div className="desktop">
								<select value={sortOrder} onChange={handleSortChange} style={{ minHeight: '35px', minWidth: '200px', color: '#FF00AE', padding: '5px' }}>
									<option value="">Sort by</option>
									<option value="mintomax">Price : Low to High</option>
									<option value="maxtomin">Price : High to Low</option>
								</select>
							</div>
								: ''}
						</div>
						{data.length > 0 ?
							<div className={classes.productparent}>
								{data.map((ele, index) => {
									return (
										<div key={index} className={classes.spaceBox}>
											<Link href={{
												pathname: `/product`,
												search: `productId=${ele._id}`
											}}
											>
												<Paper sx={{ padding: { sm: '15px' } }}>
													<div className={classes.categoryList}>
														<img className={classes.categoryImage} src={ele.images && ele.images.length > 0 ? ele.images[0] : '/defaultimage.png'} alt={'product'} />
														<div className={classes.sliderspace}>
															<div className={classes.sliderflexBox}>
																<div className={classes.productTitle}>
																	{ele.name.replace(/(?:^|\s)\S/g, c => c.toUpperCase()).substring(0, 20)}{ele.name.length > 20 ? '...' : ''}
																</div>
																{/* <div className={classes.StarIconsdesktop}><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /></div> */}
															</div>
															{/* <div className={classes.StarIcons}>
                                                                <StarRatings
                                                                    rating={ele.avgRating || 0}
                                                                    starRatedColor="#ffc107"
                                                                    starEmptyColor="gray"
                                                                    starDimension="20px"
                                                                    starSpacing="1px"
                                                                    numberOfStars={5}
                                                                    name='rating'
                                                                />
                                                            </div> */}
															{/* <div className={classes.StarIcons}><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /><StarIcon sx={{ fontSize: '15px' }} /></div> */}
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
									Currently we dont have product for this category
								</div>
								<div>
									please check later.
								</div>
							</div>
						}
						<div className={classes.paginationposition}>
							{totalPages > 1 && showArrows && selectedPage > 1 &&
								<button className={classes.paginations} onClick={() => handlePageClick(selectedPage - 1)}>
									&lt;
								</button>
							}
							{totalPages > 2 &&
								pageNumbers.map((pageNum) => (
									<button key={pageNum} className={`${classes.paginations} ${selectedPage === pageNum ? classes.selectedPage : ""}`} onClick={() => handlePageClick(pageNum)}>
										{pageNum}
									</button>
								))
							}
							{totalPages > 1 && showArrows && selectedPage < totalPages &&
								<button className={classes.paginations} onClick={() => handlePageClick(selectedPage + 1)}>
									&gt;
								</button>
							}
						</div>

					</Box>
				</MyStyledGrid>

			</MyMain >

		</>
	);
}
export default Products;
