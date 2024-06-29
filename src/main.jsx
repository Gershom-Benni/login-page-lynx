import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
// import MainPage from './components/MainPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Login/>
    {/* <MainPage/> */}
  </React.StrictMode>,
)
