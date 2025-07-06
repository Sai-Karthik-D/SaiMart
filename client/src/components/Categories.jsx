import React from 'react'
import { categories } from '../assets/assets'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
   const {navigate} =useAppContext();
  return (
    <div className='mt-15'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
        <div className='grid grid-col-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6 gap-6' >
            {categories.map((category,index) => (
            <div key={index} style={{backgroundColor:category.bgColor}}
            onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0,0);
            }} 
            className='group cursor-pointer py-5 px-2 gap-2 rounded-lg flex flex-col justify-center items-center'>
                <img className='w-24 h-24 object-contain group-hover:scale-105 transition' src={category.image} alt={category.text} />
                <p className='text-sm font-medium'>{category.text}</p>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Categories
