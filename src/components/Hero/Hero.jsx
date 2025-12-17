import{Box,CircleCheckBig} from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='bg-primaryColor-600 text-white py-5 flex items-center gap-6 px-6 rounded-2xl mb-6 mt-4'>

        <div className=" p-3 rounded-xl bg-white/20 backdrop-blur-md ">
          <Box size={40} className="text-white" />
        </div>

        <div className='md:leading-10'>
            <h1 className='font-bold md:text-[20px]'>iHUZA INVENTORY - System Overview</h1>
            <p>Monitor your iHUZA inventory and product assignments in real-time.</p>
            <p className='flex items-center gap-1'><CircleCheckBig className='text-green-500 w-5'/> All Systems Operational</p>
        </div>
    </div>
  )
}

export default Hero