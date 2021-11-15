import React, { useEffect, useState } from 'react';
import Trainer from './Trainer';
import './Trainer.css'

const Trainers = () => {
    const [trainers,setTrainers]=useState([]);
    useEffect(()=>{
        fetch('./fakedata/trainers.json')
        .then(res=>res.json())
        .then(data=> setTrainers(data)
        )
    },[])
        
        return (
            <>
             <div className="m-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {
                        trainers.map(trainer=> <Trainer  trainer={trainer} key={trainer.id}/> )
                    }
                </div>
             </div>
            </>
    );
};

export default Trainers;