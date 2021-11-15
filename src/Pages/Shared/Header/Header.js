import React from 'react';
import './Header.css';


const Header = () => {

    return (
        <div id="main" className='header'>
            
            <div className="pr-heading">
                <h2>MEMBERSHIP FROM <span> $9 </span>ONLY</h2>
                <h1><span>Fitness</span>With US</h1>
                <p className="details">Build Your Body And Fitness With Professional Trainers</p>
                <div className='pr-btns'>
                    <button className='pr-btn mr-3'>Join Us Today</button>         
                </div>
            </div>
       </div>

    );
};

export default Header;