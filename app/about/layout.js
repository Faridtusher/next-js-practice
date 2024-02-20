import Link from 'next/link';
import React from 'react';

const aboutLayout = ({children}) => {
   return (
      <div>
         <nav className='mt-10'>
            <ul className='flex gap-10'>
               <Link href='/about/mission' > <li>Mission</li> </Link>
               <Link href='/about/vision' > <li>Vision</li> </Link>
            </ul>
         </nav>

         {children}
         
      </div>
   );
};

export default aboutLayout;