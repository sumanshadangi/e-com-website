import React from 'react';
import './style.css';
import Menu from './serviceApi.js';
import ServiceCard from './serviceCard';
import Homeservices from './homeservices';
import { Link } from 'react-router-dom';
const Homeservicepage = () => {
    const [serviceData,setMenuData]=React.useState(Menu);
   
   
    return (
        <>
        <div className="top-section">
            <header className="head">
       <div className="head-left">
           <Link to="/">
       <div className="back-logo">
         
               <img src="../images/back.png" alt="" />
              </div></Link>
        
         <p className="head-title">Home Services</p>
       </div>
       <div className="head-right">
         <div className="my-order">
         <div className="order">
            <p>My Orders</p>  
         <img src="../images/pc5.png" alt="" />
         </div>
         
       </div>
       </div>
       
     </header>
        <div className="search">
            <div className="search-content">
            <img src="../images/pc7.png" alt="" />
            <input type="text" placeholder="Search" />
            </div>
        </div>
        </div>
     
        <Homeservices/>
        <div className="section-2">
            <div className="yellow-box">
                <img src="../images/pc8.png" alt="" />
                <p>106421+ homes in your neighbourhood trust Mygate with their household needs</p>
            </div>
        </div>
      
        <ServiceCard servicedata={serviceData}/> 
           
        </>
    )
}

export default Homeservicepage
