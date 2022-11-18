import React, { useEffect, useState } from 'react';
import { AiFillYoutube, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/result/${value}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(keyword || '');
  }, [keyword]);

  return (
    <>
      <header className='fixed z-10 flex items-center justify-between w-full p-4 text-black bg-white dark:bg-bgBlack dark:text-white h-[74px]'>
        <div className='flex'>
          <button className='flex items-center justify-center w-10 h-10 rounded-full hover:bg-lightGray dark:hover:bg-darkModeGray'>
            <AiOutlineMenu className='text-xl' />
          </button>
          <Link
            to='/'
            title='YouTube 홈'
            className='flex items-center justify-center ml-2 cursor-pointer'
          >
            <AiFillYoutube className='text-3xl text-logo' />
            <h1 className='text-2xl font-bold font-logoFont'>YouTube</h1>
          </Link>
        </div>

        <form className='flex justify-center w-full' onSubmit={handleSubmit}>
          <input
            className='w-7/12 max-w-md p-2 pl-3 text-gray-600 bg-transparent border border-r-0 border-gray-400 border-solid outline-none rounded-l-3xl dark:text-white dark:opacity-50'
            type='text'
            placeholder='검색'
            value={value}
            onChange={handleChange}
          />
          <button className='flex items-center justify-center w-16 border border-gray-400 border-solid dark:opacity-50 dark:bg-darkModeGray bg-search rounded-r-3xl hover:bg-lightGray'>
            <AiOutlineSearch className='text-2xl text-zinc-600 dark:text-zinc-400' />
          </button>
        </form>

        <div className='flex justify-end'>
          <img
            src='https://avatars.githubusercontent.com/u/93126884?v=4'
            className='w-8 h-8 mx-3 rounded-full cursor-pointer'
            alt='아바타 이미지'
            onClick={() =>
              window.open('https://github.com/jeong922/youtube_clone', '_blank')
            }
          />
        </div>
      </header>
    </>
  );
}
