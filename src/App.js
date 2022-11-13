import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/style/App.scss';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import About from './page/about';
import Contact from './page/contact';
import Home from './page/home';
import Project from './page/project';
import Singel from './page/singel';
import Animasi from './page/transition';
import {motion} from "framer-motion"
import { BsFillMoonStarsFill,BsSun,BsCloudSun } from "react-icons/bs";






function App() {
  const date = new Date();
  const hour = date.getHours();

  const [preloader,setPreloader] = useState(true);

  const [timer, setTimer] = useState(2);

  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(()=>{
    id.current = window.setInterval(()=>{
      setTimer((timer)=>timer-1)
    },1000)
  },[])

  useEffect(()=>{
    if(timer === 0){
      clear();
    }
  },[timer])

  return (
     <>
     {preloader? <div className='loader absolute'>
     {hour>=12 ? hour>=16 ? 
        <h2>Good <span className='malam'>Evening <span className='bulan'><BsFillMoonStarsFill/></span></span></h2>: 
        <h2>Good <span className='sore'>Afternoon<span className='mata'><BsSun/></span></span></h2> :
        <h2>Good <span className='pagi'>Morning<span className='muncul'><BsCloudSun/></span></span></h2>}
     </div> :
  <div>
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
      }} >
       <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="project" element={<Project/>} />
            <Route path="singel/:id" element={<Singel/>} />
            <Route path="contact" element={<Contact/>} />
          </Routes>
          <Footer/>

      </Router>
      </motion.div>
      </div>
}
     </>
  );
}

export default App;
