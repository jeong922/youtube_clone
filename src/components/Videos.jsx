import React from 'react';
import Error from './Error';
import Loading from './Loading';
import Video from './Video';

export default function Videos({ isLoading, error, data, type }) {
  return (
    <>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <ul
          className={`${
            type === 'list'
              ? 'flex flex-col'
              : 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4'
          } lg:pl-36 sm:pl-7 pt-2 pb-6`}
        >
          {data.map((video) => (
            <Video key={video.id} video={video} type={type} />
          ))}
        </ul>
      )}
    </>
  );
}
