import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { porto } from '../data/produk';
import Animasi from './transition';
import {motion} from "framer-motion"
import { BsFillArrowLeftCircleFill} from "react-icons/bs";



function Singel() {
    const {id} = useParams();
    const item = porto[id]
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
    <div className='bagisingel'>
        <div className='singel1'>
          <Link to={`/project`}>
          <div className='kembali'>
                <BsFillArrowLeftCircleFill/>
          </div>
          </Link>
            <div className='judulprojek'>
                <h1>{item.nama}</h1>
            </div>
            <div className='subprojek'>
                <h3>{item.judul}</h3>
            </div>
            <div className='live'>
                <a href={item.link}>Live Priview</a>
            </div>
            <div className='tekno'>
                <h4>Teknologi</h4>
                <img src={`../images/${item.tekno1}`}></img>
                <img src={`../images/${item.tekno2}`} ></img>
                <img src={`../images/${item.tekno3}`}></img>
                <img src={`../images/${item.tekno4}`} ></img>
               
            </div>

        </div>

        <div className='single2'>
        <img src={item.img} ></img>
        <div className='kategori'>
                <h4>Role</h4>
                <h2>{item.kategori}</h2>
            </div>

        </div>
        </div>

            <div className='deskripsi'>
                <h3>{item.desp}</h3>
                <p>{item.desl}</p>
            </div>


    </motion.div>

    </>
  )
}

export default Singel