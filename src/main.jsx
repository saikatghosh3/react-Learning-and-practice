import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const todoTitle = "Hi, welcome to my channel"; 
const Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cupiditate!";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const headlineStyle = {
  backgroundColor : "purple",
  color : "white",
  textAlign : "center",
  padding: "15px"

}


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div>
    <h1 style={headlineStyle}>todo app</h1>
    <div className="carde">
    <h2 className="cardTitle">{todoTitle}</h2>
    <p className='cardDesc'>{Desc}</p>
    <p className='cardFotter'>{dateName + "/ " + monthName + "/ " + currentYear}</p>
    </div>
   
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </div>
)
