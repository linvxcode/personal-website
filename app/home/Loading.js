'use client'
import React from 'react'
import {Skeleton} from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2 items-center md:gap-15">
      <div>
        <Skeleton className="flex rounded-full w-[150px] h-[150px]"/>
      </div>  
      <div className='md:mt-10 mt-3'>
        <Skeleton className="flex rounded-full w-[150px] h-[150px]"/>
      </div>  
      <div className='md:mt-10 mt-3'>
        <Skeleton className="flex rounded-full w-[150px] h-[150px]"/>
      </div>  
      <div>
        <Skeleton className="flex rounded-full w-[150px] h-[150px]"/>
      </div>  
    </div>
  )
}

export default Loading
