import React from "react";
import './About.css';
const About = () => {
 return (
  <div className='about'>
   <div>
    <img className='about__img' src="https://ae01.alicdn.com/kf/Hb99c267b684d42ed86fdcfc6dd8c3a40M/Xxxtentacion.jpg_q50.jpg" alt="" />
   </div>
 
   <div>
   <h1>Jahseh  Onfroy</h1>
   <div className='about__item'>
    <div className='about__info'>
     <span>Age</span>
     <span>City</span>
     <span>Education</span>
    </div>
    <div className='about__info'>
     <span>22 Y.O.</span>
     <span>Florida</span>
     <span>RANEPA</span>
    </div>
    </div>
   </div>

  </div>
 )
}




export default About;