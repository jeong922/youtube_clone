import React from 'react';

export default function Error({ error }) {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1 className='text-xl font-bold'>{error.message}</h1>
    </div>
  );
}
