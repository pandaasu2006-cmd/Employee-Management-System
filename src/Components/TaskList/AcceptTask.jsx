import React from 'react'

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-emerald-500 rounded-xl flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-xs px-3 py-1 rounded text-white font-semibold'>{data.category}</h3>
          <h4 className='text-xs text-white'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-4 text-xl font-bold text-white'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-white opacity-90'>{data.taskDescription}</p>
      </div>

      <div className='flex justify-between gap-2 mt-4'>
        <button 
          onClick={onComplete} 
          className='w-1/2 bg-green-700 hover:bg-green-800 text-white font-medium py-1.5 px-2 rounded text-xs transition-colors'
        >
          Mark as Completed
        </button>
        <button 
          onClick={onFail} 
          className='w-1/2 bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 px-2 rounded text-xs transition-colors'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask