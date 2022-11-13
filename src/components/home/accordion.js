import React,{useState} from 'react'
import {Dac} from '../../data/data'



function Accordion() {
  const [selected,setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }

      setSelected(i)
  }
   
  return (
    <div className='accordion'>
      {Dac.map((item, i) =>
         <div className='item' key={item.id}>
         <div className='title' onClick={() => toggle(i)}>
           <h2>{item.pertanyaan}</h2>
           <span> {selected === i ? '-' : '+'} </span>
         </div>
         <div className={selected === i ? 'conten show' : 'conten'}>
           {item.jawab}
         </div>
         </div>
      
      )}
     
    </div>
  )
}

export default Accordion