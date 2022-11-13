import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {awal} from '../../data/produk'


function Project1() {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
        animation.start({
          x:0,
          rotate:1800,
          transition:{
            duration:4,
            
          }
        });
    }
    if(!inView){
      animation.start({x: '-100vw'})
    }
  }, [inView]);

  return (
    <div className='work' ref={ref}>
    <div className='container'>
      <motion.div 
      animate={animation}
      className='bulat1'>
         <p>Work</p>
        </motion.div>

      <div className='projectku'>
        <h2>My portofolio</h2>
        <p>These are some of the portfolios that I have created using various programming languages</p>
      </div>
      <div className='bagi2'>
      {awal.map((item) =>{
        return(
         
          <div className='bungkus2 'key={item.id}>
             <Link to={`/singel/${item.id}`} onClick={() => window.scrollTo(0, 0)} className="inilink">
           <div className='judul2'>
                 <h2>{item.nama}</h2>
                 <p>{item.judul}</p>
            </div>
          
          <div className='pawal5'>
            <img src={item.img}  alt='halo'></img>
          </div>
       
          </Link>
          <div className='tekno1'>
                <h4>Teknologi</h4>
                <img src={`../images/${item.tekno1}`}></img>
                <img src={`../images/${item.tekno2}`} ></img>
                <img src={`../images/${item.tekno3}`}></img>
                <img src={`../images/${item.tekno4}`} ></img>
               
            </div>
          </div>
     
   
        )})}
        </div>
            <Link to={`/project`}>
        <div className='button1'>
              <button className='bt1' onClick={() => window.scrollTo(0, 0)} >Project</button>
              </div>
              </Link>
    </div>
    </div>
  )
}

export default Project1

