import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './modules/store.js'
import { ScrollToTop } from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= { store }>
      <BrowserRouter> 
        <ScrollToTop/>
        <App />
        </BrowserRouter>
    </Provider> 
  </React.StrictMode>,
)
