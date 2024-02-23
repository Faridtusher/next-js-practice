import getUserDetails from '@/lib/getUserDetails';
import React from 'react';


export async function generateMetadata ({params}) {
   const {id} = params;
   const user = await getUserDetails(id);

   return{
      title: user.name,
      description: user.website,
   }
}

const userPage = async ({params}) => {
   const {id} = params;
   const user = await getUserDetails(id)
   return (
      <div className='mt-10'>
        <h1>Name : {user.name}</h1>
        <h1>Email : {user.email}</h1>
        <h1>Phone : {user.phone}</h1>
        <h1>User Website : {user.website}</h1>
         <p>Address : {user.address.street} , {user.address.zipcode} , {user.address.city}.</p>
        
      </div>
   );
};

export default userPage;