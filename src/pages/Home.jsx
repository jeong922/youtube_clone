import React from 'react';
import Videos from '../components/Videos';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Home() {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(['videos'], () =>
    youtube.mostPopular()
  );
  return (
    <div className='p-6'>
      <Videos isLoading={isLoading} error={error} data={data} />
    </div>
  );
}
