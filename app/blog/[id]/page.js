import { notFound } from 'next/navigation';
import React from 'react';

export const metadata = {
   title: "Blog Page",
   description: "This is the Blog page",
};

const blogPage = ({params}) => {
   const { id } = params ; 

   if (id >= 4){
      notFound();
   }
   return (
      <div className='mt-10'>
         The blog id is-{id}
      </div>
   );
};

export default blogPage;