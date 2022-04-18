 import React from 'react'

export default function Navbar() {
  return (
    <div className='i'>
      <div className='i-left'>
      <div className='i-left-wrapper'>
        <p className='i-intro'>Hello, My name is</p>
        <h2 className='i-name'>Tayo Comfort Abisola</h2>
        <div className='i-title'>
          <div className='i-title-wrapper'>
            <div className='i-title-item'>FrontEnd Web Developer</div>
            <div className='i-title-item'>UI/UX Designer</div>
          </div>
        </div>
        <div className='i-desc'>
          <p>I design and develop website for all sizes, specializes in creating stylish, modern 
            websites,web services and online stores
            </p>
        </div>
      </div>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
      <img src='../images/Abisola.png' alt='' className='i-img'/>
      </div>
    </div>
    
  )
}
