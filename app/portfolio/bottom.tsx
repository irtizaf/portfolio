import React from 'react'
import {RxDividerVertical} from 'react-icons/rx'

const Bottom = () => {
  return (
    <div className='lg:flex lg:justify-evenly py-5 text-center text-xl mx-5 space-y-3'>
        <div className='lg:mt-3'>
            <p>Copyright © 2023 <span className='text-[#1baa80]'>Three Tech.</span>  All Rights Reserved.</p>
        </div>
        <div className='flex justify-center'>
            <text className='hover:text-[#1baa80]'>Terms & Policy</text> <RxDividerVertical className='mt-1'/>  <text className='hover:text-[#1baa80]'>Disclaimer</text> 
  
        </div>

    </div>
  )
}

export default Bottom
