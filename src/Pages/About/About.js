import React from 'react';
import about from "../../images/About us.jpg"


const About = () => {
    return (
        <main className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-20 justify-items-center" >
            <div >
                <img src={about} className="ml-8" alt="" />
            </div>
      
            <div>
                    
                    <h1 className='text-5xl font-bold p-2'>ABOUT <span className='logo-color'>FITNESSPRO</span>
                    </h1>

                    <h3 className="text-justify ml-20 mr-20 text-gray-400">            
                        Gym 24 provides a 24/7 Fitness facility to residents of Martinsville and Henry County, as well as surrounding areas to help people reach and maintain their goals. We combine different types of fitness equipment to meet different fitness needs and levels. 
                    </h3>
                    <h3  className="text-justify ml-20 mr-20 text-gray-400">
                        At Gym 24 you’ll find all the latest strength and cardio equipment along with a energetic group exercise program that includes POUND, Zumba, Kickboxing, Bootcamp, Muscle Building and many other cardio classes. You’ll find a supportive environment with all kinds of people who are working just as hard as you to meet their goals.
                    </h3>
                    <h3  className="text-justify ml-20 mr-20 text-gray-400">
                        Our Staff, Trainers & Group exercise instructors are committed to offering our members a great fitness experience. Whether you’re a mom looking to get back into shape, a marathon runner trying to shave a few minutes off your personal best or just trying to stay healthy we would love to help you realize your potential and meet your goals!!
                    </h3>   
            </div>

   
   
        </main>
    );
};

export default About;