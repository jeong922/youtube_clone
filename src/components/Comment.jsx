import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import { formatAgo } from '../util/date';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

export default function Comment({ id }) {
  const { youtube } = useYoutubeApi();
  const { data } = useQuery(['comment', id], () => youtube.comment(id));
  console.log(data);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id} className='flex mb-5'>
            <img
              className='w-10 h-10 mr-3 rounded-full'
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt={item.snippet.topLevelComment.snippet.authorDisplayName}
            />
            <div>
              <span className='mr-2'>
                {item.snippet.topLevelComment.snippet.authorDisplayName}
              </span>
              <span className='text-sm opacity-80'>
                {formatAgo(
                  item.snippet.topLevelComment.snippet.publishedAt,
                  'ko'
                )}
              </span>
              <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
              <div className='flex items-center opacity-80'>
                <span className='flex items-center mr-2 '>
                  <FiThumbsUp className='mr-1' />
                  {item.snippet.topLevelComment.snippet.likeCount}
                </span>

                <FiThumbsDown />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
