import React from 'react'

const NewTask = ({ data, onAccept }) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-blue-500 rounded-xl flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-xs px-3 py-1 rounded text-white font-semibold'>{data.category}</h3>
          <h4 className='text-xs text-white'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-4 text-xl font-bold text-white'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-white opacity-90'>{data.taskDescription}</p>
      </div>

      <div className='mt-4'>
        <button 
          onClick={onAccept} 
          className='w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-1.5 px-3 rounded text-sm transition-colors'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask