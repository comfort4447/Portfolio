import React, { useContext, useRef, useState } from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import { ThemeContext } from '../Context'
import emailjs from 'emailjs-com'

export default function Contact() {
  const formRef = useRef()
  const [ done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_ihai77x', 
      'template_nji0nbv', 
      formRef.current, 
      'aCsGaWrm4XdZb4v32')

      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
      <div className='c-left'>
          <h1 className='c-title'>
            Let's discuss your project
          </h1>
          <div className='c-info'>
            <BsFillTelephoneFill className='c-icon'/>
            +234 81 4589 8631
          </div>
          <div className='c-info-item'>
            <MdEmail className='c-icon'/>
            tayoabisola44@gmail.com
          </div>
          <div className='c-info-item'>
            <HiLocationMarker className='c-icon'/>
            2B, Rycroft Road, Apapa Lagos
          </div>
        </div>
        <div className='c-right'>
          <div className='c-desc'>
            <b>What's your story? </b>Get in touch. 
            Always available for freelancing if the right project comes along.
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode ? "#333" : "white"}} type= "text" placeholder='Name' name='user_name' />
            <input style={{backgroundColor: darkMode ? "#333" : "white"}} type= "text" placeholder='Subject' name='user_subject' />
            <input style={{backgroundColor: darkMode ? "#333" : "white"}} type= "email" placeholder='Email' name='user_email' />
            <textarea style={{backgroundColor: darkMode ? "#333" : "white"}} placeholder='Message' name='message' rows="5" />
            <button>Submit</button>
            { done && "Thank you..." }
          </form>
        </div>
      </div>
    </div>
  )
}
