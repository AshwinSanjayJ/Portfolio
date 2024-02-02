import React from 'react'
import './skills.css';

const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'><span className='red'>Things</span> I Do</span><br/>
        <span className="skillDesc">I am a skilled and expert in creating website design and also figma design and can provide most appealing project and I'm proficient in HTML, CSS, Javascript, ReactJs, Python!</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src="ui-ux.png" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2><span className='red'>UI/UX</span> Design</h2>
                    <p>Present you great and most interactive user-experience and an user-friendly interface.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src="graphic-design.png" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2><span className='red'>Website</span> Design</h2>
                    <p>Most appealing web designs which is filled with trendy and classy components. Simply attractive !</p>
                </div>
            </div>
            <div className="skillBar">
                <img src="eye-scan.png" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2><span className='red'>Open</span> Cv</h2>
                    <p>N numbers of libraries with many pre-trained models inorder to do many functionalities in Computer Vision. </p>
                </div>
            </div>
        </div>
     
    </section>
  )
}

export default Skills