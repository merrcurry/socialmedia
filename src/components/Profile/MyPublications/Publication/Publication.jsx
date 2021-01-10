import React from 'react';
import s from './Publication.module.css';

const Publication = (props) => {
   return (
      <div className={s.publication}>
         <img
            src="https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-u.jpg"
            alt=""/>
         <div>
            {props.message}
         </div>

         <div>
            <span>Likes {props.likesCount}</span>
         </div>

      </div>
   )
}

export default Publication;
