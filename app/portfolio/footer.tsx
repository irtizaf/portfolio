"use client"
import { IoMdCall } from 'react-icons/io'
import { BsBuilding } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsDribbble } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { CiFacebook } from 'react-icons/ci'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

import React from 'react'
import { Textarea } from 'flowbite-react'

const New = () => {
  return (
    <>
    <div className='bg-[#f8f9fa] py-10 'id='foot'>
    <div className='flex justify-center relative  my-20 '>
    <h1 className="  lg:text-9xl font-bold  text-[#eef0f1] text-6xl">CONTACT</h1>
<h1 className=" text-4xl font-bold  absolute   lg:top-10 top-5 border-b-[3px] border-b-[#1baa80]  ">Get in Touch </h1>
</div>
      <div className='flex  flex-wrap-reverse '>
      

        <div className='mt-3 lg:w-auto w-1/2 lg:m-0 m-auto  text-center lg:text-left  lg:ml-28  '>
          
          <div className=''>
            <h1 className='font-bold  text-gray-700 text-2xl'>ADDRESS</h1>
            <p className='mt-1 text-sm text-gray-500'>L-4-2/11 center point phase 1 f.b area block 21
              
    </p>
          </div>
          <p className='flex justify-center lg:justify-start  py-2  text-lg text-gray-500'><IoMdCall className='text-green-400 lg:text-xl mt-1 lg:mr-1'/>  0313-1015357</p>
          <p className='flex justify-center lg:justify-start   py-2  text-lg text-gray-500'><BsBuilding className='text-green-400 text-xl mt-1 mr-1' />0313-1015357</p>
          <p className='flex justify-center lg:justify-start  py-2 text-lg text-gray-500'><MdEmail className='text-green-400 text-xl  mt-1 mr-1'/>irtizaf@yahoo.com</p>
          <p className='font-semibold mt-6 text-gray-700 text-2xl'>FOLLOW ME</p>
          <div>

          </div>
          <div className='flex justify-center lg:justify-start text-gray-700 lg:justify-items-start   gap-3 mt-5 '>
            <div><BsDribbble /></div>
            <div><BsTwitter /></div>
            <div><CiFacebook /></div>
            <div><AiOutlineGoogle /></div>
            <div><AiFillGithub /></div>
          </div>
        </div>
        <div className=' lg:ml-20 lg:mx-0 mx-5 md:w-auto w-full  m-auto '>
          <p className='text-xl text-gray-700 font-semibold text-center '>SEND US A NOTE</p>
          
          <input type="text" placeholder='Name' className=' rounded-md lg:w-96 w-full py-2 px-2  border-2 mt-5'/>
          <input type="text" placeholder='Email' className=' rounded-md lg:w-96 w-full py-2  lg:ml-5 px-2 border-2  mt-5'/><br/>
          
          <Textarea  placeholder='Tell us more about your needs.....' className=' rounded-md lg:h-44 h-32 align-text-top px-2 border-2 mt-5'/>
          <div className=' lg:ml-64  lg:w-40 py-2  rounded-full text-center  shadow-xl   mx-14 hover:bg-[#158362] text-white  mt-5 bg-[#1baa80]'><button >Send Messages</button></div>
        </div>
      </div>
      </div>
    </>
  )

  }
export default New