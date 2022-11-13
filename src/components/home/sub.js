import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Accordion from './accordion'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"


function Sub() {
  const controls = useAnimation();
  const [ref, InView] = useInView();
  useEffect(()=>{
  if (InView){
    controls.start("visible");
  }
}, [controls, InView]);
 
  return (

    <div className='container'>
        <motion.div 
        ref={ref}
         initial={{ visibility: "hidden",
                    x:-200,
        
        }}
         animate={{
           visibility: "visible",
           x:0,
           rotate:360,
         }}

         transition={{delay:2,
          duration:1.5
        
        }}
        className='bulat'>
            <p>What I Offer</p>
        </motion.div>
        <div className='bagi'>
        <div className='text'>
            <h1>Delivering modern,
                cohesive &
                intuitive web
                solutions.</h1>
            <p className='subtitle'>I enjoy designing meaningful experiences for brands &
                                        businesses to help them serve their target users.</p>
    
            <Link to={`/about`}>
              <button onClick={() => window.scrollTo(0, 0)} >about</button>
              </Link>
       
            
       
        </div> 
        <div className='Accor'>
           <Accordion/>
         
        </div> 
        </div>

    </div>
 
    
  )
}

export default Sub