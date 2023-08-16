export default function SkeletonUI({ type }) {
  return (
    <li
      className={`${
        type === 'list'
          ? 'flex flex-col sm:flex-col md:flex-row'
          : 'px-2 py-2 rounded-xl'
      } relative `}
    >
      <div
        className={`${
          type === 'list' ? 'w-[17rem] mr-3 mb-3' : 'w-full '
        } rounded-xl bg-lightGray dark:bg-darkModeGray w-full aspect-video`}
      />

      {type === 'grid' && (
        <div className='w-full my-2'>
          <div className='flex justify-between'>
            <div className='mr-2 rounded-full bg-lightGray dark:bg-darkModeGray w-9 h-9'></div>
            <div className='flex flex-col w-[87%]'>
              <div className='p-2 mb-2 bg-lightGray dark:bg-darkModeGray'></div>
              <div className='p-2 w-[70%] bg-lightGray dark:bg-darkModeGray'></div>
            </div>
          </div>
        </div>
      )}

      {type === 'list' && (
        <div className='w-full my-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col w-[87%]'>
              <div className='p-2 mb-2 bg-lightGray dark:bg-darkModeGray'></div>
              <div className='p-2 w-[70%] bg-lightGray dark:bg-darkModeGray mb-2'></div>
              <div className='p-2 w-[30%] bg-lightGray dark:bg-darkModeGray'></div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
