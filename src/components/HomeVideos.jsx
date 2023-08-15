import React, { useEffect, useRef } from 'react';
import Videos from '../components/Videos';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function HomeVideos() {
  const { youtube } = useYoutubeApi();
  const pageEnd = useRef(null);

  const { data, error, status, fetchNextPage } = useInfiniteQuery(
    ['videos'],
    ({ pageParam }) => youtube.mostPopular({ pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 5) {
          return lastPage.nextPageToken;
        } else {
          return undefined;
        }
      },
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    observer.observe(pageEnd.current);
    return () => observer.disconnect();
  }, [fetchNextPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pt-2 pb-6 lg:pl-36 sm:pl-7'>
      <Videos
        isLoading={status === 'loading'}
        error={error}
        data={data}
        type='grid'
      />
      <div ref={pageEnd}></div>
    </div>
  );
}
