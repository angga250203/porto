import React from 'react'
import {motion} from "framer-motion"
import { porto } from '../../data/produk'
import { Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';







function Projek() {

 
  return (
      <>
      
    <div className='projek'>
      <div className='top32'>
        <motion.h1
               initial={{ y:-400 }}
               animate={{ y:0 }}
               transition={{ delay:1.5, duration:1 ,type:'spring'}}
        >Portofoli</motion.h1><motion.h1
              initial={{y:-400}}
              animate={{y:0}}
              transition={{delay:2.5, duration:2,type:'spring',stiffness:300,}}
        >o</motion.h1>
        </div>
        <div  className='top42'>
        <h3> These are some of the portfolios that I have created using various programming languages</h3>
          </div>
      </div>
      <div className='bagi2'>
      {porto.map((item) =>{
        return(
         
          <div className='bungkus2 'key={item.id}>
             <Link to={`/singel/${item.id}`} onClick={() => window.scrollTo(0, 0)} className="inilink">
           <div className='judul2'>
                 <h2>{item.nama}</h2>
                 <p>{item.judul}</p>
            </div>
          
          <div className='pawal5'>
          <LazyLoadImage 
          src={item.img}
          placeholderSrc={item.imgk}
          effect="blur"
          />
          </div>
       
          </Link>
          <div className='tekno1'>
                <h4>Teknologi</h4>
                <LazyLoadImage src={`../images/${item.tekno1}`}/>
                <LazyLoadImage src={`../images/${item.tekno2}`} />
                <LazyLoadImage src={`../images/${item.tekno3}`}/>
                <LazyLoadImage src={`../images/${item.tekno4}`} />
               
            </div>
          </div>
     
   
        )})}
       
    </div>
     


      
    </>
  )
}

export default Projek