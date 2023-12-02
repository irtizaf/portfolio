import React from 'react'

export const Summary = () => {
  return (
    <>
    <div id='summary' className='pt-10'>
      <div className=' mt-20 mx-5'>
        <div className=' relative flex justify-center my-10 '>


          <h1 className="  lg:text-9xl font-bold  text-[#eef0f1] text-6xl  ">SUMMARY</h1>
          <h1 className=" text-4xl font-bold absolute  top-5  border-b-[3px] border-b-[#1baa80]  ">Resume </h1>

        </div>
        <div className='md:flex  md:space-x-10  md:justify-center   md:mx-5 gap-y-10'>
          <div className='space-y-5 mt-3 lg:mt-0'>
            <h1 className='text-2xl font-bold '>My Education</h1>
            <div className='border-2 lg:w-96  p-5 rounded-md'>
              <p className='bg-[#1baa80] w-20 text-center text-white rounded-lg'> 2010</p>
              <h1>Computer Science</h1>
              <p>HSC Karachi Board</p>
              <p></p>
            </div>
            <div className='border-2 lg:w-96 p-5 rounded-md'>
              <p className='bg-[#1baa80] w-20 text-center text-white rounded-lg'> 2014</p>
              <h1>Pre Engineering</h1>
              <p>Inter Board Karachi Board</p>
              <p></p>
            </div>
            <div className='border-2 lg:w-96 p-5 rounded-md'>
              <p className='bg-[#1baa80] w-20 text-center text-white rounded-lg'> 2019</p>
              <h1>Software Engineering</h1>
              <p>Ilma University</p>
              <p></p>
            </div>

          </div>
          <div className='space-y-5 mt-3 lg:mt-0'>
            <h1 className='text-2xl font-bold'>My Experience</h1>
            <div className='border-2 lg:w-96 p-5 rounded-md'>
              <p className='bg-[#1baa80] w-20 text-center text-white rounded-lg'> 2013 - 2015</p>
              <h1>Criterion </h1>
              <p>Admin Manager</p>
              <p></p>
            </div>
            <div className='border-2 lg:w-96 p-5 rounded-md'>
              <p className='bg-[#1baa80] w-20 text-center text-white rounded-lg'> 2016 - 2023</p>
              <h1>Tayrr</h1>
              <p>Teaching O/A level Computer</p>
              <p></p>
            </div>
            <div className='border-2 lg:w-96 p-5 rounded-md'>
              <p className='bg-[#1baa80] w-20 text-center text-white rounded-lg'> 2020 - 2023</p>
              <h1>Freelancer content writer</h1>
              <p>Completing projects</p>
              <p></p>
            </div>

          </div>
          
        </div>
        <p className='text-4xl  md:text-center my-7'>My Skills</p>
       
        
        <div className='md:grid md:grid-cols-2 md:mx-5 md:space-x-5 md:py-10 '>

          <div className='space-y-5  '>

            <div className=''>
              <div className=' md:w-11/12 md:mt-5 lg:mt-0 flex justify-between ' >
                <p>Web Design</p>
                <p>90%</p>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full lg:h-2 h-2 md:w-full  dark:bg-gray-700">
                <div className="bg-[#1baa80] h-2 rounded-full  w-[90%]" ></div>
              </div>
            </div>
            <div>
              <div className=' md:w-11/12 flex justify-between ' >
                <p>HTML/CSS</p>
                <p>99%</p>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2 md:w-full  dark:bg-gray-700">
                <div className="bg-[#1baa80] h-2 rounded-full w-[99%]" ></div>
              </div>
            </div>
            <div>
              <div className='md:w-11/12 flex justify-between ' >
                <p>TypeScript</p>
                <p>85%</p>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2 md:w-full  dark:bg-gray-700">
                <div className="bg-[#1baa80] h-2 rounded-full w-[85%] " ></div>
              </div>
            </div>

          </div>

          <div className='space-y-5 mt-5 lg:mt-0 '>

            <div className=''>
              <div className=' md:w-11/12 flex justify-between ' >
                <p>React JS</p>
                <p>85%</p>
              </div>
              
              <div className="mt-2 bg-gray-200 rounded-full h-2 lg:w-11/12 dark:bg-gray-700">
                <div className="bg-[#1baa80] h-2 rounded-full w-[85%]" ></div>
              </div>
            </div>
            <div>
              <div className='md:w-11/12 flex justify-between ' >
                <p>Next JS</p>
                <p>85%</p>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2 lg:w-11/12 w-full dark:bg-gray-700">
                <div className="bg-[#1baa80] h-2 rounded-full w-[85%]" ></div>
              </div>
            </div>
            <div>
              <div className='md:w-11/12 flex justify-between ' >
                <p>Python</p>
                <p>95%</p>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2 lg:w-11/12 w-full dark:bg-gray-700">
                <div className="bg-[#1baa80] h-2 rounded-full w-[95%]" ></div>
              </div>
            </div>

          </div>

        </div>
        <div className=' flex justify-center md:pb-4 py-4'> <button className='bg-white text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white  text-xl rounded-full px-10 py-1'>Download CV
        </button></div>
      </div>
      
    </div>
   
              
    </>
 
  )
}