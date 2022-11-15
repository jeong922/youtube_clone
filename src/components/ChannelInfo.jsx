import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id }) {
  const { youtube } = useYoutubeApi();
  const { data } = useQuery(['channel', id], () => youtube.channelInfo(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {data && (
        <img
          className='w-10 h-10 mr-2 rounded-full bg-lightGray'
          src={data}
          alt=''
        />
      )}
    </>
  );
}
