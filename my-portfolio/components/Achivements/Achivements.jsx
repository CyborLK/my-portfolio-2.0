import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { achivementsData } from './AchivementsData';

const Achivements = () => {
    const sliderRef = useRef();

    const [swiper, setSwiper] = React.useState();
    const prevRef = React.useRef();
    const nextRef = React.useRef();

    React.useEffect(() => {
        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <div className="section-box mt-4" id="achievement">
            <div className="row align-items-center">
                <div className="col-6">
                    <h6 className="title-heading mb-0" data-backdrop-text={achivementsData.mainData.title}>
                        {achivementsData.mainData.title2}
                    </h6>
                </div>
                <div className="col-6 text-end">
                    {/* Slider Navigation */}
                    <div 
                        className="button-circle button-circle-sm button-circle-outline-dark swiper-custom-prev" 
                        onClick={() => sliderRef.current?.slidePrev()}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div 
                        className="button-circle button-circle-sm button-circle-outline-dark swiper-custom-next" 
                        onClick={() => sliderRef.current?.slideNext()}
                    >
                        <i className="bi bi-arrow-right"></i>
                    </div>
                    {/* end Slider Navigation */}
                </div>
                
            </div>
            <Swiper
                onSwiper={it => (sliderRef.current = it)}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="achivements-swiper mt-4"
            >
                {achivementsData.achivements.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="certificate-box">
                            <div className="certificate-image-container">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    layout="responsive" 
                                    objectFit="contain" 
                                    placeholder="blur" 
                                    className="certificate-image"
                                />
                            </div>
                            <div className="certificate-details mt-3">
                                <h5 className="fw-medium m-0 line-height-140">{item.name}</h5>
                                <span className="font-small fw-normal">{item.issuer}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Achivements;