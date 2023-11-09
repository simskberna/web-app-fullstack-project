import React from 'react'
import { Link } from 'react-router-dom'    
import { useEffect, useState } from 'react'  
import { GET } from '../api/service.js' 
import { Loader } from '../components/Loader'
import CoffeeMakers from '../assets/CoffeMakers.png'
import Cleaners from '../assets/Cleaners.png'
import Mixers from '../assets/Mixers.png' 
import HomeEntertainment from '../assets/HomeEntertainment.png'
import Health from '../assets/HealthAndPersonal.png'
import Lightning from '../assets/Lightning.png'

export const CategoryPage = ({ categories, handleClick }) => {     
  const [thisCategories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const categoriesImages = [
    { 
      'index' : '1',
      'src' : CoffeeMakers
    },
    { 
      'index' : '2',
      'src' : Cleaners
    },
    { 
      'index' : '3',
      'src' : Mixers
    },
    { 
      'index' : '4',
      'src' : HomeEntertainment
    },
    { 
      'index' : '5',
      'src' : Health
    },
    { 
      'index' : '6',
      'src' : Lightning
    }
  ] 
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
  
  
  return (
    <>
      {
        isLoading ? <Loader /> : 
        <div className='h-full grid gap-4 lg:grid-cols-3 grid-cols-2'> 
            {thisCategories.map((item, index) => {   
              item.image = categoriesImages[index].src  
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
