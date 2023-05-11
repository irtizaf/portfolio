import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'

export const Pic = () => {
  return (
    <section className='text-'>
    <div> <p>Goku</p>
    <text>Framer Designer & Developer</text> </div>
  <div>
    <Image src={logo} alt='#' width={'100'} height={'100'}></Image>
  </div>
  <text>Framer Designer & Developer</text>
  <button>Hire me</button>
    </section>)
}
