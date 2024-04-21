import React from 'react';
import slider1 from "../assets/Image/slider1.jpg"
import slider2 from "../assets/Image/slider2.jpg"
import slider3 from "../assets/Image/slider3.jpg"
import slider4 from "../assets/Image/slider4.jpg"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";



const Slider = () => {
    let images = [slider1, slider2, slider3, slider4];

    return (
        <div className='h-screen flex justify-center items-center bg-blue-200 relative'>
            <div className='w-[40%] relative flex justify-center items-center'>
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded">
                    <MdKeyboardArrowLeft className='text-3xl' />
                </button>

                <img className='overflow-hidden rounded-xl shadow-lg' src={slider1} alt="" />

                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded">
                    <MdKeyboardArrowRight className='text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default Slider;