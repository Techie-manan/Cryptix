import AniY from './animation/aniY.jsx'
import Text from './animation/text.jsx'
import { motion } from 'framer-motion'

const capsules = [
  { name: "Solana", img: "/images/sol.png", price: "$194.46", change: "-0.67%" },
  { name: "Bitcoin", img: "/images/btc.png", price: "$94,894.69", change: "+1.16%" },
  { name: "Etherium", img: "/images/eth.png", price: "$2,694.46", change: "+1.38%" },
  { name: "XRP", img: "/images/xrp.png", price: "$2.406", change: "-1.67%" },
  { name: "Dash", img: "/images/dash.png", price: "$24.68", change: "+1.74%" },
];

const cryptos = () => {
  const animatedCapsules = [...capsules, ...capsules]; // duplicate for seamless loop

  return (
    <>
      <div className="flex w-full bordr">
        <div className="flex-1/2 ml-15 bordr p-10 gap-3">
          <div className='flex flex-col gap-5'>
            <AniY> <h1 className='text-5xl font-semibold'>All Cryptos, One Platform</h1></AniY>
            <p className='text-gray-400 text-xl'>
              <Text text={`Buy, sell, and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises.`} /></p>
          </div>
          <div className='h-[30vh] '></div>
          <div className='flex gap-5 items-center py-5'>
            <div className='text-3xl font-semibold'>Buy crypto now </div>
            <i class="fi fi-br-arrow-up-right text-xl"></i>
          </div>
        </div>
        <div className="w-[50vw] mr-15 bordr overflow-x-hidden">

          <div className="overflow-hidden w-full py-4">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {animatedCapsules.map((capsule, index) => (
                <div
                  key={index}
                  className="capsule flex gap-3 items-center p-2 bordr rounded-full w-55 flex-shrink-0 shadow"
                >
                  <img src={capsule.img} alt={capsule.name} className="h-15 w-15 rounded-full" />
                  <div>
                    <h1 className="text-xl font-semibold">{capsule.name}</h1>
                    <div className="flex">
                      <h2 className="text-gray-400 pr-1">{capsule.price}</h2>
                      <h2 className="text-red-600">{capsule.change}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden w-full py-4">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {animatedCapsules.map((capsule, index) => (
                <div
                  key={index}
                  className="capsule flex gap-3 items-center p-2 bordr rounded-full w-55 flex-shrink-0 shadow"
                >
                  <img src={capsule.img} alt={capsule.name} className="h-15 w-15 rounded-full" />
                  <div>
                    <h1 className="text-xl font-semibold">{capsule.name}</h1>
                    <div className="flex">
                      <h2 className="text-gray-400 pr-1">{capsule.price}</h2>
                      <h2 className="text-green-600">{capsule.change}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden w-full py-4">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {animatedCapsules.map((capsule, index) => (
                <div
                  key={index}
                  className="capsule flex gap-3 items-center p-2 bordr rounded-full w-55 flex-shrink-0 shadow"
                >
                  <img src={capsule.img} alt={capsule.name} className="h-15 w-15 rounded-full" />
                  <div>
                    <h1 className="text-xl font-semibold">{capsule.name}</h1>
                    <div className="flex">
                      <h2 className="text-gray-400 pr-1">{capsule.price}</h2>
                      <h2 className="text-green-600">{capsule.change}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden w-full py-4">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {animatedCapsules.map((capsule, index) => (
                <div
                  key={index}
                  className="capsule flex gap-3 items-center p-2 bordr rounded-full w-55 flex-shrink-0 shadow"
                >
                  <img src={capsule.img} alt={capsule.name} className="h-15 w-15 rounded-full" />
                  <div>
                    <h1 className="text-xl font-semibold">{capsule.name}</h1>
                    <div className="flex">
                      <h2 className="text-gray-400 pr-1">{capsule.price}</h2>
                      <h2 className="text-red-600">{capsule.change}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden w-full py-4">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {animatedCapsules.map((capsule, index) => (
                <div
                  key={index}
                  className="capsule flex gap-3 items-center p-2 bordr rounded-full w-55 flex-shrink-0 shadow"
                >
                  <img src={capsule.img} alt={capsule.name} className="h-15 w-15 rounded-full" />
                  <div>
                    <h1 className="text-xl font-semibold">{capsule.name}</h1>
                    <div className="flex">
                      <h2 className="text-gray-400 pr-1">{capsule.price}</h2>
                      <h2 className="text-green-600">{capsule.change}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
      <div className='bordr h-[30vh] mx-15 centre'></div>

    </>
  )
}

export default cryptos