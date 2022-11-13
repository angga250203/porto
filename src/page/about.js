import React from 'react'
import Skill from '../components/about/skill'
import Utama from '../components/about/utama'
import Animasi from './transition'
import {motion} from "framer-motion"



function About() {
  return (
    <>
   
    <Animasi/>
    <motion.div 
    initial={{ visibility: "hidden" }}
    exit={{
      visibility: "hidden",
      transition: { delay: 1 },
    }}
    animate={{
      visibility: "visible",
      transition: { delay: 1 },
    }} className='container'>
        <Utama/>
        <Skill/>
    </motion.div>
  
    </>
  )
}

export default About