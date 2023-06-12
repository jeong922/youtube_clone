import React from 'react';

export default function Loading() {
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white dark:bg-bgBlack '>
      <div className='relative w-16 h-16 border-4 border-black border-solid rounded-full opacity-10 '></div>
      <div className='absolute w-16 h-16 border-t-4 border-b-4 border-l-4 border-r-4 border-white border-solid rounded-full border-l-transparent border-r-transparent border-t-white opacity-70 animate-spin'></div>
    </div>
  );
}
