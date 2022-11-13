import React from 'react';
import { AiFillYoutube, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-full flex p-4 justify-between items-center'>
      <div className='flex'>
        <button className='w-10 h-10 flex justify-center rounded-full items-center hover:bg-lightGray'>
          <AiOutlineMenu className='text-xl' />
        </button>
        <Link
          to='/'
          title='YouTube 홈'
          className='flex items-center justify-center ml-2 cursor-pointer'
        >
          <AiFillYoutube className='text-2xl text-logo' />
          <h1 className='text-xl font-bold'>YouTube</h1>
        </Link>
      </div>

      <form className='w-full flex justify-center'>
        <input
          className='w-7/12 max-w-md p-2 pl-3 text-gray-500 outline-none border-solid border border-r-0 border-gray-400 rounded-l-3xl'
          type='text'
          placeholder='검색'
        />
        <button className='w-16 flex justify-center items-center bg-search border-solid border border-gray-400 rounded-r-3xl hover:bg-lightGray'>
          <AiOutlineSearch className='text-2xl' />
        </button>
      </form>
      <div className='flex justify-end'>
        <img
          src='https://avatars.githubusercontent.com/u/93126884?v=4'
          className='w-8 h-8 mx-3 rounded-full cursor-pointer'
          alt='아바타 이미지'
        />
      </div>
    </header>
  );
}
