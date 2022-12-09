import React, { useEffect } from 'react';
import Videos from '../components/Videos';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Home() {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(['videos'], () =>
    youtube.mostPopular()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-5/6 pt-20 mx-auto sm:px-2 max-w-[2200px]'>
      <Videos isLoading={isLoading} error={error} data={data} type='grid' />
    </div>
  );
}
