import React, { useState } from 'react';
import { formatAgo, replaceString } from '../util/date';
import ChannelInfo from './ChannelInfo';
import { useNavigate } from 'react-router-dom';

export default function Video({ video, type }) {
  const [showVideo, setShowVideo] = useState(false);
  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    channelId,
    description,
  } = video.snippet;
  const navigate = useNavigate();
  const handleMouseOver = () => setShowVideo(true);
  const handleMouseLeave = () => setShowVideo(false);
  console.log(showVideo);
  return (
    <li
      className={`${
        type === 'list'
          ? 'flex flex-col sm:flex-col md:flex-row'
          : 'px-2 pt-2 cursor-pointer hover:scale-110 duration-300 ease-in-out transform hover:z-20 hover:shadow-lg rounded-xl  dark:hover:bg-darkModeGray'
      } cursor-pointer relative`}
      onClick={() => {
        navigate(`/watch?v=${video.id}`);
      }}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`${type === 'list' ? 'mr-3 mb-3' : 'w-full '} rounded-xl`}
        src={thumbnails.medium.url}
        alt={title}
      />
      {showVideo && (
        <iframe
          className={`${
            type === 'list'
              ? 'mr-3 mb-3 rounded-xl w-full sm:w-full md:w-[320px] absolute'
              : 'w-full'
          } absolute aspect-video top-0 left-0`}
          type='text/html'
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
          title='youtube video player'
          frameBorder='0'
          allow='autoplay'
        ></iframe>
      )}
      <div className='my-2'>
        {type !== 'list' ? (
          <div className='flex justify-between'>
            <div className='mr-2 w-9 h-9'>
              {channelId && <ChannelInfo id={channelId} />}
            </div>
            <div className='flex flex-col w-[87%]'>
              <h3 className='font-semibold line-clamp-2'>{title}</h3>
              <span className='text-sm opacity-80'>{channelTitle}</span>
              <span className='text-sm opacity-80'>
                {formatAgo(publishedAt, 'ko')}
              </span>
            </div>
          </div>
        ) : (
          <div className='flex flex-col'>
            <h3 className='font-semibold line-clamp-2'>
              {replaceString(title)}
            </h3>
            <div className='flex flex-col'>
              <span className='mb-3 text-sm opacity-80'>
                {formatAgo(publishedAt, 'ko')}
              </span>
              <div className='flex items-center mb-3 '>
                <div className='w-5 h-5 mr-2'>
                  {channelId && <ChannelInfo id={channelId} />}
                </div>
                <span className='text-sm opacity-80'>{channelTitle}</span>
              </div>
              <span className='text-sm line-clamp-2 opacity-80'>
                {description}
              </span>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}
