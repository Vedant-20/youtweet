import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  
  <Provider store={store}>
  <BrowserRouter >
  <SnackbarProvider>
    <App />
  </SnackbarProvider>

  </BrowserRouter>
  </Provider>
  
  
  
  
    
  </React.StrictMode>,
)
