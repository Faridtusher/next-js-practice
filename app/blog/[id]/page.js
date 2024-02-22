import { notFound } from 'next/navigation';
import React from 'react';

const blogPage = ({params}) => {
   const { id } = params ; 

   if (id >= id){
      notFound();
   }
   return (
      <div className='mt-10'>
         The blog id is-{id}
      </div>
   );
};

export default blogPage;