import React from 'react'
import './Home.css';
import { Animate } from "react-simple-animate";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesConfig from '../Helpers/ParticlesConfig'
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaGithub } from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import AkankeCV from '../Assets/AkankeCV.pdf'



const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }


  return (
    <section className='home' id='home'>
      <Particles id='particles' options={ParticlesConfig} init={particlesInit} />
      <div className="home-text">
        <h1>Holla, I'm Akanke
          <br />
          Front End Developer
        </h1>
      </div>

      <Animate
        play
        duration={1}
        delay={0.5}
        start={{
          transform: 'translateY(450px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
      >
        <div className="contact">
          <div className='contact-button'>
            <Link to='/Contact'>Hire me</Link>

            <a href={AkankeCV} download>Download Resume</a>
          </div>

        </div>

        <div className="contact-icons">
          <a href="https://github.com/Akankeade" target= "_blank" rel='noreferrer'><FaGithub size={32}/></a>
          <a href="https://wa.me/2349097372104" target= "_blank" rel='noreferrer'><FaWhatsapp size={32} /></a>
          <a href="https://www.linkedin.com/in/medina-akanke-931584250" target= "_blank" rel='noreferrer'><FaLinkedinIn size={32}/></a>
          <a href="https://twitter.com/Mowewuola" target= "_blank" rel='noreferrer'><FaTwitter size={32}/></a>
          <a href="mailto:akankeopeolwa@gmail.com" target= "_blank" rel='noreferrer'><FiMail size={32}/></a>
        </div>
      </Animate>

    </section>
  )
}

export default Home