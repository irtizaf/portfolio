import r1 from '../../public/review.png'
import Image from 'next/image'
import React from 'react'

const Testamonial = () => {
  return (<>
  <div className=" lg:mb-20   pt-20" id='test'>
  <div className=' relative flex justify-center mb-10'>


<h1 className="  lg:text-9xl font-bold text-[#eef0f1] text-5xl  ">TESTIMONIAL</h1>
<h1 className=" text-4xl font-bold absolute  lg:top-10 top-5  border-b-[3px] border-b-[#1baa80]  ">Client Speak </h1>

</div>
  
    <div className="carousel lg:mx-5 mx-3  space-x-4 ">

    <div id="item1" className="carousel-item lg:w-auto w-80 ">
      
      <Image src={r1} alt ="#"></Image>
    </div> 
    <div id="item2" className="carousel-item lg:w-auto w-80">
    
    <Image src={r1} alt ="#"></Image>
    </div> 
    <div id="item3" className="carousel-item lg:w-auto w-80">
    <Image src={r1} alt ="#"></Image>
    </div> 
    <div id="item4" className="carousel-item lg:w-auto w-80 ">
    <Image src={r1} alt ="#"></Image>
    </div>
  </div> 
  <div className="flex justify-center  gap-1.5">
    {/* <a href="#item1" className="btn btn-xs">1</a> 
    <a href="#item2" className="btn btn-xs">2</a> 
    <a href="#item3" className="btn btn-xs">3</a> 
    <a href="#item4" className="btn btn-xs">4</a> */}
  </div>
  </div>
  </>
  )
}

export default Testamonial