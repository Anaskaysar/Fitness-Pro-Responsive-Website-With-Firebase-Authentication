import React from 'react';
import useShop from '../../hooks/useShop';
import Shopitem from './Shopitem';

const Shop =   () => {
    const [items]=useShop([]);
        return (
            <>
             <div className="m-10">
                <div className="mt-20">
                    <h1 className="text-black font-bold text-4xl">OUR <span className="logo-color"> PRODUCTS</span></h1>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {
                        items.map(item=> <Shopitem item={item} key={item.id}/> )
                    }
                </div>
             </div>
            </>
        )
};

export default Shop;