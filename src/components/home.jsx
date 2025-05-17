import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';
import './home.css'

const Home = () => {
    return (
        <>
            <div className='w-full h-fit text-white flex flex-col items-center gap-20 mt-1/3'>
                <div className="centre w-1/2 h-1/2 mt-[25vh]">
                    <div className='centre flex-col gap-8'>
                        <div className="centre flex-col gap-3">
                            <div className='centre flex-col gap-10 text-center'>
                                <div className="text-7xl centre font-semibold">
                                    Take Control Of <br />Your Digital Assets
                                </div>
                                <div>
                                    Cryptix offers a seamless, secure experience for managing your digital assets. Instant <br/>transactions, optimized fees, and premium design.
                                </div>
                            </div>
                            <button className='bg-green-400 rounded-full px-5 py-2 text-black centre'>
                                <div className='font-semibold'>Get started now</div>
                                <i class="fi fi-rr-arrow-trend-up px-2 font-semibold tex-xl"></i>
                            </button>
                        </div>
                        <div className="centre flex-col gap-2">
                            <h1>They trust us!</h1>
                            <div className="centre gap-2">
                                <i class="fi fi-ss-star"></i>
                                <i class="fi fi-ss-star"></i>
                                <i class="fi fi-ss-star"></i>
                                <i class="fi fi-ss-star"></i>
                                <i class="fi fi-ss-star-sharp-half"></i>
                                <h1>4.8</h1>
                                <i class="fi fi-brands-google"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-1/2 centre flex-col'>
                    <img src="https://framerusercontent.com/images/6AfF1TCZ0fgDvIyRPSrmwJXP9Hc.png?scale-down-to=2048" alt="" className='w-[80%]' />
                    
                </div>
                <div className='w-full h-[60vh] centre text-center mb-10'>
                    <p className='text-5xl w-2/3 leading-tight'>Simplicity, performance, and security, empowering you to navigate the digital world with confidence and agility. </p>
                </div>
            </div>
        </>
    )
}

export default Home
