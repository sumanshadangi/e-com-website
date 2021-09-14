import React from 'react'
import Servicecarddetail from './servicecarddetail';
import { Link } from 'react-router-dom';
const ServiceCard = ({servicedata}) => {
    
    return (
        <div>
            <div className="featured">
            <div className="featured-heading"><p>Featured</p></div>
            <div className="featured-content">
            {servicedata.map((curElem)=>{
        return (
            <>

<div className="featured-item" key={curElem.id}>
    <div className="img-wrap">
                    <img src={curElem.image} alt="" /></div>
                    <p className="featured-detail">{curElem.detail}</p>
                    <div className="detail-button">
                       <Link to={{
    pathname: "/Servicecarddetail",
    carddetail:curElem
  }}><button>View details</button></Link>
                    </div>
                </div>

            </>
        )
    })}
           </div>
        </div>
        </div>
    )
}

export default ServiceCard
