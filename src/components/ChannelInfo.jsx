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
          className='w-full h-full rounded-full bg-lightGray'
          src={data}
          alt=''
        />
      )}
    </>
  );
}
