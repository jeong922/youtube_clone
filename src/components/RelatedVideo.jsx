import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { formatAgo, replaceString } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function RelatedVideo({ id, channelTitle, isMore }) {
  const navigate = useNavigate();
  const { youtube } = useYoutubeApi();
  const { data } = useQuery(
    ['search', channelTitle],
    () => youtube.search(channelTitle),
    {
      staleTime: 1000 * 60 * 1,
    }
  );
  return (
    <>
      {data && (
        <>
          <h2 className='inline-block px-3 py-2 mb-2 rounded-lg bg-lightGray dark:bg-darkModeGray'>
            관련된 콘텐츠
          </h2>
          {data &&
            data.map((video) => (
              <div
                onClick={() => {
                  navigate(`/watch?v=${video.id}`, { state: video });
                  isMore(false);
                }}
                className={`flex h-24 mb-2 cursor-pointer p-1 rounded-md ${
                  video.id === id && 'dark:bg-darkModeGray bg-lightGray'
                }`}
                key={video.id}
              >
                <img
                  className='mr-2 rounded-xl'
                  src={video.snippet.thumbnails.medium.url}
                  alt=''
                />
                <div className='flex flex-col'>
                  <h3 className='mb-1 text-sm font-semibold break-all line-clamp-2'>
                    {replaceString(video.snippet.title)}
                  </h3>
                  <span className='text-xs opacity-80'>
                    {video.snippet.channelTitle}
                  </span>
                  <span className='text-xs opacity-80'>
                    {formatAgo(video.snippet.publishedAt, 'ko')}
                  </span>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
}
