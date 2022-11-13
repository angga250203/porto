import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"


function Contactutama() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqjusjh', 'template_z5g04y6', form.current, 'yLsYNP9UIILHhTIbJ')
      .then((result) => {
          console.log(result.text);
          console.log("messege sent")
      }, (error) => {
          console.log(error.text);
      }); 
  };
  return (
    <>
    <div className='bagict'>
        <div className='top'>
        <motion.h1
        initial={{ y:-400 }}
        animate={{ y:0 }}
        transition={{ delay:1.5, duration:1 ,type:'spring'}}
        >Conta</motion.h1>
        <motion.h1
        initial={{ x:40 }}
        animate={{ x:0 }}
        transition={{ delay:1.5, duration:1 ,type:'spring'}}
        >c</motion.h1>
        <motion.h1
        initial={{ x:-70 }}
        animate={{ x:0 }}
        transition={{ delay:1.5, duration:1 ,type:'spring'}}
        >t</motion.h1>
        </div>
        <div className='top1'>
        <h3>Interested in working with me?Submit your project inquiry using theform below</h3>
        </div>

    </div>
    <div className='per2'>
    <div className='get'>
      <h3>Get in Touch With Me.</h3>
      <p>Hello, if you need my help don’t hesitate to contact me.</p>
      <div className='email'>
      <form ref={form} onSubmit={sendEmail}>
            <div className='name'>
            <label >Name</label><br/>
            <input type="text" name="user_name" />
            </div>

            <div className='mail'>
            <label>Email</label><br/>
            <input type="email" name="user_email" />
            </div>

            <div className='pesan'>
            <label>Message</label><br/>
            <textarea name="message" />
            </div>
            
            <input type="submit" className='submit' value="Send" />
          </form>


        </div>
    </div>
    <div className='medsos'>
      <h2 className='medsos1'>Social</h2>

      <div className='warna1'>
      <a href='' className='ig'> 
      <img src='../images/ig.png'></img>
      <h3>Instagram</h3>
      </a>
      </div>

      <div className='warna2'>
      <a href='' className='ig'> 
      <img src='../images/fb.png'></img>
      <h3>Facebook</h3>
      </a>
      </div>

      <div className='warna3'>
      <a href='' className='ig'> 
      <img src='../images/tw.png'></img>
      <h3>Twiter</h3>
      </a>
      </div>

    </div>
    </div>

    </>
  )
}

export default Contactutama