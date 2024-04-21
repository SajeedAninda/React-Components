import React, { useState } from 'react';
import slider1 from "../assets/Image/slider1.jpg";
import slider2 from "../assets/Image/slider2.jpg";
import slider3 from "../assets/Image/slider3.jpg";
import slider4 from "../assets/Image/slider4.jpg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Slider = () => {
    let images = [slider1, slider2, slider3, slider4];
    let [currentSlider, setCurrentSlider] = useState(0);

    const nextSlide = () => {
        setCurrentSlider((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlider((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className='h-screen flex justify-center items-center bg-blue-200 relative'>
            <div className='w-[40%] relative'>
                <button 
                    onClick={(e) => { e.preventDefault(); prevSlide(); }} 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded z-10">
                    <MdKeyboardArrowLeft className='text-3xl' />
                </button>

                <div className="flex overflow-hidden relative rounded-xl shadow-lg">
                    <div className="w-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} className="w-full" />
                        ))}
                    </div>
                </div>

                <button 
                    onClick={(e) => { e.preventDefault(); nextSlide(); }} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded z-10">
                    <MdKeyboardArrowRight className='text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default Slider;
