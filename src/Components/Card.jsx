import React from 'react';

const Card = () => {
    return (
        <div className='bg-green-200 h-screen flex justify-center items-center'>
            <div className='relative w-[400px] rounded-xl shadow-lg overflow-hidden group'>
                <img className='group-hover:scale-110 transition-transform duration-300' src="https://images.unsplash.com/photo-1606318621597-c057f7d4926e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D" alt="" />
                <div className='absolute z-10 bottom-0 flex flex-col gap-2 text-white font-semibold text-md p-4 bg-gradient-to-t from-black/60 to-transparent'>
                    <h3 className='text-2xl font-bold '>Lorem, ipsum dolor.</h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut beatae incidunt adipisci suscipit, reiciendis quis m Lorem ipsum dolor sit amet. is sunt fugit.
                </div>
            </div>
        </div>
    );
};

export default Card;