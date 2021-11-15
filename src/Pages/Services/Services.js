import useService from '../../hooks/useService';
import Service from './Service';



const Services = () => {
    const [services]=useService();
    return (
        <div >
                <div className="mt-20">
                    <h1 className="text-black font-bold text-6xl">All OF  <span className="logo-color">OUR SERVICES</span></h1>
                
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12">
                    {
                        services.map(service=> <Service  service={service} key={service.id}/> )
                    }
                 </div>
        </div>
        
    );
};

export default Services;