import { useParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import Videos from './Videos';
import { useEffect, useRef } from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function SearchVideos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const pageEnd = useRef(null);
  const { data, error, status, fetchNextPage } = useInfiniteQuery(
    ['search', keyword],
    ({ pageParam }) => youtube.search({ keyword, pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 2) {
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

  return (
    <div className='pt-2 pb-6 lg:pl-36 sm:pl-7'>
      <Videos
        isLoading={status === 'loading'}
        error={error}
        data={data}
        type='list'
      />
      <div ref={pageEnd}></div>
    </div>
  );
}
