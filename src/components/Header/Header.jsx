import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
   return (
      <header className={ s.header }>
         <img src='https://lh3.googleusercontent.com/2cfmxOER3tLavZjOPJED-7xct24XOTkkF1RiVizpa8rkSxySt_02Lqjx4mRa9XZyRzY=w220-rw' alt=''/>
         <div className={ s.login }>
            { props.isAuth
               ? <div> { props.login } <button onClick={ props.logout }>Log Out</button> </div>
               : <NavLink to='/login'>Log In</NavLink>
            }
         </div>
      </header>
   )
}

export default Header;
