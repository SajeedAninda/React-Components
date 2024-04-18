import React, { useRef, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";



const AnimatedButton = () => {
    let [gitHover, setGitHover] = useState(false);
    let [fbHover, setFbHover] = useState(false);
    let gitRef = useRef(null);
    let fbRef = useRef(null);

    return (
        <div className='h-screen bg-red-200 flex gap-6 justify-center items-center'>
            {/* GITHUB  */}
            <button
                onMouseEnter={() => setGitHover(true)}
                onMouseLeave={() => setGitHover(false)}
                className='p-4 rounded-xl text-white flex items-center bg-gray-700'>
                <FaGithub className='text-4xl' />
                <div
                    style={{ width: gitHover ? gitRef.current?.offsetWidth || 0 : 0 }}
                    className="overflow-x-hidden transition-all duration-300 ease-out"
                >
                    <span ref={gitRef} className='text-2xl font-bold px-2'>Github</span>
                </div>
            </button>

            <button
                onMouseEnter={() => setFbHover(true)}
                onMouseLeave={() => setFbHover(false)}
                className='p-4 rounded-xl text-white flex items-center bg-blue-600'>
                <FaFacebook className='text-4xl' />
                <div
                    style={{ width: fbHover ? fbRef.current?.offsetWidth || 0 : 0 }}
                    className="overflow-x-hidden transition-all duration-300 ease-out"
                >
                    <span ref={fbRef} className='text-2xl font-bold px-2'>Facebook</span>
                </div>
            </button>
        </div>
    );
};

export default AnimatedButton;