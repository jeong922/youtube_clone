import React from 'react';
import SkeletonUI from './SkeletonUI';

export default function SkeletonUIList({ type, length }) {
  return (
    <ul
      className={`${
        type === 'list'
          ? 'flex flex-col'
          : 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-y-4'
      }`}
    >
      {Array.from({ length: length }, (_, i) => (
        <div key={i}>
          <SkeletonUI type={type} />
        </div>
      ))}
    </ul>
  );
}
