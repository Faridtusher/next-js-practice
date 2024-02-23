import Link from 'next/link';
import React from 'react';

export const metadata = {
   title: "Blogs Page",
   description: "This is the Blogs page",
};


const page = () => {
   const blogContent = [
      {id:'1', blogName:'blog-1', blogTitle:'This is for blog 1'},
      {id:'2', blogName:'blog-2', blogTitle:'This is for blog 2'},
      {id:'3', blogName:'blog-3', blogTitle:'This is for blog 3'},
   ]
   
   return (
      <div className='mt-10'>
         {
            blogContent.map(blog => <li
            key={blogContent.id}
            

            >  <Link href={`/blog/${blog.id}`}>{blog.blogName}</Link> </li> )
         }
      </div>
   );
};

export default page;