import React from 'react';
import { formatAgo } from '../util/date';
import ChannelInfo from './ChannelInfo';

export default function Video({ video }) {
  const { thumbnails, title, channelTitle, publishedAt, channelId } =
    video.snippet;
  return (
    <li className='cursor-pointer'>
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div className='my-2'>
        <div className='flex'>
          <div className='mr-2'>
            {channelId && <ChannelInfo id={channelId} />}
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold'>{title}</h3>
            <span className='text-sm opacity-80'>{channelTitle}</span>
            <span className='text-sm opacity-80'>
              {formatAgo(publishedAt, 'ko')}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
