import React from "react";
import Service from "./Service"
import {NavLink} from "react-router-dom"

const Card = (props) =>{
  return(

        <div className="col-md-4">
            <div className="card my-3">
                <img src={props.imageSrc} className="card-img-top" alt="Card image"/>
              <div className="card-body text-light">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.descption}</p>
                <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
              </div>
          </div>

        </div>




  )
}


export default Card
