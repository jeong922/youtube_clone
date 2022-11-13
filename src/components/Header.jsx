import React, { useEffect, useState } from 'react';
import { AiFillYoutube, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
          <AiFillYoutube className='text-3xl text-logo' />
          <h1 className='text-2xl font-bold font-logoFont'>YouTube</h1>
        </Link>
      </div>

      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 max-w-md p-2 pl-3 text-gray-500 outline-none border-solid border border-r-0 border-gray-400 rounded-l-3xl'
          type='text'
          placeholder='검색'
          value={value}
          onChange={handleChange}
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
          onClick={() =>
            window.open('https://github.com/jeong922/youtube_clone', '_blank')
          }
        />
      </div>
    </header>
  );
}
