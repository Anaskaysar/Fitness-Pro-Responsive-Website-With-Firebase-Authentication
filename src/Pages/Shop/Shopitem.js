import React from 'react';
import { useHistory } from 'react-router';
import './shop.css'

const Shopitem = (props) => {
    const {id,title,description,img}=props.item;

    let history = useHistory();
    //ShopItem info click
    const clicked = (id) => {
        history.push(`/shop/item/${id}`);
    }
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
  
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={img} alt="" />            
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{title}</h1>
                <p className="text-gray-500 poppins text-sm text-justify">{description.slice(0,100)}</p>        
                <button className="buy-btn" onClick={() => clicked(id)}>Buy Now</button>
            </div>
        </div>
    );
};
export default Shopitem;