import AniY from './animation/aniY.jsx'
import '@flaticon/flaticon-uicons/css/all/all.css';
import Text from './animation/text.jsx'


const whycryptix = () => {
  return (
    <>
      <AniY><h1 className='centre text-5xl font-medium my-3'>Why Choose Cryptix?</h1></AniY>
      <p className='text-gray-400 text-2xl centre mb-10'>
        <Text text={`Benefits designed to provide a seamless, secure, and accessible experience for all users.`} /></p>
      <div className='w-full h-fit centre bordr p-0'>
        <div className="flex flex-col md:flex-row flex-wrap bordr mx-15">

          <div className="w-full md:w-1/2 flex flex-col gap-8 bordr p-5">
            <div className='border centre capsule'><i class="fi fi-rs-shield text-5xl"></i></div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-3xl font-semibold'>Maximum Security</h1>
              <p className='text-gray-400 text-2xl'>Your assets are protected with cutting-edge security protocols.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8 bordr p-5">
            <div className='border centre capsule'><i class="fi fi-br-bolt text-5xl"></i></div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-3xl font-semibold'>Instant Tansactions</h1>
              <p className='text-gray-400 text-2xl'>Execute your transactions in real-time, without delays.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8 bordr p-5">
            <div className='border centre capsule'><i class="fi fi-br-down-left-and-up-right-to-center text-5xl"></i></div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-3xl font-semibold'>Optimized Fees</h1>
              <p className='text-gray-400 text-2xl'>Benefit from some of the lowest fees on the market.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8 bordr p-5">
            <div className='border centre capsule'><i class="fi fi-ts-screen text-5xl"></i></div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-3xl font-semibold'>Premium Interface</h1>
              <p className='text-gray-400 text-2xl'>An elegant, intuitive design that’s easy to use, even for beginners.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bordr h-[30vh] mx-15 centre'></div>
    </>
  )
}

export default whycryptix
