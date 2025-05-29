import AniY from './animation/aniY.jsx'
import Text from './animation/text.jsx'

const testimonials = () => {
  return (
    <>
      <div className='w-full bordr'>
        <div className="centre flex-col mx-15 br bl p-10 gap-5">
         <AniY><h1 className='text-5xl'>Trusted by Crypto Enthusiasts Worldwide</h1></AniY> 
          <h2 className='text-2xl'>
           <Text text={` Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design. `}/></h2>
        </div>
      </div>
      <div className="br bl mx-15 flex relative overflow-hidden">
        <div className="flex-2/3 flex flex-col gap-25 p-15 br">
          <div className="flex">
            <img src="" alt="" className='h-5 bg-amber-500' />
            <img src="" alt="" />
          </div>
          <h1 className='text-3xl font-bold'>
           <Text text={` “Security and ease of use are my top priorities. Cryptix \n delivers on both with style.”`}/>
           </h1>
           <AniY>
          <h2 className='text-2xl font-semibold'>Sophie L.
            <h2 className='font-medium text-xl text-gray-400'>Lead Developer at Quantum Ledger</h2>
          </h2> </AniY>
        </div>
<div className="bwrad -left-1/4 -top-1/3"></div>
        <div className="flex-1/4 flex flex-col">
        
        </div>
      </div>
      <div className='bordr w-full'>
        <div className='br bl h-[30vh] mx-15 centre'></div></div>
    </>
  )
}

export default testimonials
