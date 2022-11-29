import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Videos from '../components/Videos';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Search() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(
    ['search', keyword],
    () => youtube.search(keyword),
    { staleTime: 1000 * 60 * 1 }
  );
  return (
    <div className='w-5/6 max-w-6xl pt-20 pb-5 mx-auto'>
      <Videos isLoading={isLoading} error={error} data={data} type='list' />
    </div>
  );
}
