import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { SidebarProvider } from './context/SidebarContext';
import Sidebar from './components/SideNav';
import SideMenu from './components/SideMenu';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <DarkModeProvider>
        <div className='bg-white dark:bg-bgBlack dark:text-white'>
          <SidebarProvider>
            <Header />
            <div className='flex'>
              <Sidebar />
              <SideMenu />
              <YoutubeApiProvider>
                <QueryClientProvider client={queryClient}>
                  <Outlet />
                </QueryClientProvider>
              </YoutubeApiProvider>
            </div>
          </SidebarProvider>
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
