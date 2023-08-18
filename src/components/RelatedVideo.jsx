import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { formatAgo, replaceString } from '../util/date';
import { useNavigate } from 'react-router-dom';
import SkeletonUIList from './SkeletonUIList';

export default function RelatedVideo({ id, channelTitle, isMore }) {
  const navigate = useNavigate();
  const { youtube } = useYoutubeApi();
  const { data, isLoading } = useQuery(
    ['relatedVideo', channelTitle],
    () => youtube.relatedVideo(channelTitle),
    {
      staleTime: 1000 * 60 * 1,
    }
  );

  return (
    <>
      <h2 className='inline-block px-3 py-2 mb-2 rounded-lg bg-lightGray dark:bg-darkModeGray'>
        관련된 콘텐츠
      </h2>
      {isLoading && <SkeletonUIList length={25} type='list' />}
      {data &&
        [
          ...data.filter((v) => v.id === id),
          ...data.filter((v) => v.id !== id),
        ].map((video) => (
          <div
            onClick={() => {
              navigate(`/watch?v=${video.id}`, { state: video });
              isMore(false);
            }}
            className={`flex h-24 mb-2 cursor-pointer p-1 rounded-md ${
              video.id === id && 'dark:bg-darkModeGray bg-lightGray/40'
            }`}
            key={video.id}
          >
            <img
              className='w-40 mr-2 shrink-0 rounded-xl bg-lightGray dark:bg-darkModeGray aspect-video'
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
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
  );
}
