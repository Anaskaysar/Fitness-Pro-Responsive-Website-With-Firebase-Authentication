import Trainers from '../Trainers/Trainers';
import './Home.css'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Service from '../Services/Service';
import Header from '../Shared/Header/Header';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';

const Home = () => {
    const [services]=useService();

    return (
        <div>
            {/* Banner Section  */}
            <Header/>
            {/* Trainer Section Starts */}
           <div className="mt-5" >
                <h1 className="text-black font-bold text-6xl">MEET <span className="logo-color">TRAINERS</span></h1>
                <FontAwesomeIcon icon={faDumbbell} className="text-6xl text-gray-400 m-5" />
                <p className="text-gray-400 text-center ">
                    Meet our expert personal trainers. No matter what your goal is, they will
                     help you to reach it.  
                </p>
                <Trainers></Trainers>
           </div>
           {/* Trainer Section Ends */}

           {/*Sevice For Home Page */}
           <div >
                <div className="mt-20">
                    <h1 className="text-black font-bold text-4xl">OUR <span className="logo-color"> SERVICES</span></h1>
                </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
               {
                   services.slice(0,3).map(service=> <Service  service={service} key={service.id}/> )
               }
               </div>
               <div>
                   <button className="bg-black border-4 p-2 mb-4 logo-color"><Link to="/services">Find Out More</Link> </button>
               </div>
           </div>
        </div>

    );
};

export default Home;