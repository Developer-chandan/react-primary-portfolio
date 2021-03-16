import React from "react"
import Images from "./image/web-developer-chandan.JPG"

function Common(props) {

   return (
     <div className="container-lg">
        <div className="row">
           <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
             <div className="">
               <h1 className="text-light">Hello,This is <strong className="text-warning">{props.name}</strong></h1>
               <div>
                   <ol className="sociallinks">
                       <li className="facebook-link"><i class="fab fa-facebook-f"></i></li>
                       <li className="instagram-link"><i class="fab fa-instagram"></i></li>
                       <li className="twitter-link"><i class="fab fa-twitter"></i></li>
                       <li className="linkdin-link"><i class="fab fa-linkedin-in"></i></li>
                   </ol>
                   </div>
               <button className="btn btn-lg btn-outline-warning mt-4">{props.btnname}</button>
             </div>
           </div>

           <div className="col-md-6 col-12">
             <div className="cover-wraper">
               <img src={props.imgSrc} alt="logo" className="coverimage img-fluid"/>
             </div>
           </div>
       </div>
     </div>

  );
}

export default Common;
