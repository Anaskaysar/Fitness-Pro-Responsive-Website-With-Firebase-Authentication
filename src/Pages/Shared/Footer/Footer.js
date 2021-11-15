import React from 'react';
import Logo from '../../../images/Logo.svg';
import './Footer.css'

import { faMapMarkerAlt,faEnvelope,faPhoneAlt,faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
            <div className='footer p-3 lg:p-0 md:p-0 grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 mt-10'>
            
                <div className="footer-logo" >
                    <img src={Logo}  alt="" width="200" height="100" className="ml-20 mt-3"/>
                </div>
                <div className='mt-3  text-left'>
                    <h1 className="text-center text-white text-6x1 font-bold md:text-lg ">ABOUT US</h1>
                    <p className='text-gray-400' >WE ARE ONE OF THE MOST AWARDED AND LARGEST FITNESS CENTRES.WE HAVE HIGHLY EQUIPED GYM AND ALSO SHOP WITH WIDE RANGE OF PRODUCTS</p>
                    <ul className="text-white">
                        <li className="p-1"><FontAwesomeIcon icon={faMapMarkerAlt} className="logo-color mr-2"/>DHAKA,BANGLADESH</li>
                        <li className="p-1"><FontAwesomeIcon icon={faPhoneAlt} className="logo-color mr-2"/>01836062305</li>
                        <li className="p-1"><FontAwesomeIcon icon={faEnvelope} className="logo-color mr-2"/>FITNESSPROP@GMAIL.COM</li>
                    </ul>
                </div>

                <div className='mt-3 text-left'>
                    <h1 className="text-center text-white text-6x1 font-bold md:text-lg ">STAY IN TOUCH</h1>
                    <p className='text-gray-400' >TO STAY IN TOUCH WITH US AND FET INFORMED FOR LATEST UPDATES AND PROMOTIONS,JUST TYPE YOUR EMAIL BELOW</p>
                
                    <div className="rounded-full ml-10 p-1 box-border mt-8 bg-white overflow-hidden ring-red-100 w-50 mb-4 lg:mb-0 md:mb-0 flex">
                        <input type="text" className=" rounded-full px-3 focus:outline-none w-full bg-transparent" placeholder="Your Email" />
                        <button className="text-sm bg-red-600 py-1 px-2 rounded-full text-white poppins ring-red-300 focus:ring-red-4 transition duration-300 hover:scale-105 transform"> <FontAwesomeIcon icon={faLocationArrow} className="text-2xl"/></button>
                    </div>
                </div>
            </div>
            <div className="bg-black ">
                <p className="text-gray-400 P-3">Copyright By <span className="logo-color pl-5 pr-5 P-3">© FITNESSPRO 2021</span>All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;