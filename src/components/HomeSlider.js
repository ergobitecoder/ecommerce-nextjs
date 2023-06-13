import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Pagination, FreeMode, Thumbs, Autoplay } from "swiper";
import { HomeTitle, SliderBreak, useStyles } from "../styles/homeslider.styles";
import { Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
const HomeSlider = (props) => {
	const classes = useStyles(props);

	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
	const [thumbIndex, setThumbIndex] = useState(0);
	const [thumbIndexFm, setThumbIndexFm] = useState(0);
	const theme = useTheme();

	const thumbHandle = (e) => {
		setThumbIndex(e)
	}

	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

	const swiperChangHandle = (e) => {
		setThumbIndex(e.activeIndex === 11 ? 0 : e.activeIndex - 1)
	}
	const swiperChangHandlefm = (e) => {
		setThumbIndexFm(e.activeIndex === 11 ? 0 : e.activeIndex - 1)
	}

	return (
		<>
			<div className={classes.maxWidth} id="homeSlider">
				<SliderBreak
					sx={{
						display: 'none',
						[theme.breakpoints.up('lg')]: {
							display: 'block',
						},
					}} >
					<HomeTitle
						sx={{
							display: 'none',
							[theme.breakpoints.up('lg')]: {
								display: 'block',
							},
						}}>Popular Category List</HomeTitle>
					<Swiper
						style={{
							"--swiper-pagination-color": "#f030a3",
							"--swiper-pagination-bullet-inactive-color": "#000",
							"--swiper-pagination-bullet-size": '10px',
							"--swiper-pagination-bottom": "!-6px",
							height: '435px'
						}}
						slidesPerView={4}
						loop={true}
						onSlideChange={(e) => swiperChangHandle(e)}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false,
						}}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Pagination, Thumbs, Autoplay]}
					>
						{

							props.Categorydata.map((ele, index) => {
								return (
									<SwiperSlide key={'m_' + index} sx={{ mx: "auto" }}>
										<Link href={`/products?categoryId=${ele._id}`}>
											<div className={classes.sliderBackground}>

												<img
													src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
													alt={ele.name}
													className='w-[100%] h-[205px]'
												/>
												<div className={classes.sliderspace}>
													<div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
													<div className={classes.priceTitle}>Rs {ele.price}</div>
													<div className={classes.productDescription}>{ele.description.substring(0, 20)}{ele.description.length > 20 ? '...' : ''}</div>
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

			<HomeTitle sx={{
				display: 'none',
				[theme.breakpoints.up('sm')]: {
					display: 'block',
				},
				[theme.breakpoints.up('lg')]: {
					display: 'none',
				},
			}}>Popular Category List</HomeTitle>
			<SliderBreak sx={{
				display: 'none',
				[theme.breakpoints.up('sm')]: {
					display: 'block',
				},
				[theme.breakpoints.up('lg')]: {
					display: 'none',
				},
			}} id="homeSlider">
				<Swiper
					style={{
						// @ts-ignore
						"--swiper-pagination-color": "#f030a3",
						"--swiper-pagination-bullet-inactive-color": "#000",
						"--swiper-pagination-bullet-size": '10px',
						"--swiper-pagination-bottom": "!-6px",
						height: '440px'
					}}
					slidesPerView={2}
					loop={true}
					onSlideChange={(e) => swiperChangHandle(e)}
					spaceBetween={112}
					// navigation={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 6000,
						disableOnInteraction: false,
					}}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Pagination, Thumbs, Autoplay]}
				>
					{
						props.Categorydata.map((ele, index) => {
							return (
								<SwiperSlide key={'m_' + index} sx={{ mx: "auto" }}>
									<Link href={`/products?categoryId=${ele._id}`}>
										<div className={classes.sliderBackground}>

											<img
												src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
												alt={ele.name}
												className='w-[262px] h-[205px]'
											/>
											<div className={classes.sliderspace}>
												<div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
												<div className={classes.priceTitle}>Rs {ele.price}</div>
												<div className={classes.productDescription}>{ele.description.substring(0, 20)}{ele.description.length > 20 ? '...' : ''}</div>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			</SliderBreak>

			<HomeTitle className='mobile'>Popular Category List</HomeTitle>
			<SliderBreak className='mobile' style={{ marginLeft: 'auto', marginRight: 'auto' }} id="homeSlider">
				<Swiper
					style={{
						// @ts-ignore
						"--swiper-pagination-color": "#f030a3",
						"--swiper-pagination-bullet-inactive-color": "#000",
						"--swiper-pagination-bullet-size": '10px',
						height: 295

					}}
					loop={true}
					onSlideChange={(e) => swiperChangHandlefm(e)}
					slidesPerView={1}
					centeredSlides={true}
					slidesPerGroup={1}
					navigation={false}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 6000,
						disableOnInteraction: false,
					}}
					thumbs={{ swiper: thumbsSwiperMobile }}
					modules={[FreeMode, Pagination, Thumbs, Autoplay]}
				>
					{
						props.Categorydata.map((ele, index) => {
							return (
								<SwiperSlide key={'m_' + index} sx={{ mx: 'auto', }}>
									<Link href={`/products?categoryId=${ele._id}`}>

										<Paper sx={{ background: '#FEF0FA' }}>
											<img
												src={ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'}
												alt={ele.name}
												className='w-[213px] h-[148px]'
											/>
											<div className={classes.sliderspace}>
												<div className={classes.productTitle}>{ele.name.substring(0, 20)}{ele.name.length > 20 ? '...' : ''}</div>
												<div className={classes.priceTitle}>Rs {ele.price}</div>
												<div className={classes.productDescription}>{ele.description.substring(0, 20)}{ele.description.length > 20 ? '...' : ''}</div>
											</div>

										</Paper>
									</Link>
								</SwiperSlide>
							)
						})
					}
				</Swiper>

			</SliderBreak>
		</>
	)
}

export default HomeSlider