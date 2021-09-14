import React from 'react'
import './imageslider.js'


const Homeservices = () => {
    return (
        <div>
         
         <div className="slider-box" id="sl-box">
        <div id="slider">
            
            <div className="slide">
                
                    <img src="../images/pc26.jpg" alt="" />
                    <h5>Home deep cleaning</h5>
               
                </div>
            <div className="slide">
                    <img src="../images/pc26.jpg" alt="" />
                    <h5>Home deep cleaning</h5>
                </div>
            <div className="slide">
                    <img src="../images/pc26.jpg" alt="" />
                    <h5>Home deep cleaning</h5>
                </div>
           
        </div>
        <div className="indicators">
            <button id="btn1" class="active"></button>
            <button id="btn2"></button>
            <button id="btn3"></button>
           
        </div>
    </div>

    

        </div>
    )
    
}

export default Homeservices
