import React from 'react'

const cryptos = () => {
  return (
    <>
      <div className="flex w-full bordr">
        <div className="flex-1/2 ml-15 bordr p-10 gap-3">
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-semibold'>All Cryptos, One Platform</h1>
            <p className='text-gray-400 text-lg'>Buy, sell, and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises.</p>
          </div>
          <div className='h-[30vh] '></div>
          <div className='flex gap-5 items-center py-5'>
            <div className='text-3xl font-semibold'>Buy crypto now </div>
            <i class="fi fi-br-arrow-up-right text-xl"></i>
          </div>
        </div>
        <div className="flex-1/2 mr-15 bordr"></div>
      </div>
    </>
  )
}

export default cryptos
