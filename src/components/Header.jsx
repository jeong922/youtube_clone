import React, { useEffect, useState } from 'react';
import {
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const { toggleShowSidebar } = useSidebar();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/result/${value}`);
    setShow(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(keyword || '');
  }, [keyword]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        setShow(false);
      }
      return () => {
        window.removeEventListener('resize', () => {
          if (window.innerWidth > 640) {
            setShow(false);
          }
        });
      };
    });
  }, []);

  return (
    <>
      <header className='fixed z-10 flex items-center justify-between w-full p-4 text-black bg-white dark:bg-bgBlack dark:text-white h-[4.5rem]'>
        <div className='flex'>
          <button
            onClick={toggleShowSidebar}
            className='flex items-center justify-center w-10 h-10 rounded-full hover:bg-lightGray dark:hover:bg-darkModeGray'
          >
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

        <div
          className={`${
            show
              ? 'w-[95%] absolute dark:bg-bgBlack bg-white'
              : 'w-10/12 relative'
          }  `}
        >
          <button
            onClick={() => setShow(false)}
            className={
              show
                ? 'absolute flex items-center justify-center w-10 h-10 rounded-full sm:hidden hover:bg-lightGray dark:hover:bg-darkModeGray'
                : 'hidden'
            }
          >
            <AiOutlineArrowLeft className='text-lg' />
          </button>
          <form
            className={`${
              show ? 'flex' : 'hidden'
            } justify-center w-full sm:flex`}
            onSubmit={handleSubmit}
          >
            <input
              className='w-7/12 max-w-md p-2 pl-3 text-gray-600 bg-transparent border border-r-0 border-gray-400 border-solid outline-none rounded-l-3xl dark:text-white '
              type='text'
              placeholder='검색'
              value={value}
              onChange={handleChange}
            />
            <button className='flex items-center justify-center w-16 border border-gray-400 border-solid dark:hover:bg-darkModeLightGray dark:bg-darkModeGray bg-search rounded-r-3xl hover:bg-lightGray'>
              <AiOutlineSearch className='text-2xl text-zinc-600 dark:text-zinc-400' />
            </button>
          </form>
        </div>

        <div className='flex justify-end w-[130px]'>
          <button
            onClick={() => setShow(true)}
            className='flex items-center justify-center w-8 h-8 rounded-full sm:hidden hover:bg-lightGray dark:hover:bg-darkModeGray'
          >
            <AiOutlineSearch className='text-2xl text-zinc-600 dark:text-zinc-400' />
          </button>

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
