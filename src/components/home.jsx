import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';
import './home.css'
import Text from './animation/text.jsx'
import AniY from './animation/aniY.jsx';

const Home = () => {
    return (
        <>
            <div className='w-full h-fit text-white flex flex-col items-center gap-20 mt-1/3'>
                <div className="centre  h-1/2 mt-[30vh] mb-[10vh]">
                    <div className='centre flex-col gap-15'>
                        <div className="centre flex-col gap-23">
                            <div className='centre flex-col gap-10 text-center'>
                               <AniY> <div className="text-8xl centre">
                                    Take Control Of Your <br /> Digital Assets
                                </div></AniY>
                                <div>
                                   <Text text={` Cryptix offers a seamless, secure experience for managing your digital assets.\n Instant  transactions, optimized fees, and premium design.`}/>
                                </div>
                            </div>
                           <AniY> <button className='bg-green-400 rounded-full px-7 py-3 text-black centre'>
                                <div className='font-semibold text-2xl'>Get started now</div>
                                <i class="fi fi-rr-arrow-trend-up px-2 font-semibold tex-xl"></i>
                            </button></AniY>
                        </div>
                       <AniY> <div className="centre flex-col gap-2 text-2xl">
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
                        </div></AniY>
                    </div>
                </div>
              
                <div className='relative w-full h-1/2 centre flex-col'>
                    <img src="https://framerusercontent.com/images/6AfF1TCZ0fgDvIyRPSrmwJXP9Hc.png?scale-down-to=2048" alt="" className='w-[80%] z-0' />
                      <div className="boxx -top-1/4"></div>
                      <div className="line"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                      <div className="line4"></div>
                </div>
                <div className='w-full h-[60vh] centre text-center mb-10'>
                    <p className='text-5xl w-2/3 leading-tight'>
                   <Text text={` Simplicity, performance, and security, empowering you to navigate the digital world with confidence and agility.`}/> </p>
                </div>
            </div>
        </>
    )
}

export default Home
