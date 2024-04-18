import React, { useRef, useState } from 'react';
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const SocialButton = ({ icon: Icon, label, color }) => {
    const [isHover, setIsHover] = useState(false);
    const labelRef = useRef(null);

    return (
        <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`p-4 rounded-xl text-white flex items-center bg-${color}`}
        >
            <Icon className='text-4xl' />
            <div
                style={{ width: isHover ? labelRef.current?.offsetWidth || 0 : 0 }}
                className="overflow-x-hidden transition-all duration-300 ease-out"
            >
                <span ref={labelRef} className='text-2xl font-bold px-2'>{label}</span>
            </div>
        </button>
    );
};

const AnimatedButton = () => {
    return (
        <div className='h-screen bg-red-200 flex gap-6 justify-center items-center'>
            <SocialButton icon={FaGithub} label="Github" color="gray-700" />
            <SocialButton icon={FaFacebook} label="Facebook" color="blue-600" />
            <SocialButton icon={RiTwitterXFill} label="Twitter" color="gray-900" />
        </div>
    );
};

export default AnimatedButton;
