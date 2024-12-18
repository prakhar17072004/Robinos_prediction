import React from 'react'
import { MdOutlinedFlag } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";

function sidebar() {
  return (
    <div className='w-[350px] h-[100vh] pt-[30px] pl-[10px] space-y-[42px] bg-[#061230] text-white'>
        <img src="../assets/robinos_islogo.svg" alt="logo" />
        <div className='font-medium flex  gap-x-3 items-center text-xl'> 
            <MdOutlinedFlag className='text-4xl'/>
            Versus
            </div>
        <div className='font-medium items-center text-xl flex gap-x-3'> 
        <TiStarOutline  className='text-4xl'/>
            Tonkenized prediction</div>
        <div className='font-medium text-xl'>Portfolio</div>
        <div className='font-medium text-xl'>MinoNFT</div>
        <div className="font-medium text-xl">Swapsicle</div>
    </div>
  )
}

export default sidebar