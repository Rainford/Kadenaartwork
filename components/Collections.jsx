import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Pagination } from "swiper";

import img1 from '../assets/img/collection/1024.gif'
import img2 from '../assets/img/collection/1877.gif'
import img3 from '../assets/img/collection/2900.gif'
import img4 from '../assets/img/collection/3890.gif'
import img5 from '../assets/img/collection/4589.gif'
import img6 from '../assets/img/collection/123.gif'
import img7 from '../assets/img/collection/2348.gif'
import img8 from '../assets/img/collection/3265.gif'
import img9 from '../assets/img/collection/4354.gif'
import img10 from '../assets/img/collection/768.gif'

import arrowLeft from '../assets/img/svg/arrow-left.svg'
import arrowRight from '../assets/img/svg/arrow-right.svg'

function Collections() {
    return (
        <section className="collections" id="collections">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="section-title text-center">
                            <h2>Our collection</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Swiper pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }} slidesPerView={4} spaceBetween={24} navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next'
                        }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                480: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 3
                                },
                                1200: {
                                    slidesPerView: 4
                                },
                            }}
                            modules={[Pagination, Navigation]} loop={true} className="overflow-visible">
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img1} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img2} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img3} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img4} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img5} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img6} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img7} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img8} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img9} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/#" className="collections-item d-block">
                                    <div className="collections-item-img"><img src={img10} alt="" /></div>
                                </a>
                            </SwiperSlide>
                            <div className="collections-slider-info d-flex align-items-center justify-content-center">
                                <div className="swiper-button-prev">
                                    <img src={arrowLeft} alt="" />
                                </div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-next">
                                    <img src={arrowRight} alt="" />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collections