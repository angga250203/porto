import React,{useState} from 'react'
import {motion} from "framer-motion"

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

function Animasi() {
    const [panelComplete, setPanelComplete] = useState(false)
  return (
    <>
      <motion.div
        initial={{ height:0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
        className="left-panel-background"
      ></motion.div>
      <motion.div
        style={{
          background: panelComplete ? "#e7e7de" : "#e7dee7",
        }}
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [0, 0, window.innerHeight],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="right-panel-background"
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete)
        }}
      ></motion.div>
         </>
  )
}

export default Animasi