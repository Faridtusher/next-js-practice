import getUsersData from '@/lib/getUsersData';
import Link from 'next/link';
import React from 'react';

const page = async () => {

   const users = await getUsersData();
   console.log(users)

   return (
      <div className='mt-10'>
         <p>This is the users page..</p>

         {
            users.map(user => 

               <li key={user.id}>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
               </li>

               )
         }
      </div>
   );
};

export default page;