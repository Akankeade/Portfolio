import React from 'react'
import Props1 from './Props1'
import { RiContactsFill } from 'react-icons/ri'
import './Contact.css'

const contact = () => {
  return (
    <section id='section' className='section'>

      <Props1
        headerText='Contact Me'
        icon={<RiContactsFill size={40} />}
      />

      <div className="contact-content">
        <h3 className="contact-text">Get In Touch</h3>

        <form action='https://formsubmit.co/akankeopeoluwa@gmail.com' method='POST' className="contact-form" >
          <input type="hidden" name="_subject" value="From your portfolio website!" />
          <div className="form-wrapper" >
            <div className='namecontent'>
              <input type="text" name='name' id='fullName' className='inputName' required/>
              <label htmlFor="name" className='nameLabel'>Name</label>
            </div>

            <div className='emailcontent'>
              <input type="email" name='email' id='email_id' className='inputEmail' required/>
              <label htmlFor="email" className='emailLabel'>Email</label>
            </div>

            <div className='descriptioncontent'>
              <textarea
                id='message'
                name='description'
                className='inputDescription'
                type='text'
                rows={'5'}
                style={{ resize: 'none' }}
                required
              />

              <label htmlFor="description" className='descriptionLabel'>Message</label>
            </div>

          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default contact