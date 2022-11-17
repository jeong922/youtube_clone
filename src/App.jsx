import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import ModeButton from './components/ModeButton';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <DarkModeProvider>
        <div className='bg-white dark:bg-bgBlack dark:text-white '>
          <Header />
          <YoutubeApiProvider>
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </YoutubeApiProvider>
          <ModeButton />
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
