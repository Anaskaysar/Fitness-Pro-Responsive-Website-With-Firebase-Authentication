import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Trainer = (props) => {
    const {image,name,profession,clients}=props.trainer;
    return (

        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 rounded-lg relative">
            <div  className=' grid grid-cols-2'>
                <div>
                     <img className="h-100 w-auto bg-cover transform transition duration-300 hover:scale-105" src={image} alt="" />
                </div>
                
                <div className="flex flex-col items-center my-3 space-y-2 mt-20">
                    <h1 className="text-gray-900 font-extrabold poppins text-lg">{name}</h1>
                    <h3 className="text-gray-500 font-bold poppins text-sm text-center">{profession}</h3>
                    <p className="text-gray-500 poppins text-sm text-center">Total Clients:{clients}</p>
                    <button className="trainer-btn"> <FontAwesomeIcon icon={faPlus} className="pr-2 text-3xl"/>Train With Me</button>
                </div>
            </div>      
        </div>


       
    );
};

export default Trainer;