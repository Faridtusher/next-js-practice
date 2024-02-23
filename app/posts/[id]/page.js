import getPostDetails from '@/lib/getPostDetails';
import React from 'react';

const page = async ({params}) => {
   const {id} = params
   const post = await getPostDetails(id);
   return (
      <div className='mt-10'>
         <h1 className='mb-5 text-xl'>Post title: {post.title}</h1>
         <p>Description : {post.body}</p>
      </div>
   );
};

export default page;