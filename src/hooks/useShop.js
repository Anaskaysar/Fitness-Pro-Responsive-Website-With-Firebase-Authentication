import { useEffect, useState } from 'react';

const useShop = () => {
    const [items,setitems]=useState([]);
    useEffect(()=>{
        fetch('/fakedata/products.json')
        .then(res=>res.json())
        .then(data=> setitems(data)
        )
    },[])
    return [items,setitems]
        
};

export default useShop;