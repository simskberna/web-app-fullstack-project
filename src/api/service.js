import axios from 'axios'    
import { makeid } from '../helpers/createUserId' 
import SERVER from '../config.js' 
const apiBaseURL = SERVER
export const GET = (url) => {  
    const response = axios.get(`${apiBaseURL}/${url}`)
        .then(res => { 
            if (res.status === 200) {  
            return res.data
            }
        })
        .catch(err => console.log(err))
      
    return response
        
}  
export const CREATE_USER = (url) => {    
    let id = makeid(7) 
    if (window.localStorage.getItem('userid') === null) {
        window.localStorage.setItem('userid', id)
    }else {
        let newUserId = makeid(7)
        window.localStorage.setItem('userid', newUserId)
    }
    axios.post(`${apiBaseURL}/${url}`, {
        userid:id
    }).then((res) => { 
       
    }).catch(err => {
        console.log(err)
         
    })
}  
export const ADD_CART = (url, data) => {     
    const response = axios.post(`${apiBaseURL}/${url}`, data).then((res) => {  
        if (res.status === 200) { 
            alert('Product added to cart.')
            return res.data 
        }
    }).catch(err => console.log(err))
    return response
}  
export const GET_CART = async(url) => {
    const response = await axios.get(`${apiBaseURL}/${url}`)
    .then(res => { 
        if (res.status === 200) {   
        return res.data
        }
    }).catch(err => console.log(err))
  
return response
}
export const REMOVE_CART = (url) => {
    const response = axios.post(`${apiBaseURL}/${url}`)
    .then((res) => { 
        if (res.status === 200) {
            alert('Product removed from cart.')
            return res.data
        }
    }).catch(err => {  console.log(err) })
    return response
}
export const ORDER = (url, products) => {  
  const result =  axios.post(`${apiBaseURL}/${url}`, {products:products}).then((res) => {   
        if (res.status === 200) {
            alert(`Purchase successful. Your order id is : `+res.data.orderId)
      }
      return res.data
      
     }).catch(err => {
         console.log(err)
          
     })
    return result
}