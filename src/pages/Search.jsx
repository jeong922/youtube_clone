import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Videos from '../components/Videos';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Search() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(['search', keyword], () =>
    youtube.search(keyword)
  );
  return (
    <div className='w-5/6 max-w-6xl pt-20 mx-auto'>
      <Videos isLoading={isLoading} error={error} data={data} from='search' />
    </div>
  );
}
