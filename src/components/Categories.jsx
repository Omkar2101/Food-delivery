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
          return<div key={index} className='hover cursor-pointer'  >
                  <div className=' mt-4 w-[280px] shadow-lg bg-gray-400/90 hover:scale-105 duration-300 m-2 rounded-lg ' >
                        <img className=' rounded-xl object-cover h-[200px] w-full ' src={item.image} alt="" />
                        <div className='flex items-center  p-2 justify-between'>
                        <p className='text-white font-semibold '>{item.name}</p>
                        <p className='bg-black text-center text-white h-[26px] w-[60px] rounded-lg' >Buy</p>
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

// import React, { useState } from 'react';
// import { IoFastFoodOutline } from 'react-icons/io5';
// import { GiFoodTruck } from 'react-icons/gi';
// import { data } from '../utils/data';

// function Categories() {
//   const [food, setFood] = useState(data);

//   const filterVal = (category) => {
//     setFood(data.filter((item) => item.category === category));
//   };

//   const filterPrice = (price) => {
//     setFood(data.filter((item) => item.price === price));
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="flex flex-col items-center space-y-4 mb-8">
//         <IoFastFoodOutline size={30} className="text-orange-500" />
//         <h1 className="text-3xl font-semibold text-center text-orange-500">
//           Explore The Categories
//         </h1>
//         <GiFoodTruck size={30} className="text-orange-500" />
//       </div>

//       <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
//         {/* Food Categories */}
//         <div className="w-full sm:w-1/2 p-4">
//           <p className="text-2xl mb-4">Food Categories</p>
//           <div className="flex flex-wrap justify-center sm:justify-start">
//             <button onClick={() => setFood(data)} className="btn-category">All</button>
//             <button onClick={() => filterVal('burger')} className="btn-category">Burger</button>
//             <button onClick={() => filterVal('pizza')} className="btn-category">Pizza</button>
//             <button onClick={() => filterVal('salad')} className="btn-category">Salads</button>
//             <button onClick={() => filterVal('chicken')} className="btn-category">Chicken</button>
//           </div>
//         </div>

//         {/* Prices */}
//         <div className="w-full sm:w-1/2 p-4">
//           <p className="text-2xl mb-4">Prices</p>
//           <div className="flex flex-wrap justify-center sm:justify-start">
//             <button onClick={() => filterPrice('$')} className="btn-price">$</button>
//             <button onClick={() => filterPrice('$$')} className="btn-price">$$</button>
//             <button onClick={() => filterPrice('$$$')} className="btn-price">$$$</button>
//             <button onClick={() => filterPrice('$$$$')} className="btn-price">$$$$</button>
//             <button onClick={() => filterPrice('$$$$$')} className="btn-price">$$$$$</button>
//           </div>
//         </div>
//       </div>

//       {/* Display Food section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {food.map((item, index) => (
//           <div key={index} className="hover:shadow-lg rounded-lg overflow-hidden">
//             <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
//             <div className="p-4 flex justify-between items-center bg-gray-800/90">
//               <p className="text-white font-semibold">{item.name}</p>
//               <button className="bg-orange-500 text-white rounded px-2">Buy</button>
//               <p className="bg-gray-600 text-white rounded p-1">${item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;

