import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.png';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const {signInUsingGoogle}=useAuth();

    const { signInUsingEmail} = useAuth();

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    const handleEmailChange = e => {
        setemail(e.target.value);
    }
    const handlePassChange = e => {
        setpass(e.target.value);
    }
    //handle signin
    const handleSignIn = e => {
        e.preventDefault();
        signInUsingEmail(email, pass);
    }

 
    return (
        <div className="">
            <div className=" flex flex-col justify-center items-center h-screen">
                 <img src={logo} alt="" /> 
                <p className="p-3 font-bold text-2xl">Log In Here</p>

                <form className="w-96 mt-6 p-4 rounded-lg shadow-lg">
                    <div className="flex flex-col space-y-6">
                        
                        <input type="email" onBlur={handleEmailChange} className="w-full px-4 py-3 rounded-lg   glass transition duration-300 border border-gray-300 focus:shadow-xl" placeholder="Your Email"  />
                       
                        <input type="password" onBlur={handlePassChange} className="w-full px-4 py-3 rounded-lg glass transition duration-300 border border-gray-300 focus:shadow-xl" placeholder="Password"  />

                        <button onSubmit={handleSignIn} className=" bg-red-500 py-2 text-white  mt-6 rounded-lg poppins">Sign In </button>
     
                    </div>
                    
                    <Link to="/signup">
                        <p className="text-base text-primary text-center my-6 hover:underline">Need an account ?</p>
                    </Link>   
                </form>
                <div className="border-t w-96 p-4 rounded-lg "> 
                        <button className=" bg-white-500 py-2 text-red-500 rounded-lg poppins hover:underline" onClick={signInUsingGoogle}>                  
                        <FontAwesomeIcon icon={faGoogle} className="text-green-500 text-2xl mt-1"  />  Sign In With Google 
                        </button>
                </div> 
            </div>
        </div>

    );
};

export default Login;