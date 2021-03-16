import React from "react"
import Card from "./Card"

import Sdata from "./Sdata"



function Service(props) {

   return (

      <div className="container-lg">
            <h2 className="text-center text-light">Our Services</h2>

        <div className="">
            <div className="row">
              {
                Sdata.map((value, index)=>{
                return  <Card
                  key={index}
                  imageSrc={value.imgSrc}
                  title={value.title}
                  descption={value.descp}

                  />
                })
              }

            </div>
        </div>

      </div>

  );
}

export default Service;
