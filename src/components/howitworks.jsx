import AniY from './animation/aniY.jsx'
import Text from './animation/text.jsx'

const howitworks = () => {
  return (
    <>
      <div className=' bordr w-full px-15'>
        <div className="bl centre">
          <div className="flex-2/3 flex flex-col gap-4 p-5 min-h-full">
            <AniY><h1 className='text-5xl font-semibold'>How It Works?</h1></AniY>
            <h3 className='text-xl'>
              <Text text={` A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps`} /></h3>
          </div>
          <div className="flex-1/3 br bl flex flex-col h-35">
            <div className="flex-1/2"></div>
            <h2 className='flex-1/2 bt flex items-center justify-end p-5 text-xl'>Create account now
              <i class="fi fi-br-arrow-up-right text-lg px-3"></i>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap br bl mx-15 ">
        <div className="flex flex-col br bb p-15 gap-5 w-1/2">
          <div className="flex gap-10">
            <h1 className="p-5 bordr rounded-full h-17 w-17 centre text-3xl font-semibold capsule"> 1</h1>
            <img src="images\createacc.png" alt="" className='h-90' />
          </div>
          <h2 className='text-4xl'>Create your account</h2>
          <h3 className='text-2xl text-gray-400'>Sign up easily and secure your profile in just a few steps.</h3>
        </div>

        <div className="flex flex-col bb p-15 gap-5 w-1/2">
          <div className="flex gap-10">
            <h1 className="p-5 bordr rounded-full h-17 w-17 centre text-3xl font-semibold capsule"> 2</h1>
            <img src="images\fund.png" alt="" className='h-90' />
          </div>
          <h2 className='text-4xl'>Fund your wallet</h2>
          <h3 className='text-2xl text-gray-400'>Deposit your cryptos or make a transfer to start trading.</h3>
        </div>
        <div className="flex flex-col br p-15 gap-5 w-1/2">
          <div className="flex gap-10">
            <h1 className="p-5 bordr rounded-full h-17 w-17 centre text-3xl font-semibold capsule"> 3</h1>
            <img src="images\buysell.png" alt="" className='h-90' />
          </div>
          <h2 className='text-4xl'>Buy, sell, or convert</h2>
          <h3 className='text-2xl text-gray-400'>Enjoy the simplicity of a platform that makes every transaction seamless in real-time.</h3>
        </div>
      </div>
      <div className='bordr w-full'>
        <div className='br bl h-[30vh] mx-15 centre'></div></div>
    </>
  )
}

export default howitworks
