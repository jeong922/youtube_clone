import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideo from '../components/RelatedVideo';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Comment from '../components/Comment';

export default function VideoDetail() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('v');
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(
    ['detail', id],
    () => youtube.detail(id),
    { staleTime: 1000 * 60 * 1 }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {data && (
        <div className='flex flex-col w-full p-10 pt-20 mx-auto max-w-[120rem] sm:flex-col md:flex-col lg:flex-row'>
          <section className='top-0 left-0 flex flex-col w-full max-w-screen-xl pb-5 mr-4'>
            <iframe
              className='w-full aspect-video'
              type='text/html'
              src={`https://www.youtube.com/embed/${data.id}?autoplay=1&mute=0`}
              title='youtube video player'
              frameBorder='0'
              allowFullScreen
              allow='autoplay'
            ></iframe>
            <div className='mt-3'>
              <div>
                {data.snippet.tags &&
                  data.snippet.tags
                    .slice(0, 6)
                    .map((tag) => (
                      <span
                        className='text-sm text-tag'
                        key={tag}
                      >{`#${tag}`}</span>
                    ))}
              </div>
              <h2 className='mb-3 text-xl font-semibold'>
                {data.snippet.title}
              </h2>
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 mr-2'>
                  <ChannelInfo id={data.snippet.channelId} />
                </div>
                <span className='font-semibold'>
                  {data.snippet.channelTitle}
                </span>
              </div>
              <div className='p-3 rounded-lg bg-lightGray dark:bg-darkModeGray'>
                <span className='font-semibold'>
                  {data.snippet.publishedAt.slice(0, 10).replaceAll('-', '.')}
                </span>
                <pre className='text-sm whitespace-pre-wrap'>
                  {data.snippet.description}
                </pre>
              </div>
            </div>
            <div className='mt-4'>
              <Comment id={id} />
            </div>
          </section>

          <section className='md:w-full lg:w-2/5'>
            <RelatedVideo id={data.id} />
          </section>
        </div>
      )}
    </>
  );
}
