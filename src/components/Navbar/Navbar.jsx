import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className={ s.nav }>
         <ul className={ s.items }>
            <li>
               <NavLink to="/profile" activeClassName={ s.activeLink }>Profile</NavLink>
            </li>
            <li>
               <NavLink to="/im" activeClassName={ s.activeLink }>Messages</NavLink>
            </li>
            <li>
               <NavLink to="/users" activeClassName={ s.activeLink }>Users</NavLink>
            </li>
            <li>
               <NavLink to="/feed" activeClassName={ s.activeLink }>News</NavLink>
            </li>
            <li>
               <NavLink to="/music" activeClassName={ s.activeLink }>Music</NavLink>
            </li>
            <li>
               <NavLink to="/settings" activeClassName={ s.activeLink }>Settings</NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar;
