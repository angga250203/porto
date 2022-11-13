import React from 'react'
import { Link } from 'react-router-dom'
import {media} from "../../data/data"

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='warna'>
                <div className='text4'>
                    <h1>Have  a  project  in  mind?</h1>
                    <Link to={`contact`} onClick={() => window.scrollTo(0, 0)} className="bc">Contact Me</Link>
                </div>
                <div className='subtext'>
                    <p>Reach out for collaboration or say hi at</p>
                    <span>bimantoroa087@gmail.com</span>
                </div>
                <div className='luar1'>
                  <div className='bg1'>
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
    </div>
  )
}

export default Footer