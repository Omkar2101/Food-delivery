import React from 'react'

function Cardshome({img,address,info}) {
  return (
    <>
    <div className='max-h-[600px] max-w-[1640] p-4 mx-auto'>
      <div className='relative  bg-black/50 h-[150px] w-[300px] rounded-lg overflow-hidden '>
        <div className='absolute overflow-hidden  h-[100px] w-full  text-white left-2 top-4 '>
          <p className='font-bold'>{info}</p>
          <p className='font-bold'>{address}</p>
          <button className='bg-black border-white my-4 text-white  rounded-lg p-1'>Order Now</button>
        </div>
        <img className=' object-cover h-full w-full rounded-lg' src={img}alt="" />
      </div>
    </div>
    </>
  )
}

export default Cardshome