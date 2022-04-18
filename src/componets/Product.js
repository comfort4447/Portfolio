import React from 'react'

export default function Product({img, link}) {
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href = {link} target= "_blank" rel= "noreferrer">
        <img src={`../images/${img}`} alt="" className='p-img'/>
      </a>
    </div>
  )
}
