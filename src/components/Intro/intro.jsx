import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
<section id="intro">
  <div className="introContent">
    <span className="hello">Hello,</span>
    <span className="introText">I'm <span className="introName">Ashwin</span><br />Website Designer</span>
    <p className="introPara">A skilled webpage developer with experience in creating<br/>a fabulous and user-friendly websites.</p>
    <Link><button className="btn"><img src="hireme.png" alt="" className='btnimg' /><b>Hire Me</b></button></Link>
  </div>
  <img src="bg.png" alt="Profile" className="bg" />
</section>
)
}

export default Intro;