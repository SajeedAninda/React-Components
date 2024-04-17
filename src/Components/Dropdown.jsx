import React, { useState } from 'react';
import avatar from "../assets/Image/avatar.jpg";

const Dropdown = () => {
    let menus = ["Home", "Profile", "Settings", "Accessibility", "Shop", "Fashion"];

    

    return (
        <div className='h-screen bg-gray-100 flex pt-14 flex-col items-center'>
            <img className='w-[100px] rounded-full h-[100px] cursor-pointer hover:shadow-2xl' src={avatar} alt="" />

            <div>
                <ul className='p-8 bg-white mt-4 rounded-xl shadow-xl'>
                    {menus.map(menu => (
                        <li key={menu} className='text-xl hover:bg-blue-300 py-2 px-4 rounded-xl cursor-pointer font-semibold text-center pt-2'>{menu}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
