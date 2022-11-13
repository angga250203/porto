import React from 'react'
import { BsFillMoonStarsFill,BsSun,BsCloudSun } from "react-icons/bs";
import {media} from "../../data/data"
import {motion,AnimatePresence} from "framer-motion"

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }


function Hero() {
  const date = new Date();
  const hour = date.getHours();

 const pathVariants ={
   hidden:{
     opacity:0,
     pathLength:0
   },
   visible:{
     opacity:1,
     pathLength:1,
     transition:{
       duration:2,
       ease:"easeInOut",
       delay:2
  
     }
   }
 }
  return (
    <AnimatePresence>
    <motion.div 
     initial={{visibility:'hidden'}}
     animate={{
      visibility: "visible",
      transition: { delay: 1 }

    }}
    transition={{...transition, duration:1, delay:1}}
    className='hero'>
      <div className='good'>
        <h3>Hello,</h3>
       {hour>=12 ? hour>=16 ? 
        <p>Good <span className='malam'>Evening <span className='bulan'><BsFillMoonStarsFill/></span></span></p>: 
        <p>Good <span className='sore'>Afternoon<span className='mata'><BsSun/></span></span></p> :
        <p>Good <span className='pagi'>Morning<span className='muncul'><BsCloudSun/></span></span></p>}

      </div>
      <div className='guguk'>
        <div className='svg'>
        <svg width="367" height="500" viewBox="0 0 300 500" fill="none" xmlns="http://www.w3.org/2000/svg" 
        
        >
          <motion.path 
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M209.871 327.85C164.698 318.522 119.35 325.305 73.8277 348.199C37.9363 369.898 32.2249 399.723 56.6935 437.673C57.1525 438.385 57.7159 439.045 58.3497 439.607C84.5341 462.828 117.671 472.743 157.76 469.352C158.322 469.304 158.889 469.301 159.451 469.343C193.043 471.842 229.785 462.663 269.677 441.806C310.137 415.133 326.674 384.746 319.291 350.645C319.086 349.7 318.724 348.783 318.228 347.954C301.08 319.29 269.78 308.519 224.329 315.641C190.254 317.673 151.916 327.847 109.317 346.165" stroke="#4DCCFF" stroke-width="9.44882" />
        </svg>
        </div>
        <h1>Angga Bimantoro</h1>
        <h3>frontend web developer</h3>
        <div className='bg1'>
                  {media.map((val, id) => {
                    const {img,url,nama } = val
                    return(
                      <div class="wrapper " key={id}>
                      <div class="icon html">
                        <div class="tooltip">
                          {nama}
                        </div>
                        <a href={url}>
                        <img src={img}/>
                        </a>
                      </div>
                      </div>
                      )
                    })}
                    
                  </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Hero