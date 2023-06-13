import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { MyStyledGrid, StyledTitle } from "../styles/newarrivals.styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, MenuItem, Paper, Select, Typography } from "@mui/material";
import { useStyles, HomeTitle, SliderBreak } from "../styles/newarrivals.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from '@mui/icons-material/Star';
import "swiper/css";
// import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Lazy, Pagination, Navigation, FreeMode, Thumbs, Autoplay } from "swiper";
import { useTheme } from '@mui/material/styles';
import Link from "next/link";

function Grid1(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
	const [thumbIndex, setThumbIndex] = useState(0);
	const [thumbIndexFm, setThumbIndexFm] = useState(0);
	const [loaderOpen, setLoaderOpen] = useState(true);

	const thumbHandle = (e) => {
		setThumbIndex(e)
	}

	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

	const swiperChangHandle = (e) => {
		setThumbIndex(e.activeIndex == 11 ? 0 : e.activeIndex - 1)
	}
	const swiperChangHandlefm = (e) => {
		setThumbIndexFm(e.activeIndex == 11 ? 0 : e.activeIndex - 1)
	}

	return (
		<>
			<div className="mx-auto xl:w-[1140px] 2xl:w-[1420px]">
				<MyStyledGrid {...props}>
					<Box sx={{ flexGrow: 1, }}  >
						<StyledTitle className="sm:ml-[20px] lg:ml-0">Popular Category List</StyledTitle>

						<Grid
							container={true}
							columnSpacing={'75px'}
							rowSpacing={'30px'}
							columns={{ xs: 6, sm: 12, md: 12, lg: 3 }}
						>
							{props.productdata.PopularCategoryData.map((ele, index) => (
								<Grid item sx={{ mx: { sm: 'auto', lg: '0px' }, }} key={index} >
									<Link href={`/products?categoryId=${ele._id}`} >
										<div className={classes.sliderspace}>
											<img
												style={{ border: '7px solid #D9D9D9' }}
												src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
												className='w-[100%] h-[191px]'

											/>

											<div className={classes.sliderBackground}>
												<div className="p-3 pb-4">
													<div className={classes.sliderspace} >
														<div className='text-xl text-left font-semibold'>{ele.name.substring(0, 15)}{ele.name.length > 15 ? '...' : ''}</div>
														<div className='text-xl text-left font-semibold mt-2'>Rs {ele.price}</div>
														<div className='text-base text-left font-normal mt-2'>{ele.description.substring(0, 15)}{ele.description.length > 15 ? '...' : ''}</div>

													</div>
												</div>
											</div>
										</div>
									</Link>
								</Grid>
							))}
						</Grid>

					</Box>
				</MyStyledGrid>
				<SliderBreak className='mobile'>
					<HomeTitle>Popular Category List</HomeTitle>

					<Swiper
						style={{
							// @ts-ignore
							"--swiper-pagination-color": "#f030a3",
							"--swiper-pagination-bullet-inactive-color": "#000",
							"--swiper-pagination-bullet-size": '10px',
							"--swiper-pagination-bottom": "!-6px",
							// height: 280

						}}
						loop={true}
						onSlideChange={(e) => swiperChangHandlefm(e)}
						slidesPerView={1.5}
						centeredSlides={false}
						spaceBetween={1}
						navigation={false}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false,
						}}
						thumbs={{ swiper: thumbsSwiperMobile }}
						modules={[FreeMode, Thumbs, Autoplay]}
					>
						{
							props.productdata.PopularCategoryData.map((ele, index) => {
								return (
									<SwiperSlide key={'m_' + index} >
										<Link href={`/products?categoryId=${ele._id}`}>
											<img
												style={{ border: '6px solid #D9D9D9' }}
												width={"200px"}
												height={"155px"}
												src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
												className='w-[200px] h-[155px]'

											/>
												<div >
											<div className='w-[200px] h-[130px] bg-[#FEF0FA] p-4'>
													<div className={classes.sliderspace} >
														<div className='text-xl text-left font-semibold'>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
														<div className='text-xl text-left font-semibold mt-2'>Rs {ele.price}</div>
														<div className='text-base text-left font-normal mt-2'>{ele.description.substring(0, 20)}{ele.description.length > 20 ? '...' : ''}</div>

													</div>
												</div>
											</div>

										</Link>
									</SwiperSlide>
								)
							})
						}
					</Swiper>

				</SliderBreak>
			</div>
			<div className="mx-auto xl:w-[1140px] 2xl:w-[1420px]">
				<MyStyledGrid {...props}>
					<Box sx={{ flexGrow: 1, }}  >
						<StyledTitle className="sm:ml-[20px] lg:ml-0">New Arrivals</StyledTitle>

						<Grid
							container={true}
							columnSpacing={'75px'}
							rowSpacing={'30px'}
							columns={{ xs: 6, sm: 12, md: 12, lg: 3 }}
						>
							{props.productdata.initialProductData.map((ele, index) => (
								<Grid item sx={{ mx: { sm: 'auto', lg: '0px' }, }} key={index} >
									<Link href={`/products?categoryId=${ele._id}`} >
										<div className={classes.sliderspace}>
											<img
												style={{ border: '7px solid #D9D9D9' }}
												src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
												className='w-[100%] h-[191px]'

											/>

											<div >
												<div className={classes.sliderflexBox} >
													<div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
													<div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {ele.price}</div>
												</div>
												{/* <div className={classes.productDescription}>{ele.description}</div> */}
												<div className={classes.StarIcons}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
											</div>
										</div>
									</Link>
								</Grid>
							))}
						</Grid>

					</Box>
				</MyStyledGrid>
				<SliderBreak className='mobile'>
					<HomeTitle>New Arrivals</HomeTitle>

					<Swiper
						style={{
							// @ts-ignore
							"--swiper-pagination-color": "#f030a3",
							"--swiper-pagination-bullet-inactive-color": "#000",
							"--swiper-pagination-bullet-size": '10px',
							"--swiper-pagination-bottom": "!-6px",
							// height: 280

						}}
						loop={true}
						onSlideChange={(e) => swiperChangHandlefm(e)}
						slidesPerView={1.5}
						centeredSlides={false}
						spaceBetween={1}
						navigation={false}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false,
						}}
						thumbs={{ swiper: thumbsSwiperMobile }}
						modules={[FreeMode, Thumbs, Autoplay]}
					>
						{
							props.productdata.initialProductData.map((ele, index) => {
								return (
									<SwiperSlide key={'m_' + index} >
										<Link href={`/products?categoryId=${ele._id}`}>
											<img
												style={{ border: '6px solid #D9D9D9' }}
												width={"200px"}
												height={"155px"}
												src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
												className='w-[200px] h-[155px]'

											/>
											<div className={classes.sliderspace}>
												<div className={classes.sliderflexBox} >
													<div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
													<div className={classes.priceTitle}><CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {ele.price}</div>
												</div>
												{/* <div className={classes.productDescription}>{ele.description}</div> */}
												<div className={classes.StarIcons}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
											</div>

										</Link>
									</SwiperSlide>
								)
							})
						}
					</Swiper>

				</SliderBreak>
			</div>
		</>

	);
}

Grid1.propTypes = {
	bgcolor: PropTypes.string,
	label: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Grid1;
