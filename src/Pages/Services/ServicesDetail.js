import React from 'react';
import {useParams } from 'react-router';
import useService from '../../hooks/useService';

import { useEffect, useState } from 'react';


const ServicesDetail = () => {
    
    const {serviceId}=useParams();
    
    const[services]=useService();
    const[service,setService]=useState({});

    useEffect(() => {
        services.forEach(elem => {
            if (elem.id === serviceId) {
                setService(elem);
            }
        })
    }, [services, serviceId]);

    const {title,details,image}=service;
    console.log(service);


    return (
        <div className="grid lg:grid-cols-2 justify-items-center md:grid-cols-2 m-20">
                <div className="col-4 ">
                     <img className="image" src={image} alt="" />
                </div> 
                <div className="flex flex-col items-center space-y-2 mt-20">
                    <h1 className="text-gray-900 font-extrabold poppins text-lg">{title}</h1>
                    <p className="text-gray-500 poppins text-left m-10" >{details}</p>      
                </div>
        </div>
    )
}

export default ServicesDetail;