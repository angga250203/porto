import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {motion,AnimatePresence} from "framer-motion"
import { AiOutlineClose } from "react-icons/ai";
import {media} from "../../data/data"

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }


function Menu({menuState, setMenuState}) {
  return (
    <>
    <AnimatePresence>
    
    {menuState && (
      <>
          <motion.div   
          initial={{ visibility: "hidden" }}
              exit={{
                visibility: "hidden",
                transition: { delay: 1 },
              }}
              animate={{
                visibility: "visible",
                transition: { delay: 1 },
              }} className='backgound'>
          <div className='bg-2'>
            <div 
            onClick={() => setMenuState(false)} className="yy">
              <AiOutlineClose/>
             </div>

             <div onClick={() => setMenuState(false)} className='bar'>
            


             <motion.div 
               initial={{ x:-200}}
               animate={{
                x: 0,

              }}
              transition={{...transition, duration:1, delay:1}}
             className='aboutnav'>
                <Link to={'/about'}>About</Link>
             </motion.div>

             <motion.div 
               initial={{ x:200}}
               animate={{
                x: 0,

              }}
              transition={{...transition, duration:1, delay:1}}
             className='projectnav'>
                <Link to={'/project'}>project</Link>
             </motion.div>



             <motion.div 
              initial={{ x:-200}}
              animate={{
               x: 0,
              }}
              transition={{...transition, duration:1, delay:1}}
             className='contactnav'>
                <Link to={`/contact`}>contact</Link>
             </motion.div>

                <div className='luar'>
                  <div className='bg'>
                  {media.map((val, id) => {
                    const {img,url } = val
                    return(
                    <div key={id}>
                    <a href={url}>
                    <img src={img}></img>
                    </a>
                    </div>
                      )
                    })}

                  </div>
                  
                </div>
             </div>
          </div>
        </motion.div>    
                  
        <Panels />
      </>
    )}
    </AnimatePresence>
    </>
  )
}
const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false)
  return (
    <>
      <motion.div
        initial={{ height:0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{ 
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
        exit={{
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

export default Menu  


