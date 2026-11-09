import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../Context/AuthProvider'

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, actionType) => {
    const updatedEmployees = [...userData.employees]

    updatedEmployees.forEach((emp) => {
      if (emp.name.trim().toLowerCase() === data.name.trim().toLowerCase()) {
        const targetTask = emp.tasks[taskIndex]

        if (actionType === 'accept') {
          targetTask.newTask = false
          targetTask.active = true
          emp.taskCount.newTask = Math.max(0, (emp.taskCount.newTask || 0) - 1)
          emp.taskCount.active = (emp.taskCount.active || 0) + 1
        } else if (actionType === 'complete') {
          targetTask.active = false
          targetTask.completed = true
          emp.taskCount.active = Math.max(0, (emp.taskCount.active || 0) - 1)
          emp.taskCount.completed = (emp.taskCount.completed || 0) + 1
        } else if (actionType === 'failed') {
          targetTask.active = false
          targetTask.failed = true
          emp.taskCount.active = Math.max(0, (emp.taskCount.active || 0) - 1)
          emp.taskCount.failed = (emp.taskCount.failed || 0) + 1
        }
      }
    })

    setUserData({ ...userData, employees: updatedEmployees })
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    const currentSession = JSON.parse(localStorage.getItem('loggedInUser')) || {}
    if (currentSession.data && currentSession.data.name === data.name) {
      const updatedCurrentEmp = updatedEmployees.find((e) => e.name === data.name)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedCurrentEmp }))
    }
  }

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} onAccept={() => updateTaskStatus(idx, 'accept')} />
        }
        if (elem.active) {
          return (
            <AcceptTask 
              key={idx} 
              data={elem} 
              onComplete={() => updateTaskStatus(idx, 'complete')} 
              onFail={() => updateTaskStatus(idx, 'failed')} 
            />
          )
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList