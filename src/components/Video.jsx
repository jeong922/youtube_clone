import React from 'react';
import { formatAgo } from '../util/date';
import ChannelInfo from './ChannelInfo';
import { useNavigate } from 'react-router-dom';

export default function Video({ video, from }) {
  const { thumbnails, title, channelTitle, publishedAt, channelId } =
    video.snippet;
  const navigate = useNavigate();
  return (
    <li
      className={`${
        from === 'search'
          ? 'flex flex-col sm:flex-col md:flex-col lg:flex-row'
          : ''
      }`}
      onClick={() => {
        navigate(`watch/${video.id}`, { state: video });
      }}
    >
      <img
        className={`${from === 'search' ? 'mr-3 mb-3' : 'w-full '} rounded-xl`}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className='my-2'>
        <div className='flex'>
          {channelId && <ChannelInfo id={channelId} />}
          <div className='flex flex-col'>
            <h3 className='font-semibold line-clamp-2'>{title}</h3>
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
