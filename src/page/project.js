import React, { useEffect, useState } from 'react'
import Projek from '../components/projek/projek'

import Animasi from './transition'
import {motion} from "framer-motion"



function Project() {




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
     }} 
    className='container'>
      <Projek/>
    </motion.div>
   
    </>
  
  )
}

export default Project