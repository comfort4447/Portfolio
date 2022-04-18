import React, { useContext } from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import { ThemeContext } from '../Context'

export default function Contact() {
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
            Always available for freelancing if the right project comes along me
          </div>

          <form >
            <input style={{backgroundColor: darkMode ? "#333" : "white"}} type= "text" placeholder='Name' name='user-name' />
            <input style={{backgroundColor: darkMode ? "#333" : "white"}} type= "text" placeholder='Subject' name='user-subject' />
            <input style={{backgroundColor: darkMode ? "#333" : "white"}} type= "email" placeholder='Email' name='user-email' />
            <textarea style={{backgroundColor: darkMode ? "#333" : "white"}} placeholder='Message' name='Message' rows="5" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
