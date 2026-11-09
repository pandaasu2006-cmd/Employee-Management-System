import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-red-500 rounded-xl flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-black text-xs px-3 py-1 rounded text-white font-semibold'>{data.category}</h3>
          <h4 className='text-xs text-white'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-4 text-xl font-bold text-white'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-white opacity-90'>{data.taskDescription}</p>
      </div>

      <div className='mt-4'>
        <button disabled className='w-full bg-red-700 text-white font-medium py-1.5 px-3 rounded text-sm cursor-default'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask