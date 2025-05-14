import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';


const navbar = () => {
    return (
        <div className=' fixed w-full h-17 px-10 py-5 overflow-hidden bg-black/50 flex-col gap-5 backdrop-blur-sm'>
            <div className='flex justify-between items-center text-white pb-2'>
                <div className='centre font-bold gap-3 text-2xl'>
                    <img src="src\assets\logo1.png" alt="" className='h-9'/>
                    <h1 >Cryptix</h1>
                </div>
                <i class="fi fi-sr-bars-staggered text-3xl font-semibold"></i>
            </div>
            <div className="centre flex-col gap-5 text-xl font-semibold list-none text-gray-200">
                    <li>Why Cryptix?</li>
                    <li>Cryptos</li>
                    <li>How it Works?</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
            </div>
        </div>
    )
}

export default navbar
