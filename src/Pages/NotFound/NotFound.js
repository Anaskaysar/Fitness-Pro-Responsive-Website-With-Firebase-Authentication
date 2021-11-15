import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404page1.jpg';
import './Notfound.css'
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notFound}  alt="" />
            <Link to="/">
            <button className="notFound-btn m-3 text-3xl">
                <FontAwesomeIcon icon={faBackward} className="text-3xl pr-3"/> Go Back To Home</button> 
            </Link>
        </div>
    );
};

export default NotFound;