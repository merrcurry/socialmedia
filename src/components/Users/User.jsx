import React from 'react';
import s from './User.module.css';
import userPhoto from '../../assets/image/userPhoto.jpg'
import { NavLink } from 'react-router-dom';

const User = (props) => {
   return (
      <div>
         {
            props.users.map(u => {
               return (
                  <div key={ u.id } className={ s.user_card }>
                     <div>
                        <NavLink to={ '/profile/' + u.id }>
                           <img src={ u.photos.small !== null ? u.photos.small : userPhoto } alt=""/>
                        </NavLink>
                     </div>
                     <div>
                        <p>{ u.name }</p>
                        <p>{ u.status }</p>

                        { u.followed
                           ? <button disabled={ props.followingInProgress.some(id => id === u.id) } onClick={ () => {

                              props.unfollow(u.id)

                           } }>Unfollow</button>

                           : <button disabled={ props.followingInProgress.some(id => id === u.id) } onClick={ () => {

                              props.follow(u.id)

                           } }>Follow</button>
                        }
                     </div>
                  </div>
               )
            })
         }
      </div>

   )
}

export default User;
