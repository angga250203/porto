import React from 'react'
import Hero from '../components/home/hero'
import Project1 from '../components/home/project1'
import Sub from '../components/home/sub'
import {motion,AnimatePresence} from "framer-motion"
import Animasi from './transition'



function Home() {
  return (
    <>

 
      <Animasi/>
    <motion.div className='container'>
        <Hero/>
        <Sub/>
        <Project1/>
    </motion.div>
  
    
    </>
  )
}

export default Home