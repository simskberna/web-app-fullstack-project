import React from 'react'
import { Link } from 'react-router-dom'   
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react' 
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionCreators } from '../index'
import { GET } from '../api/service.js' 
import { Loader } from '../components/Loader'
export const CategoryPage = ({ categories, handleClick }) => {     
  const [thisCategories, setCategories] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  if (categories && categories.length > 0 && categories !== '') {
    useEffect(() => {
      setCategories(categories)
      setIsLoading(false)
    },[])
  } else { 
    let data = GET('GetCategories')  
    useEffect(() => { 
      data.then((res) => {  
        setCategories(res)  
      }).then(() => setIsLoading(false))
    }, [])  
  }
 
  const dispatch = useDispatch()
  const { setCategory } = bindActionCreators(actionCreators, dispatch) 
  return (
    <>
      {
        isLoading ? <Loader /> : 
        <div className='h-full grid gap-4 lg:grid-cols-3 grid-cols-2'> 
        {thisCategories.map((item, index) => {   
          const { id, name, category, image } = item;    
          return ( 
            <Link
              style={{ backgroundImage: `url(${image})` }}
              className='bg-no-repeat bg-center drop-shadow-md lg:drop-shadow-lg uppercase text-center font-bold rounded-sm lg:m-14 lg:p-0 m-5 p-2 flex items-center justify-center'
              key={index}
              onClick={() => {
                setCategory(category)
                handleClick(category)
              }}
              to={`/category?id=${item.id}`}
               > 
              <h5>
                {name}
              </h5>  
            </Link> 
          )
        })}
        
      </div>
    }
    </> 
  )
}
