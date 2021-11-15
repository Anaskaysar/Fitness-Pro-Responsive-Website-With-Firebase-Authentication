import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import Blog from './Blog';

const Blogs = () => {
    const [blogs]=useBlogs();
        
        return (
            <>
             <div className="m-10">
                <div className="mt-20">
                    <h1 className="text-black font-bold text-4xl">OUR <span className="logo-color"> BLOGS</span></h1>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {
                        blogs.map(blog=> <Blog blog={blog} key={blog.id}/> )
                    }
                </div>
             </div>
            </>
        )
};

export default Blogs;