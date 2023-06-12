import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDarkMode } from '../context/DarkModeContext';

export default function ModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className='flex items-center justify-center ml-4 text-xl text-yellow-500 rounded-full '
    >
      {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
