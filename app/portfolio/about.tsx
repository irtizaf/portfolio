import React from 'react'

export const About = () => {
  return (
    <div className='font-irtiza lg:mx-20 mt-24 space-y-5 mx-5 lg:pt-24 ' id='about' >
      <div className='  relative flex justify-center  '>


        <h1 className="  lg:text-9xl lg:font-bold  text-[#eef0f1] text-7xl ">About Me</h1>
        <h1 className=" text-4xl font-bold absolute  lg:top-10 top-5 border-b-[3px] border-b-[#1baa80]  ">Know Me More </h1>

      </div>
      <div className='lg:grid grid-cols-2   lg:mt-10 space-y-5'>
        <div className=' lg:text-lg lg:text-left text-center space-y-5'> <p className=' lg:leading-relaxed font-bold lg:text-3xl text-4xl'> I'm<span className='text-[#1baa80]'>  Muhammad Irtaza,</span> a Web Developer</p>
          <p className='text-base lg:m-0 mx-3'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p></div>
        <div className=' lg:ml-44 lg:w-3/5 space-y-5 px-5 '>
          <p>
            <span className='font-semibold'>Name:</span> Muhammad Irtaza
             <hr className='mt-3'/>
          </p>
          <p> <span className='font-semibold'>Email:</span>irtizaf@.com
          <hr className='mt-3'/> </p>
          <p> <span className='font-semibold'>Age:</span>28 <hr className='mt-3'/></p>
          <p><span className='font-semibold'>From:</span> Karachi,Pakistan </p>
          <button className='bg-[#1baa80] text-white w-40 h-10 rounded-full shadow-gray-300 shadow-xl '>Downlaod C.V</button>
        </div>
      </div>
      <div className='lg:flex md:flex lg:justify-evenly md:justify-evenly md:w-full grid grid-cols-2  w-2/3 m-auto  gap-5 pb-5  lg:py-7 text-slate-400'>
        <div className=''><p className='lg:text-6xl text-4xl'>10+</p>
          <p className='lg:text-3xl'>Years Experiance</p></div>
        <div className=''><p className='lg:text-6xl text-4xl'>250+</p>
          <p className='lg:text-3xl'>Happy Clients</p>
          
          </div>
          
        <div className=''><p className='lg:text-6xl text-4xl'>650+</p>
          <p className='lg:text-3xl'>Projects Done</p>
          </div>
        <div className=''>
          <p className='lg:text-6xl text-4xl'>38</p>
          <p className='lg:text-3xl '>Get Awards</p>
        </div>
      </div>
    </div>
  )
}
