
import React from 'react'
import {Link } from 'react-router-dom'
import heroImagge from "./../assets/images/hero.png"
function Hero() {
  return (
      <section className='bg-linear-to-b from-coffee-cream to-white pt-8'>
          <div className='max-w-6xl mx-auto py-16 px-8 grid md:grid-cols-2 items-center gap-8'>
              <div>
                  <p className='bg-coffee-orange inline-flex  items-center px-4 py-2 rounded-full text-sm'>☕ Fresh, Fast, Order.</p>
                  <h1 className='mt-4 text-4xl font-extrabold text-coffee-brown tracking-tight md:text-5xl'>Fresh Coffee From   <span className='text-coffee-orange'>IDU </span>Coffee Shop </h1>
                  <p className='mt-4'>Order your favorite coffee and snacks online. Simple menu quick checkout, and smooth ordering experince.</p>

                  <div className='flex mt-4 gap-2 items-center'>
                
           
                      <Link to="/menu"
                       className='bg-coffee-orange px-6 py-2 rounded-full hover:bg-coffee-brown  hover:text-coffee-orange'>Explore Menu</Link>
                      <Link to="/cart"
                      className='py-2 px-6 border border-coffee-orange rounded-full hover:border-coffee-brown'>View Cart</Link>
                  </div>
              </div>
              <div>
                <img src={heroImagge} alt="" className='w-full'/>
              </div>
          </div>
      </section>
  )
}

export default Hero;