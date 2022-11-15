import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideo from '../components/RelatedVideo';

export default function VideoDetail() {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.id]);
  return (
    <>
      <div className='flex flex-col p-10 pt-20 mx-auto max-w-fit sm:flex-col md:flex-col lg:flex-row'>
        <section className='flex flex-col w-full max-w-screen-xl pb-5 mr-4'>
          <iframe
            className='w-full pb-4 aspect-video'
            type='text/html'
            src={`https://www.youtube.com/embed/${state.id}?autoplay=1&mute=0`}
            title='youtube video player'
            frameBorder='0'
            allowFullScreen
            allow='autoplay'
          ></iframe>
          <div>
            <div>
              {state.snippet.tags.slice(0, 6).map((tag) => (
                <span className='text-sm text-tag' key={tag}>{`#${tag}`}</span>
              ))}
            </div>
            <h2 className='mb-3 text-xl font-semibold'>
              {state.snippet.title}
            </h2>
            <div className='flex items-center mb-3'>
              <ChannelInfo id={state.snippet.channelId} />
              <span className='font-semibold'>
                {state.snippet.channelTitle}
              </span>
            </div>
            <div className='p-3 rounded-lg bg-lightGray'>
              <span className='font-semibold'>
                {state.snippet.publishedAt.slice(0, 10).replaceAll('-', '.')}
              </span>
              <pre className='mt-4 text-sm whitespace-pre-wrap'>
                {state.snippet.description}
              </pre>
            </div>
          </div>
          <div></div>
        </section>

        <section className='md:w-full lg:w-2/5'>
          <RelatedVideo id={state.id} />
        </section>
      </div>
    </>
  );
}
