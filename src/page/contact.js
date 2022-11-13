import React from 'react'
import Contactutama from '../components/contak/contactutama'
import Animasi from './transition'
import {motion} from "framer-motion"



function Contact() {
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
    <Contactutama/>
    </motion.div>
    
    </>
  )
}

export default Contact