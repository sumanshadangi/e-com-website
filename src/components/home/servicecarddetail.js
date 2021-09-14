import React from 'react'
import {useLocation, Link } from 'react-router-dom';
import './style.css'
import './imageslider.js'

const Servicecarddetail = () => {
    const location=useLocation();
    const carddetail=location.carddetail;
    
    return (
        <div>
            {/* <h3>{carddetail.id}</h3>
            <img src={carddetail.image} alt="" /> */}
            <div className="servicedetail-container">
            <div className="detailpage">
                <div className="image-icon">
                   <Link to="/"><img className="card-icon" src="../images/cross-icon.png" alt="" /></Link> 
                    <img className="card-image" src={carddetail.image} alt="" />
                </div>
                <div className="detail">
                    <h4>{carddetail.detail}</h4><br/>
                    <p>{carddetail.extradetail}</p>
                </div>
                <div className="blue-strip" id="blue_strip">
                    <button id="bluebutton"></button>
                    <div className="blue-item" id="close">
                    <img src="../images/right.png" alt=""/></div>
                    <div className="blue-item">
                    <img src="../images/line.png" alt="" /></div>
                    <div className="blue-item">
                    <img src="../images/touch.png" alt="" /></div>
                    <div className="blue-item">
                    <img src="../images/mic.png" alt="" /></div>
                    <div className="blue-item">
                    <p>00:00:02</p>
                    </div>
                    <div className="blue-item">
                    <img src="../images/stop.png" alt="" /></div>
                </div>
                
            </div>
            <div className="buy">
                <button className="buynow">But Now</button>
            </div>
            <div className="relatedproducts">
                <div className="toppart">
                    <p>products</p>
                    <button>View all</button>
                </div>
                <div className="bodypart">
                    <img src="../images/pc27.jpg" alt="" />
                    <img src="../images/pc29.jpeg" alt="" />
                </div>
            
            
            </div>
            </div>
        </div>
    )
}

export default Servicecarddetail
