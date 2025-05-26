import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';
import Text from './animation/text.jsx'


const whycryptix = () => {
  return (
    <>
      <h1 className='centre text-4xl my-3'>Why Choose Cryptix?</h1>
      <p className='text-gray-400 text-2xl centre mb-10'>
        <Text text={`Benefits designed to provide a seamless, secure, and accessible experience for all users.`}/></p>
      <div className='w-full h-fit centre bordr p-0'>
        <div className="flex bordr mx-15">
          <div className="flex flex-col gap-3 bordr p-3">
            <div className='border centre'><i class="fi fi-rs-shield text-xl"></i></div>
            <h1 className='text-xl font-semibold'>Maximum Security</h1>
            <p className='text-gray-400'>Your assets are protected with cutting-edge security protocols.</p>
          </div>
          <div className="flex flex-col gap-3 bordr p-3">
            <div className='border centre'><i class="fi fi-br-bolt text-xl"></i></div>
            <h1 className='text-xl font-semibold'>Instant Tansactions</h1>
            <p className='text-gray-400'>Execute your transactions in real-time, without delays.</p>
          </div>
          <div className="flex flex-col gap-3 bordr p-3">
            <div className='border centre'><i class="fi fi-br-down-left-and-up-right-to-center text-xl"></i></div>
            <h1 className='text-xl font-semibold'>Optimized Fees</h1>
            <p className='text-gray-400'>Benefit from some of the lowest fees on the market.</p>
          </div>
          <div className="flex flex-col gap-3 bordr p-3">
            <div className='border centre'><i class="fi fi-ts-screen text-xl"></i></div>
            <h1 className='text-xl font-semibold'>Premium Interface</h1>
            <p className='text-gray-400'>An elegant, intuitive design that’s easy to use, even for beginners.</p>
          </div>
        </div>
      
      </div>
        <div className='bordr h-[30vh] mx-15 centre'></div>
    </>
  )
}

export default whycryptix
