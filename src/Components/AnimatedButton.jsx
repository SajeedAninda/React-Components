import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";


const AnimatedButton = () => {
    let [hovered, setHovered] = useState(false);

    return (
        <div className='h-screen bg-red-200 flex justify-center items-center'>
            <button className='p-4 rounded-xl text-white flex items-center bg-gray-700 gap-2'>
                <FaGithub className='text-4xl' />
                <div className='overflow-x-hidden transition-all duration-300 ease-out'>
                    <span className='text-2xl font-bold'>Github</span>
                </div>
            </button>
        </div>
    );
};

export default AnimatedButton;