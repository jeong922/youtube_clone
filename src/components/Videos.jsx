import React from 'react';
import Error from './Error';
import Loading from './Loading';
import Video from './Video';
import SkeletonUIList from './SkeletonUIList';

export default function Videos({ isLoading, error, data, type }) {
  return (
    <>
      {isLoading && type === 'list' && <Loading />}
      {isLoading && type === 'grid' && (
        <SkeletonUIList type={type} length={25} />
      )}
      {error && <Error error={error} />}
      {data && (
        <ul
          className={`${
            type === 'list'
              ? 'flex flex-col'
              : 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1921px]:grid-cols-5 min-[2560px]:grid-cols-6 gap-y-4'
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
        </ul>
      )}
    </>
  );
}
