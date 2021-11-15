import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../../images/Logo.png';
import useAuth from '../../../hooks/useAuth'

const Signup = () => {


    const { signUpUsingEmail ,error} = useAuth();
    const [userName, setuserName] = useState('');
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('');
    
    const handleUserName = e => {
        setuserName(e.target.value);
    }
    
    const handleEmailChange = e => {
        setemail(e.target.value);
    }
    
    const handlePassChange = e => {
        setpass(e.target.value);
    }
    
    const handleSignUp = e => {
        e.preventDefault();
        signUpUsingEmail(email, pass, userName);
    }


    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={handleSignUp} className="w-96 mt-6 p-4 rounded-lg shadow-lg">
                    <img src={logo} alt="" /> 
                    <p className="p-3 font-bold text-2xl">Sign Up Here</p>
                    
                    <div className="flex flex-col space-y-6">
                        
                        <input type="name" onBlur={handleUserName}     className="w-full px-4 py-3 rounded-lg   glass transition duration-300 border border-gray-300 focus:shadow-xl" placeholder="Your Name" required  />

                        <input type="email" onBlur={handleEmailChange}     className="w-full px-4 py-3 rounded-lg   glass transition duration-300 border border-gray-300 focus:shadow-xl" placeholder="Your Email" required  />
                        
                        <input type="password" onBlur={handlePassChange}    className="w-full px-4 py-3 rounded-lg glass transition duration-300 border border-gray-300 focus:shadow-xl" placeholder="Password" required  />
                        <div className='text-red-600'>
                            {error}
                        </div>
                        <input type="submit" value="Sign up" className=" bg-red-500 py-2 text-white  mt-6 rounded-lg poppins" required/>
                    </div>
                    
                    <Link to="/signin">
                        <p className="text-base text-primary text-center my-6 hover:underline">Want To Sign In?</p>
                    </Link>   
                </form>
        </div>
    );
};

export default Signup;