import React from 'react';
import Props1 from './Props1';
import { BsInfoCircleFill } from 'react-icons/bs';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
import { Animate } from "react-simple-animate";
import { personalInfo } from './Info';
import './About.css'

const About = () => {
  return (
    <section id='about' className='about'>
      <Props1
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />


      <div className="about-content">
        <div className='sub-content1'>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <h3 className='devname'>Front End Developer</h3>

            <p>You came this far in checking my profile, thank you. My name is Salaudeen Medina Akanke. I am a front end developer in Nigeria with efficient knowlegde and use of web development tools in creating responsive, user friendly, accessible frontend products.  A developer who writes clean, elegant and efficient code. Recently completed a full stack web development course and looking out for internsip opportunities to implement my knowledge and also help me grow.</p>
          </Animate>


          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className='info'>My Information</h3>

            <ul>
              {
                personalInfo.map((item, key) => (
                  <li key={key}>
                    <span className='label'>{item.label}</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>

        <div className='sub-content2'>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <div className="sub-inner">
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>

            </div>
          </Animate>
        </div>

      </div>
    </section>
  )
}

export default About