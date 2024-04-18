import React, { useRef, useState } from 'react';
import { FaGithub } from "react-icons/fa";


const AnimatedButton = () => {
    let [hovered, setHovered] = useState(false);
    let buttonRef = useRef(null);

    return (
        <div className='h-screen bg-red-200 flex justify-center items-center'>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className='p-4 rounded-xl text-white flex items-center bg-gray-700'>
                <FaGithub className='text-4xl' />
                <div
                    style={{ width: hovered ? buttonRef.current?.offsetWidth || 0 : 0 }}
                    className="overflow-x-hidden transition-all duration-300 ease-out"
                >
                    <span ref={buttonRef} className='text-2xl font-bold px-2'>Github</span>
                </div>
            </button>
        </div>
    );
};

export default AnimatedButton;