import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDarkMode } from '../context/DarkModeContext';

export default function ModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className='fixed flex items-center justify-center text-xl text-yellow-500 duration-300 ease-in-out transform rounded-full right-8 w-11 h-11 bottom-8 hover:scale-125'
    >
      {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
