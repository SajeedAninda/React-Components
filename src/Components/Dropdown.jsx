import React, { useRef, useState, useEffect } from 'react';
import avatar from "../assets/Image/avatar.jpg";

const Dropdown = () => {
    let menus = ["Home", "Profile", "Settings", "Accessibility", "Shop", "Fashion"];

    let [open, setOpen] = useState(false);

    let menuRef = useRef();
    let avatarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && avatarRef.current !== event.target) {
                setOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className='h-screen bg-gray-100 flex pt-14 flex-col items-center'>
            <img ref={avatarRef} onClick={() => { setOpen(!open) }} className='w-[100px] rounded-full h-[100px] cursor-pointer hover:shadow-2xl' src={avatar} alt="" />

            {
                open && <div>
                    <ul ref={menuRef} className='p-8 bg-white mt-2 rounded-xl shadow-xl transition-all duration-500'>
                        {menus.map(menu => (
                            <li key={menu} className='text-xl hover:bg-blue-300 py-2 px-4 rounded-xl cursor-pointer font-semibold text-center pt-2'>{menu}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Dropdown;
