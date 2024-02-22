import React from 'react';

const blogPage = ({params}) => {
   const { id } = params 
   return (
      <div className='mt-10'>
         The blog id is-{id}
      </div>
   );
};

export default blogPage;