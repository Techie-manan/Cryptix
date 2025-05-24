import React from 'react'

const howitworks = () => {
  return (
    <>
      <div className='centre bordr w-full px-15'>
        <div className="flex-2/3 bordr h-35 flex flex-col gap-4 p-5">
          <h1 className='text-5xl'>How It Works</h1>
          <h3 className='text-xl'>A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps</h3>
        </div>
        <div className="flex-1/3 bordr flex flex-col h-35">
          <div className="flex-1/2 bordr"></div>
          <h2 className='flex-1/2 bordr flex items-center justify-end p-5 text-xl'>Create account now
            <i class="fi fi-br-arrow-up-right text-lg px-3"></i>
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap bordr mx-15 ">
        <div className="flex flex-col bordr p-15 gap-5 w-1/2">
          <div className="flex gap-5">
            <h1 className="p-5 bordr rounded-full h-14 centre text-xl font-semibold"> 1</h1>
            <img src="images\createacc.png" alt="" className='h-90' />
          </div>
          <h2 className='text-3xl'>Create your account</h2>
          <h3>Sign up easily and secure your profile in just a few steps.</h3>
        </div>

        <div className="flex flex-col bordr p-15 gap-5 w-1/2">
          <div className="flex">
            <h1 className="p-5 bordr rounded-full h-14 centre text-xl font-semibold"> 2</h1>
            <img src="images\fund.png" alt="" className='h-90' />
          </div>
          <h2 className='text-3xl'>Fund your wallet</h2>
          <h3>Deposit your cryptos or make a transfer to start trading.</h3>
        </div>
        <div className="flex flex-col bordr p-15 gap-5 w-1/2">
          <div className="flex">
            <h1 className="p-5 bordr rounded-full h-14 centre text-xl font-semibold"> 3</h1>
            <img src="images\buysell.png" alt="" className='h-90' />
          </div>
          <h2 className='text-3xl'>Buy, sell, or convert</h2>
          <h3>Enjoy the simplicity of a platform that makes every transaction seamless in real-time.</h3>
        </div>
      </div>
      <div className='bordr w-full'>
        <div className='bordr h-[30vh] mx-15 centre'></div></div>
    </>
  )
}

export default howitworks
