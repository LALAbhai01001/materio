import React, { Component } from "react";
import { IoLogoFirebase } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide_data } from "../data/Slide_data";

const Sliders = () => {
    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    };
    
    
return (
    <>
    <div className="container text-center py-4">
        <div className="d-flex gap-2 my-3 justify-content-center align-items-center">
        <IoLogoFirebase />
        <h6 className="m-0 text-secondary text-uppercase">
            Real Customers Reviews
        </h6>
        </div>
        <h3 className="my-2">
        <span className="fw-bold">Success stories </span>
        from clients
        </h3>
        <p className="text-secondary my-4">
        See what our customers have to say about their experience.
        </p>
        </div>

        <div className="slider-container">
        <Slider {...settings}>
            
            {
                Slide_data?.map((item,index)=>{
                    return (
                        <>
                        <div className="text-center card d-flex p-2 border-0 flex-column justify-content-center align-items-center" key={index} 
                        style={{height: '300px', width: '300px'}}
                        >
                            
                            <img src={item.img} alt="" width={80}/>
                            <p>
                                {item.desc}
                            </p>

                            {Array.from({length:item?.rating}).map((_,index2)=>{
                                return '⭐'
                            })}

                            <p className="m-0 fw-semibold">
                                {item.user}
                            </p>


                            <p className="m-0">
                                {item.designation}
                            </p>
                            
                        </div>
                        </>
                    )
                })
            }
            
        </Slider>
    </div>
    </>
);
};

export default Sliders;
