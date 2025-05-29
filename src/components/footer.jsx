import AniY from './animation/aniY.jsx'
import Text from './animation/text.jsx'

const footer = () => {
  return (
    <>
      <div className='bb w-full relative overflow-hidden'>
        <div className='br bl h-[60vh] mx-15 centre flex-col gap-15 p-10'>
         <AniY> <h1 className='text-5xl font-semibold'>Ready to take control of your crypto?</h1></AniY>
          <h3 className='text-2xl text-center p-3 font-semibold text-gray-400'>
            <Text text={`Join thousands of users who trust Cryptix for secure, seamless, and efficient cryptocurrency\n transactions. Start now and unlock the full potential of digital assets.`}/></h3>
          <button className='bg-green-400 rounded-full p-5 px-8 text-black centre'>
            <div className='font-semibold text-2xl'>Get started now</div>
            <i class="fi fi-rr-arrow-trend-up px-2 font-semibold tex-3xl"></i>
          </button>
        </div>
        <div className="bwrad left-1/3 -top-1/2"></div>
        <div className="boxx left-1/3 -bottom-1/4"></div>
      </div>
      <div className='br bl mx-15 flex flex-col md:flex-row justify-between p-10'>
        <div>
          <div className="flex text-3xl gap-3 items-center py-5 ">
            <img src="images\logo1.png" alt="" className='h-10'/>
            <h1>Cryptix</h1>
          </div>
          <h2 className='text-xl text-gray-400'>Secure, fast, and seamless crypto trading.<br/> Cryptix makes digital assets effortless.</h2>
          <div className='h-25'></div>
          <a href="" className='text-xl font-semibold mb-15'> Created by Manan</a>
        </div>

        <div className='flex gap-20 text-xl px-30'>
          <div className='flex flex-col gap-3 list-none'>
            <h1 className='py-2 font-semibold '>Navigation </h1>
            <li>Why Cryptix?</li>
            <li>Cryptos</li>
            <li>How it works</li>
            <li>FAQ</li>
            <li>404</li>
          </div>

         <div className="flex flex-col gap-3">
          <h1 className='py-2 font-semibold '>Socials</h1>
            <a href="">Twitter</a>
           <a href="">Linkedin</a>
             <a href="">Instagram</a>
            <a href="">GitHub</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default footer
