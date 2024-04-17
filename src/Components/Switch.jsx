import React, { useState } from 'react';

const Switch = () => {
    let [switchOn, setSwitchOn] = useState(false);

    return (
        <div className='bg-blue-300 h-screen flex justify-center items-center'>
            <div onClick={() => { setSwitchOn(!switchOn) }} className='bg-gray-600 h-32 w-[25%] rounded-full flex relative'>
                <span className={`h-32 w-32 rounded-full bg-white shadow-lg shadow-slate-500 cursor-pointer 
                ${switchOn? `bg-green-700 absolute right-0` : ``}
                `} />
            </div>
        </div>
    );
};

export default Switch;
