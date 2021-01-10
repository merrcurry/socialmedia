import React from "react";
import './Preloader.css'

const Preloader = () => {
   return (
      <div className="preloader">
         <div className="lds-ripple">
            <div></div>
            <div></div>
         </div>
      </div>
   )
}

export default Preloader;
