import React from 'react'
import Image from '../../Component/Img/Image'

const Backgound = () => {
  return (
    <div className='absolute top-[-200px] max-sm:top-0'>
        {/* <Image alt="svg" src="/svg/bg3.svg" width={400} height={400} priority /> */}
        <Image alt="svg" src="/svg/bg3.svg" width={1000} height={1000} priority />
        <div className='absolute top-[200px]'>
        {/* <Image alt="svg" src="/svg/Ellipse1.svg" width={400} height={400} priority /> */}
        </div>

    </div>
  )
}

export default Backgound
