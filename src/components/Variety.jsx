import React from 'react'
import {categories} from '../utils/data'

function Variety() {
  return (
    <>
    <div className=' m-auto  '>
    <h1 className='bg-gray-400  text-center font-bold text-2xl p-2 my-4 '>Top rated menu this month</h1>
        <div className='grid grid-cols-4 gap-4 p-4'>
            
            {categories.map((item,index)=>{
                return <div key={index} className='bg-gray-200 flex justify-center p-2'>
                        <h1 className='font-semibold text-2xl'>{item.name}</h1>
                        <img src={item.image} alt="" />
                        </div>
            })}

        </div>

    </div>
    
    </>
  )
}

export default Variety