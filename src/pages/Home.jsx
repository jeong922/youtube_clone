import React, { useEffect } from 'react';
import Videos from '../components/Videos';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useSidebar } from '../context/SidebarContext';

export default function Home() {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(['videos'], () =>
    youtube.mostPopular()
  );

  const { showSidebar, toggleShowSidebar } = useSidebar();
  useEffect(() => {
    toggleShowSidebar(!showSidebar);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-5/6 mx-auto sm:px-2 max-w-screen-2xl'>
      <Videos isLoading={isLoading} error={error} data={data} from='home' />
    </div>
  );
}
