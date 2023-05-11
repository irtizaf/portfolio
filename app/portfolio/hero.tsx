'use client'
import React from 'react'
import TypewriterAnimation from "./typeAnimation";

export const Hero = () => {
  const phrases = [" Hello ,  I am Irtiza", " I AM JAMSTACK DEVELOPER"];
  const speed = 100; // in milliseconds
  return (
    <div className=' image font-irtiza lg:h-screen lg:relative h-screen  md:pt-3  ' id='home'>
      
      
<div className='lg:text-center md:my-48 md:space-y-4 text-gray-200 sm:w-1/2 sm:m-auto pt-52 sm:pt-0 sm:space-y-5'>
  <p className='lg:text-3xl text-xl text-center'>Welcome</p>
  
  <div className=" md:mx-auto md:mt-8 ">
      <TypewriterAnimation  phrases={phrases} speed={speed} />
    </div>
  <p className='md:text-3xl text-center sm:text-xl'>Based in Karachi pakistan</p>
  <div className=' flex justify-center '>
  <button className='  text-[#1baa80] border-2 border-[#1baa80] hover:bg-[#1baa80] hover:text-white  sm:text-base rounded-full md:px-10 md:py-1 px-4 '><a href='#foot'> Hire Me </a>
        </button>
        </div>
</div>

</div>

  )
}

