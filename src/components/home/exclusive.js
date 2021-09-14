// this is the first page
import React from 'react';
import './style.css';
import Menu from './serviceApi.js';
import ServiceCard from './serviceCard';
import { Link } from 'react-router-dom';

const Exclusive = () => {
    const [serviceData,setMenuData]=React.useState(Menu);
   
   
    return (
        <>
        <div className="top-section">
            <header className="head">
       <div className="head-left">
       <div className="back-logo">
         
               <img src="../images/back.png" alt="" />
              </div>
        
         <p className="head-title">Exclusives</p>
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
     
      
        <div className="section-2">
            <div className="yellow-box">
                <img src="../images/pc8.png" alt="" />
                <p>106421+ homes in your neighbourhood trust Mygate with their household needs</p>
            </div>
        </div>
        <div className="category">
            <div className="category-heading"> <p>Explore by Category</p></div>
            <div className="category-content">
                <div className="category-item" >
                <Link to="/Homeservicepage" style={{ textDecoration: 'none', color:'black'}}>
                    <img src="../images/pc9.jpeg" alt="" />
                    <p className="category-title">Home Services</p>
                    </Link>
                </div>
                <div className="category-item">
                <Link to="/Homeservicepage" style={{ textDecoration: 'none', color:'black'}}>
                    <img src="../images/pc11.jpg" alt="" />
                    <p className="category-title">Home Decor</p>
                    </Link>
                </div>
                <div className="category-item">
                <Link to="/Homeservicepage" style={{ textDecoration: 'none', color:'black'}}>
                    <img src="../images/pc12.jpg" alt="" />
                    <p className="category-title">Work from Home</p>
                    </Link>
                </div>
            </div>
        </div>
        <ServiceCard servicedata={serviceData}/> 
           
        </>
    )
}

export default Exclusive
