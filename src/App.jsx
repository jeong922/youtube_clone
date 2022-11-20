import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider } from './context/DarkModeContext';
import ModeButton from './components/ModeButton';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow((prev) => !prev);
    console.log(show);
  };

  return (
    <>
      <DarkModeProvider>
        <div className='bg-white dark:bg-bgBlack dark:text-white '>
          <Header changeShow={changeShow} show={show} />
          <div className='flex'>
            <Sidebar show={show} />
            <YoutubeApiProvider>
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </YoutubeApiProvider>
            <ModeButton />
          </div>
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
