import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useShop from '../../hooks/useShop';


const SingleShopItem = ()=> {
    
    const {itemId}=useParams();
    const [items]=useShop();
    const[singleItem,setSingleItem]=useState({});

    useEffect(() => {
        items.forEach(elem => {
            if (elem.id === itemId) {
                setSingleItem(elem);
            }
        })
    }, [itemId,items]);

    const {name,description,price,img}=singleItem;
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-1 m-20 justify-items-center">
                <div>
                    <img src={img}  alt="" />
                </div>
                <div className="flex flex-col items-center space-y-2 mt-20">
                    <h1 className="text-gray-900 font-extrabold poppins text-lg">{name}</h1>
                    <h3 className="text-gray-500  poppins text-lg">Price:{price}</h3>
                    <p className="text-gray-500 poppins text-left m-10">{description}</p>  
                    <button className="buy-btn" >Buy Now</button>    
                </div>
        </div>
    )
}

export default SingleShopItem;