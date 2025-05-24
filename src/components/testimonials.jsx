import React from 'react'

const testimonials = () => {
  return (
    <>
      <div className='w-full bordr'>
        <div className="centre flex-col mx-15 bordr p-10 gap-5">
          <h1 className='text-5xl'>Trusted by Crypto Enthusiasts Worldwide</h1>
          <h2 className='text-xl'>Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design.</h2>
        </div>
      </div>
      <div className="bordr mx-15 flex">
        <div className="flex-2/3 flex flex-col gap-25 p-15 bordr">
          <div className="flex">
            <img src="" alt="" className='h-5 bg-amber-500' />
            <img src="" alt="" />
          </div>
          <h1 className='text-3xl font-bold'>“Security and ease of use are my top priorities. Cryptix <br />delivers on both with style.”</h1>
          <h2 className='text-xl font-semibold'>Sophie L.
            <h2 className='font-medium text-lg text-gray-400'>Lead Developer at Quantum Ledger</h2>
          </h2>

        </div>
        <div className="flex-1/4 flex flex-col bordr">
          <div className="flex-2/3 bordr"></div>
          <div className="flex-1/3 flex flex-col bordr">
            <button className='text-2xl bordr flex-1/2 flex items-center p-5 justify-self-start'>Previous</button>
            <button className='text-2xl bordr flex-1/2 flex items-center p-5 justify-end'>Next</button>
          </div>
        </div>
      </div>
      <div className='bordr w-full'>
        <div className='bordr h-[30vh] mx-15 centre'></div></div>
    </>
  )
}

export default testimonials
