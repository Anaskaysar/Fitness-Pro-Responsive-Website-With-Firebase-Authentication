import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useBlogs from '../../hooks/useBlogs';


const SingleBlog = ()=> {
    
    const {blogId}=useParams();
    const [blogs]=useBlogs();
    const[singleBlog,setSingleBlog]=useState({});


    useEffect(() => {
        blogs.forEach(elem => {
            if (elem.id === blogId) {
                setSingleBlog(elem);
            }
        })
    }, [blogId,blogs]);


    const {title,description,image}=singleBlog;
    console.log(singleBlog);


    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 m-20 justify-items-center">
                <div>
                    <img src={image}  alt="" />
                </div>
                <div className="flex flex-col items-center space-y-2 mt-20">
                    <h1 className="text-gray-900 font-extrabold poppins text-lg">{title}</h1>
                    <p className="text-gray-500 poppins text-left m-10">{description}</p>      
                </div>
        </div>
    )
}

export default SingleBlog;