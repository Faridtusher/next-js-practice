import Link from 'next/link';
import React from 'react';


const layout = ({children}) => {
   return (
      <div>
         <nav className='mt-10'>
            <ul className='flex gap-10'>
               <li><Link href='/contact/country'>Country</Link></li>
               <li><Link href='/contact/capital'>Capital</Link></li>
            </ul>
         </nav>
         {children}
      </div>
   );
};

export default layout;