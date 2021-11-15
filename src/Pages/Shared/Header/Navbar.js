import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.svg';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {NavDropdown } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


const Navbar = () => {

    const {user,logOut}=useAuth();

    const [nav,setNav]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY >=50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

    const userIcon=<FontAwesomeIcon icon={faUser} className='text-black mt-1 text-2xl'/>
    //const img=<img src={user.photoURL} alt="" />;
    return (
        <div>
            <nav className={nav?"nav active":"nav"}>
                <Link to="/" className="logo" >
                    <img src={logo} alt="" />
                </Link>

                <input className="menu-btn" type='checkbox' id="menu-btn" />

                <label htmlFor="menu-btn" className='menu-icon'>
                    <span className='nav-icon'></span>
                </label>

                <ul className="menu">
                    <li> <Link to="/home">Home</Link> </li>
                    <li> <Link to="/services">Services</Link> </li>
                    <li> <Link to="/shop">Shop</Link> </li>
                    <li> <Link to="/blogs">Blog</Link> </li>
                    <li> <Link to="/about">About</Link> </li>

                    <NavDropdown  title={userIcon} id="navbarScrollingDropdown">  
                                <NavDropdown.Item >
                                    {/* <div className="grid grid-cols-2">
                                    {img}
                                        <div>
                                            <img src={user.photoURL} classname="userphoto"alt="" />
                                        </div>
                                        <div>
                                            {user.displayName}
                                        </div>
                                    </div> */}
                                    {user.displayName}
                                    
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                {user?.email ?
                                <Button onClick={logOut} variant="danger">Logout</Button> :
                                <Link as={Link} to="/login">Login</Link>
                                }
                                </NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </nav>
        </div>

);
};
export default Navbar;






 

