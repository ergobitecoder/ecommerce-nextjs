import React, { useContext, useRef, useState } from 'react';
import { HomeBanner, HomeBannerParent, SloganBanner, useStyles } from "../styles/main.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { Lazy, Pagination, Navigation, FreeMode, Thumbs, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from '@mui/material/styles';

const MainBanner = (props) => {
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
        setThumbIndex(e.activeIndex == 11 ? 0 : e.activeIndex - 1)
    }
    const swiperChangHandlefm = (e) => {
        setThumbIndexFm(e.activeIndex == 11 ? 0 : e.activeIndex - 1)
    }

    const styles = {

        bannerContainer: {

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
    };

    const handleLinkClick = (event, ele) => {
        // event.preventDefault();
        window.open(ele, '_blank');
    };
    return (
        <>

            <div className='desktop'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#f030a3",
                        "--swiper-pagination-bullet-inactive-color": "#000",
                        "--swiper-pagination-bullet-size": '10px',
                        "--swiper-pagination-bottom": "!-6px",
                        height: '560px'
                    }}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={(e) => swiperChangHandle(e)}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
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

                        props.Bannerdata.map((ele, index) => {

                            return (
                                <SwiperSlide key={index}>
                                    <div className={classes.sliderBackground} >
                                        <a href={ele.url} target="_blank" onClick={(event) => handleLinkClick(event, ele.url)}>
                                            <div className={classes.bannerContainer} style={{
                                                backgroundImage: `url(${ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'})`, backgroundSize: 'cover',
                                                height: '490px',
                                                width: '100%'
                                            }}>
                                                <div className={classes.slogan} >
                                                    <SloganBanner>
                                                        <div className={classes.slogantitle}>{ele.title}</div>
                                                        <div className={classes.slogandesc}>{ele.description}</div>
                                                    </SloganBanner>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className='mobile'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#f030a3",
                        "--swiper-pagination-bullet-inactive-color": "#000",
                        "--swiper-pagination-bullet-size": '10px',
                        "--swiper-pagination-bottom": "!-6px",
                        height: '220px'
                    }}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={(e) => swiperChangHandle(e)}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
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

                        props.Bannerdata.map((ele, index) => {

                            return (
                                <SwiperSlide key={index}>
                                    <div className={classes.sliderBackground} >
                                        <a href={ele.url} target="_blank" onClick={(event) => handleLinkClick(event, ele.url)}>
                                            <div className={classes.bannerContainer} style={{
                                                backgroundImage: `url(${ele.images && ele.images.length > 0 ? ele.images[0] : '/dben-sew210.jpg'})`, backgroundSize: 'cover',
                                                height: '175px',
                                                width: '100%'
                                            }}>
                                                <div className={classes.slogan} >
                                                    <SloganBanner>
                                                        <div className={classes.slogantitle}>{ele.title}</div>
                                                        <div className={classes.slogandesc}>{ele.description.slice(0,70)}</div>
                                                    </SloganBanner>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </>

    );
};


export default MainBanner
