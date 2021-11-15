import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Service.css";
import {useHistory } from 'react-router-dom';


const Service = (props) => {

    const {id,title,image,details}=props.service;
    let history = useHistory();
    //service info click
    const clicked = (id) => {
        
        history.push(`/service/details/${id}`);
    }

    return (
        <div className="bg-white border border-gray-100 hover:shadow-xl hover:scale-105 rounded-lg relative ml-10 mb-5 mr-10">
            <div  className='grid grid-cols-2'>
                <div>
                     <img className="h-100 w-auto bg-cover hover:scale-105" src={image} alt="" />
                </div> 
                <div className="flex flex-col items-center my-3 space-y-2 mt-20">
                    <h1 className="text-gray-900 font-extrabold poppins text-lg">{title}</h1>
                    <p className="text-gray-500 poppins">{details.slice(0,50)}</p>      
                    <button className="service-btn mt-5"  onClick={() => clicked(id)} > <FontAwesomeIcon icon={faInfoCircle} className="pr-2 text-3xl" />Details</button>
                </div>
            </div>
 
        
        </div>
    );
};

export default Service;