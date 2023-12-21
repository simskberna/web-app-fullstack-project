
import React from 'react'
import { lazy, Suspense } from 'react'

import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage' 
import { CartPage } from './pages/CartPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductDetail } from './pages/ProductDetail'
import { NotFound } from './pages/NotFound'
import { Route, Routes, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react' 
import { GET } from './api/service.js' 
import { CREATE_USER } from './api/service.js'   
import { ListingPage } from './pages/ListingPage'  
const App = () => {     
   
  useEffect(() => {
    if (window.localStorage.getItem('userid') === null) { 
      CREATE_USER('user/register') 
    }
  },[])
  
  const [selectedProd,setSelectedProd] = useState('') 
  const [categories,setcategories]  = useState('')
  const currency = '$'

  let data = GET('GetCategories') 
  
   
  useEffect(() => {    
    data.then((res) => { 
      setcategories(res) 
    })  
  }, [data.length]) 
  
 
  const handleProductSelect = (product) => { 
    setSelectedProd(product)
  }  
  return (
    <div className='root h-screen flex flex-col'>  
      <Header />
        <Routes>
            <Route path='/' element={<HomePage />} /> 
            
            <Route  path='/categories'   element={<CategoryPage />}  categories={categories} /> 
            
            <Route
                path='/category'
                element={
                  <ListingPage 
                  handleProductSelect={(product) => handleProductSelect(product)}
                  currency={currency}
                  />
                }       
             />
           
            <Route path='/cart' element={<CartPage />} />  
            <Route path='/product' element={
            <ProductDetail currency={currency} selectedProd={selectedProd} />} />   
          
           <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer /> 
    </div>
  )
}

export default App
