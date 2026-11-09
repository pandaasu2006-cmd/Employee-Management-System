import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 mt-10 rounded h-48 overflow-auto'>
      <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
        <h2 className='w-1/5 font-semibold'>Employee Name</h2>
        <h3 className='w-1/5 font-semibold'>New Task</h3>
        <h5 className='w-1/5 font-semibold'>Active Task</h5>
        <h5 className='w-1/5 font-semibold'>Completed</h5>
        <h5 className='w-1/5 font-semibold'>Failed</h5>
      </div>

      <div className='h-[80%] overflow-auto'>
        {userData?.employees?.map((elem, idx) => (
          <div key={idx} className='border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2'>
            <h2 className='w-1/5 text-white'>{elem.name}</h2>
            <h3 className='w-1/5 text-blue-400 font-bold'>{elem.taskCount.newTask}</h3>
            <h5 className='w-1/5 text-yellow-400 font-bold'>{elem.taskCount.active}</h5>
            <h5 className='w-1/5 text-green-400 font-bold'>{elem.taskCount.completed}</h5>
            <h5 className='w-1/5 text-red-500 font-bold'>{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask