
import React, { useState, useEffect } from "react";
import { bahasa,back } from '../../data/data';

function Skill() {
    const [position, setPosition] = useState({
      x: "",
      y: "",
    });
  
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  return (
<div className="asu">
    <h3 className="sk">My Skill</h3>
    <p className="fe">the skills I master and the tools I use to create Web and Design</p>
    <h3 className="fes">Frontend skill</h3>
    <ul>
      {bahasa.map((elem, i) => (
        <div className="baris" key={i}>
          <span>{elem.name}</span>
          <div className='img-cont'>
            <img src={elem.cover} alt={elem.name} />
          </div>
        </div>
      ))}
      </ul>


      <h3 className="fes">Backend Skill</h3>
    <ul>
      {back.map((elem, i) => (
        <div className="baris" key={i}>
          <span>{elem.name}</span>
          <div className='img-cont1'>
            <img src={elem.cover} alt={elem.name} />
          </div>
        </div>
      ))}
      </ul>

    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className="cursor"
    ></div>
    </div>
  )
}

export default Skill