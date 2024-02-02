import React from 'react';
import "./works.css";

const Works = () => {
  return (
   <section id="works">
    <h2 className="worksTitle">My <span className='red'>PortFolio</span></h2>
    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online benchmark !.</span>
    <div className="workImgs">
        <img src="c1.jpg" alt="" className="worksimg" />
        <img src="c2.jpg" alt="" className="worksimg" />
        <img src="c3.jpg" alt="" className="worksimg" />
        <img src="c4.jpg" alt="" className="worksimg" />
        <img src="c5.jpg" alt="" className="worksimg" />
        <img src="c6.jpg" alt="" className="worksimg" />
    </div>
    <button className="worksbtn">See More</button>
   </section>
  )
}

export default Works