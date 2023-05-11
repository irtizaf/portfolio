import React from 'react'
import todo from '../../public/todo.jpeg'
import Image from 'next/image'
import s1 from '../../public/Screenshot (3).png'
import s2 from '../../public/Screenshot (5).png'
import s3 from '../../public/Screenshot (6).png'
export const Gird = () => {
  return (
    <>
    <div className='py-20' id='grid'>
    <div className='relative flex justify-center mb-10 ' >


<h1 className=" lg:text-9xl font-bold  text-[#eef0f1] text-6xl ">PORTFOLIO</h1>
<h1 className=" text-4xl font-bold absolute  top-5  border-b-[3px] border-b-[#1baa80] ">My Work</h1>

</div>
    
    <div className='  lg:grid lg:grid-cols-2  md:grid md:grid-cols-2 lg:gap-3 md:gap-3  mb-10 mx-5 space-y-3'>
        <div className='bg-gray-100 rounded-lg lg:mt-3 md:mt-3'>
            
            <Image className='w-full h-48 object-cover rounded-t-lg' src={todo} alt="#" ></Image>
            <div className='p-6'>
                <h1 className='font-bold text-2xl'>Todo App</h1>
                <p className='mt-4 mb-3 text-xl'>My first project on next js 13 </p >
                <a className='text-lg font-bold text-purple-600'> Read More</a>
            </div>
        </div>
        <div className='bg-gray-100 rounded-lg'>
            
            <Image className='w-full h-48 object-cover rounded-t-lg' src={s2} alt="#" ></Image>
            <div className='p-6'>
                <h1 className='font-bold text-2xl'>Pricing UI</h1>
                <p className='mt-4 mb-3 text-xl'>2nd Assignment with responsiveness </p >
                <a className='text-lg font-bold text-purple-600'> Read More</a>
            </div>
        </div>
        <div className='bg-gray-100 rounded-lg'>
            
            <Image className='w-full h-48 object-cover rounded-t-lg' src={s1} alt='#' ></Image>
            <div className='p-6'>
                <h1 className='font-bold text-2xl'>Panaverse Website</h1>
                <p className='mt-4 mb-3 text-xl'>My first website on next js 13 with complete responsiveness </p >
                <a className='text-lg font-bold text-purple-600'> Read More</a>
            </div>
        </div>
        <div className='bg-gray-100 rounded-lg'>
            
        <Image className='w-full h-48 object-cover rounded-t-lg' src={s3} alt='#' ></Image>
            <div className='p-6'>
                <h1 className='font-bold text-2xl'>My Resume Website</h1>
                <p className='mt-4 mb-3 text-xl'>My Resume website will all the code work what i done so far i put in this website </p >
                <a className='text-lg font-bold text-purple-600'> Read More</a>
            </div>
        </div>
                
    </div>
    </div>
    </>
  )
}
