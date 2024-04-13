import React, { useState,useCallback,useEffect } from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import {data} from "../utils/data"

function Categories() {

  const [food,setfood] =useState(data);

  // let pricetag=document.querySelector(".pricing");

  // const priceval=()=>{
  //    pricetag.addEventListener("click",function(e){
  //     return console.log(e);
  //    })}
  // priceval();
  // making a function takes parameter and filter according to it and give it to the onClick event on the button.


 
  
  const filterval = ((category) => {
    return setfood(data.filter((item) => item.category === category));
    
  });

  //for filtering teh prices
  const filterprice=(price)=>{
    return setfood(
      data.filter((item)=>{
        return item.price===price;
      })
    )

  }


  return (
    
    <>
    <div className='m-auto max-w-[1640px] py-12'>
        <div className='flex w-[px] h-[] bg-orange-400 justify-center items-center gap-4'>
        <IoFastFoodOutline size={30}></IoFastFoodOutline>
            <h1 className='text-3xl p-1 font-semibold text-center bg-orange-400'>
               Explore The Categories
           </h1>
           <GiFoodTruck size={30} ></GiFoodTruck>
        </div>
       
      
      <div className='flex justify-between items-center'>


        <div className=' p-4 gap-[40%]'>
            {/* Categories */}
            <p className='text-2xl ' >Food Categories</p>
            <div className=''>
            <button onClick={()=>{setfood(data)}} className='hover:bg-orange-500 m-[2px] bg-black text-white'>All</button>
            <button onClick={()=>{filterval('burger')}}  className='hover:bg-orange-500 m-[2px] bg-black text-white '>Burgur</button>
            <button onClick={()=>{filterval('pizza')}}  className='hover:bg-orange-500 m-[2px] bg-black text-white '>Pizza</button>
            <button onClick={()=>{filterval('salad')}} className='hover:bg-orange-500 m-[2px] bg-black text-white '>Salads </button>
            <button onClick={()=>{filterval('chicken')}} className='hover:bg-orange-500 m-[2px] bg-black text-white '>Chicken</button>
            </div>
        </div>
        <div>
            {/*Prices */}
            <p className='text-2xl'>Prices</p>
            <div>
                <button onClick={()=>{filterprice('$')}} className='hover:bg-orange-400 mx-[2px]   bg-black text-white'>$</button>
                <button onClick={()=>{filterprice('$$')}} className='hover:bg-orange-400 mx-[2px] bg-black text-white'>$$</button>
                <button onClick={()=>{filterprice('$$$')}}  className='hover:bg-orange-400 mx-[2px] bg-black text-white'>$$$</button>
                <button onClick={()=>{filterprice('$$$$')}} className='hover:bg-orange-400 mx-[2px] bg-black text-white'>$$$$ </button>
                <button onClick={()=>{filterprice('$$$$$')}} className=' hover:bg-orange-400 mx-[2px] bg-black text-white'>$$$$$</button>
            </div>
            
        </div>
      </div>

      {/* Display Food section */}
      <div className='grid grid-cols-4 p-6 gap-4'>
        {food.map((item,index)=>{
          return<div key={index}  >
                  <div className='p-2 mt-4 w-[280px] shadow-lg bg-gray-400/90 hover:scale-105 duration-300 m-2 rounded-lg ' >
                        <img className='center rounded-xl object-cover h-[250px] w-[240px] p-2' src={item.image} alt="" />
                        <div className='flex  p-0.5 justify-between'>
                        <p className='text-white font-semibold '>{item.name}</p>
                        <p  value={item.price} className=' bg-black text-white rounded-lg p-0.5'>{item.price}</p>
                        </div>
                       
                        
                  </div>
                  
                </div>
        })}
        
          
      

      </div>
          

    </div>
       
  
    </>
  )
}

export default Categories