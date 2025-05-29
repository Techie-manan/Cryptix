import AniY from './animation/aniY.jsx'
import Text from './animation/text.jsx'

const faq = () => {
  
  
  return (
    <>
      <div className='centre bb w-full px-15'>
        <div className="flex-2/3 br bl flex flex-col gap-7 p-5">
         <AniY><h1 className='text-6xl'>Your Questions, Answered</h1></AniY> 
          <h3 className='text-2xl'>
            <Text text={`Find everything you need to know about Cryptix, from security to supported assets`}/></h3>
        </div>
        <div className="flex-1/3 br flex flex-col h-41">
          <div className="flex-1/2"></div>
          <h2 className='flex-1/2 bt flex items-center justify-end p-5 text-2xl'>Create account now
            <i class="fi fi-br-arrow-up-right text-lg px-3"></i>
          </h2>
        </div>
      </div>
      <div className="br bl mx-15 flex flex-col">
        <div>
          <div className="bb flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>What is Cryptix?</h1>
              <div className="view"></div>
            </div>
           <AniY initial={{opacity:0, y: -40}}>
            <h3 className='font-medium text-gray-500 text-xl '>Cryptix is a next-generation platform for buying, selling, and converting cryptocurrencies with real-time market insights.</h3></AniY>
          </div>
          <div className="bb flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>Is Cryptix secure?</h1>
              <div className="view"></div>
            </div>
            <h3 className='font-medium text-gray-500 text-xl '>Yes, Cryptix uses top-tier encryption, multi-layer security, and cold storage solutions to keep your assets safe.</h3>
          </div>
          <div className="bb flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>Which cryptocurrencies are supported?</h1>
              <div className="view"></div>
            </div>
            <h3 className='font-medium text-gray-500 text-xl '>Cryptix supports a vast range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and many others.</h3>
          </div>
          <div className="bb flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>What are the fees for transactions?</h1>
              <div className="view"></div>
            </div>
            <h3 className='font-medium text-gray-500 text-xl '>We optimize transaction fees to offer the best rates. You’ll always see the fee before confirming a transaction.</h3>
          </div>
        </div>

        <div>
          <div className="bb flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>How fast are transactions?</h1>
              <div className="view"></div>
            </div>
            <h3 className='font-medium text-gray-500 text-xl '>Most transactions are processed instantly, but network congestion may cause slight delays.</h3>
          </div>
          <div className="bb flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>Do I need to verify my identity?</h1>
              <div className="view"></div>
            </div>
            <h3 className='font-medium text-gray-500 text-xl '>Yes, for security and compliance, identity verification is required for certain transactions.</h3>
          </div>
          <div className="bb flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>Can I access Cryptix on mobile?</h1>
              <div className="view"></div>
            </div>
            <h3 className='font-medium text-gray-500 text-xl '>Yes, Cryptix is fully optimized for both desktop and mobile, ensuring a seamless experience everywhere.</h3>
          </div>
          <div className=" flex flex-col p-5 gap-3">
            <div className="flex">
              <h1 className='text-2xl font-semibold'>How can I contact support?</h1>
              <div className="view"></div>
            </div>
            <h3 className='font-medium text-gray-500 text-xl '>Our support team is available 24/7. Reach out via chat or email for any assistance.</h3>
          </div>
        </div>
      </div>
      <div className='bordr w-full'>
        <div className='br bl h-[30vh] mx-15 centre'></div></div>
    </>
  )
}

export default faq
