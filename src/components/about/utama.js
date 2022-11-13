import React from 'react'
import {motion} from 'framer-motion'

function Utama() {
  return (
    <>
    <div className='bagiabout'>
        <div className='utama43'>
            <motion.h1
             initial={{ y:-400 }}
             animate={{ y:0 }}
             transition={{ delay:1.5, duration:1 ,type:'spring'}}
            >About M</motion.h1><motion.h1
            initial={{ rotate:45 }}
            animate={{ rotate:0 }}
            transition={{ delay:2, duration:0.5 ,type:'spring',stiffness:200}}
            >e</motion.h1>
            </div>
         <div className='utama44'>
                <h3>Designing meaningful experiences for brands & businesses</h3>
                </div>
    </div>

    <motion.div 
     initial={{y:-700}}
     animate={{y:0}}
     transition={{delay:2, duration:4,type:'spring',stiffness:300,}}
    
    className='bulatab'>
            <p>About Me</p>
        </motion.div>
    <div className='bagiabout2'>
        <div className='foto1'>
            <img src='../images/utama.png'></img>
        </div>
        <div className='deskrip'>
            
<p className='dua'>
<span>My name is Angga Bimantoro</span>
, or you can call me Angga. I focus on studying web application development and web design. The main programming language I'm exploring is Javascript, as well as the React framework (and the environment in general). I love learning things, and always want to learn new things. I am enthusiastic, reliable, responsible and hardworking person.


</p>
        </div>
    </div>
    </>
  )
}

export default Utama