import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineYoutube, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';

export default function SideMenu() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/watch' && (
        <>
          <section className='sticky top-[4.5rem] w-20 h-screen bg-white dark:bg-bgBlack sm:block lg:w-56 scrollbar-thin overflow-y-scroll hidden'>
            <ul className='flex flex-col p-2 text-lg'>
              <Link
                to='/'
                title='홈'
                className={`${
                  location.pathname === '/' &&
                  'dark:bg-darkModeGray bg-lightGray'
                } flex flex-col items-center justify-center px-3 mb-2 rounded-lg cursor-pointer lg:px-4 h-14 hover:bg-lightGray dark:hover:bg-darkModeGray lg:flex-row lg:justify-start`}
              >
                {location.pathname === '/' ? (
                  <AiFillHome className='lg:mr-2' />
                ) : (
                  <AiOutlineHome className='lg:mr-2' />
                )}
                <span className='mt-1 text-xs lg:text-base'>홈</span>
              </Link>
              <li className='flex flex-col items-center justify-center px-3 mb-2 rounded-lg lg:px-4 hover:bg-lightGray h-14 dark:hover:bg-darkModeGray lg:flex-row lg:justify-start'>
                <svg
                  className='h-5 dark:fill-white lg:mr-2'
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <g height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z'></path>
                  </g>
                </svg>
                <span className='mt-1 text-xs lg:text-base'>Shorts</span>
              </li>
              <li className='flex flex-col items-center justify-center px-3 mb-2 rounded-lg hover:bg-lightGray h-14 dark:hover:bg-darkModeGray lg:flex-row lg:justify-start lg:px-4'>
                <MdOutlineSubscriptions className='lg:mr-2' />
                <span className='mt-1 text-xs lg:text-base'>구독</span>
              </li>
              <li className='flex flex-col items-center justify-center px-3 mb-2 rounded-lg hover:bg-lightGray h-14 dark:hover:bg-darkModeGray lg:flex-row lg:justify-start lg:px-4'>
                <AiOutlineYoutube className='lg:mr-2' />
                <span className='mt-1 text-xs lg:text-base'>Originals</span>
              </li>
              <li className='flex flex-col items-center justify-center px-3 mb-2 rounded-lg hover:bg-lightGray h-14 dark:hover:bg-darkModeGray lg:flex-row lg:justify-start lg:px-4'>
                <svg
                  className='h-5 dark:fill-white lg:mr-2'
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <path d='M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z'></path>
                </svg>
                <span className='mt-1 text-xs text-center lg:text-base'>
                  YouTube Music
                </span>
              </li>

              <li className='flex flex-col items-center justify-center px-3 mb-2 rounded-lg lg:px-4 hover:bg-lightGray h-14 dark:hover:bg-darkModeGray lg:flex-row lg:justify-start'>
                <svg
                  className='h-5 dark:fill-white lg:mr-2'
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <path d='M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z'></path>
                </svg>
                <span className='mt-1 text-xs lg:text-base'>보관함</span>
              </li>

              <li className='flex flex-col items-center justify-center px-3 mb-2 rounded-lg lg:px-4 hover:bg-lightGray h-14 dark:hover:bg-darkModeGray lg:flex-row lg:justify-start'>
                <HiDownload className='lg:mr-2' />
                <span className='mt-1 text-xs text-center lg:text-base'>
                  오프라인 저장
                </span>
              </li>
            </ul>
          </section>
        </>
      )}
    </>
  );
}
