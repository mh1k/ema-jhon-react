import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const{user,logOut}=useAuth();
    return (
        <div className="header">
         <img src={logo} alt="" /> 
         <nav className="navbar">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/review">Order</NavLink>
            <NavLink to="/inventory">Manage Inventory here</NavLink>
            <span className="displayName">{user?.displayName}</span>

            {
                
                !user?.email ? 
                <NavLink to="/login">Log in</NavLink> :
                <a onClick={logOut} >Log out</a>
            }
            {/* <NavLink to="/register">Create account</NavLink> */}
         </nav>  
        </div>
    );
};

export default Header;