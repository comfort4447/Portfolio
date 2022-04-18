import React from 'react'
import Product from './Product'
import { products } from './data.js'

export default function ProductList() {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create & Inspire. It's Comfort</h1>
        <p className='pl-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      </div>
      <div className='pl-list'>
        {products.map((item) =>(
          <Product key={item.id} 
          img={item.img} 
          link={item.link}/>
        ))}
      </div>
    </div>
  )
}
