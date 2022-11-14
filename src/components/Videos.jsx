import React from 'react';
import Error from './Error';
import Loading from './Loading';
import Video from './Video';

export default function Videos({ isLoading, error, data }) {
  return (
    <>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {data.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
