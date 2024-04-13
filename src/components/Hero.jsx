import React from 'react'

function Hero() {
  return (
    <>
    <div className='max-width-[1640px] p-4 mx-auto'>
      
        <div className='flex items-center justify-center  max-h-[500px]   '>
          <div className=' w-[1050px] '>
          <div className='absolute z-5  p-4  text-white font-bold text-5xl'>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">HUNGRY ?</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">JUST <span className='text-orange-500'> GRAB </span> IT.</h1>
          </div>
              <img className='rounded-[20px] max-h-[500px]   w-full  ' src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
              
          
          </div>
           
        </div>
    </div>
    </>
  )
} 

export default Hero