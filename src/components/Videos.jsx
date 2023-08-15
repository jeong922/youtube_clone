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
              : 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-y-4'
          }`}
        >
          {type === 'grid' && (
            <>
              {data?.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.items.map((video) => (
                    <Video key={video.id} video={video} type={type} />
                  ))}
                </React.Fragment>
              ))}
            </>
          )}

          {type === 'list' && (
            <>
              {data?.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.items
                    .map((item) => ({
                      ...item,
                      id: item.id.videoId,
                    }))
                    .map((video) => (
                      <Video key={video.id} video={video} type={type} />
                    ))}
                </React.Fragment>
              ))}
            </>
          )}

          {/* {data.map((video) => (
            <Video key={video.id} video={video} type={type} />
          ))} */}
        </ul>
      )}
    </>
  );
}
