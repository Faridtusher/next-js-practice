import getAllPosts from '@/lib/getAllPosts';
import { Ultra } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const postsPage = async () => {

   const posts = await getAllPosts();
   return (
      <div className='mt-10'>

         {
            posts.map(post => 
            // eslint-disable-next-line react/jsx-key
             <li key={post.id}>
                  <Link href={`/posts/${post.id}`}>  {post.title} </Link>
            </li>

            )
         }
      </div>
   );
};

export default postsPage;