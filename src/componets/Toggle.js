import React, { useContext } from 'react'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import { ThemeContext } from '../Context'

export default function Toggle() {

    const theme = useContext(ThemeContext)
    const handleSubmit = () => {
        theme.dispatch({type: "TOGGLE"})
    }
  return (
    <div className='t'>
        <BsSunFill className='t-icon'/>
        <BsFillMoonFill className='t-icon'/>
        <div className='t-button' onClick={handleSubmit} style={{left : theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}
