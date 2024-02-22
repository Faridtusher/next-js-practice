"use client"
import React from 'react';

const Button = () => {
   return (
      <div>
         <button onClick={() => console.log('I click here')} className='mt-10 bg-green-500 text-white px-6 py-2 rounded'>Click here</button>
      </div>
   );
};

export default Button;