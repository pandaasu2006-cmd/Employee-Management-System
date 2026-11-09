import React, { useState, useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider.jsx'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTaskObj = {
            taskTitle,
            taskDate,
            category,
            taskDescription,
            newTask: true,
            active: false,
            completed: false,
            failed: false
        }

        const data = [...userData.employees]

        data.forEach((elem) => {
            if (assignTo.trim().toLowerCase() === elem.name.trim().toLowerCase()) {
                elem.tasks.push(newTaskObj)
                elem.taskCount.newTask = (elem.taskCount.newTask || 0) + 1
            }
        })

        setUserData({ ...userData, employees: data })
        localStorage.setItem('employees', JSON.stringify(data))

        settaskTitle('')
        setassignTo('')
        settaskDate('')
        setcategory('')
        settaskDescription('')
    }    

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                            value={taskTitle}
                            onChange={(e) => settaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
                            type="text" 
                            placeholder='Make a UI Design'
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                            value={taskDate}
                            onChange={(e) => settaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
                            type="date" 
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input 
                            value={assignTo}
                            onChange={(e) => setassignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
                            type="text" 
                            placeholder='Employee Name' 
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
                            type="text" 
                            placeholder='Design, Dev, etc'
                            required
                        />
                    </div>
                </div>

                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => settaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' 
                        rows="10"
                        placeholder='Enter task details...'
                        required
                    ></textarea>
                </div>

                <button type='submit' className='bg-emerald-500 py-3 hover:bg-emerald-600 active:bg-emerald-700 px-5 rounded text-sm mt-4 w-full font-semibold text-white transition-colors'>
                    Create Task
                </button>
            </form>
        </div>
    )
}

export default CreateTask