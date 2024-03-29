import React, { useEffect, useRef } from 'react';
import { formatAgo, replaceString } from '../util/date';
import ChannelInfo from './ChannelInfo';
import { useNavigate } from 'react-router-dom';

export default function Video({ video, type }) {
  const imgRef = useRef(null);
  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    channelId,
    description,
  } = video.snippet;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/watch?v=${video.id}`);
  };

  useEffect(() => {
    const options = {};
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {video && (
        <li
          className={`${
            type === 'list'
              ? 'flex flex-col sm:flex-col md:flex-row'
              : 'px-2 pt-2 cursor-pointer duration-300 ease-in-out transform hover:z-10 hover:shadow-lg rounded-xl dark:hover:bg-darkModeGray'
          } cursor-pointer relative`}
          onClick={onClick}
        >
          <img
            ref={imgRef}
            className={`${
              type === 'list' ? 'mr-3 mb-3 w-full md:max-w-sm' : 'w-full '
            } rounded-xl bg-lightGray dark:bg-darkModeGray aspect-video object-cover`}
            data-src={thumbnails.high.url}
            alt={title}
          />

          <div className='my-2'>
            {type !== 'list' ? (
              <div className='flex justify-between'>
                <div className='mr-2 w-9 h-9 shrink-0'>
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
      )}
    </>
  );
}
