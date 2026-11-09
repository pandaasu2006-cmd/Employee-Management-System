import React, { useState } from 'react'
import Header from '../Others/Header.jsx'
import CreateTask from '../others/CreateTask.jsx'
import AllTask from '../others/AllTask.jsx'
import ManageEmployees from '../Others/ManageEmployees.jsx'

const AdminDashboard = (props) => {
  const [showManageModal, setShowManageModal] = useState(false)

  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} data={props.data} />
      
      {/* Manage Employees Button Header */}
      <div className='flex justify-between items-center mt-6'>
        <h2 className='text-2xl font-semibold text-white'>Task Management</h2>
        <button
          onClick={() => setShowManageModal(true)}
          className='bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-medium text-sm transition-colors'
        >
          Manage Employees
        </button>
      </div>

      <CreateTask />
      <AllTask />

      {/* Modal Popup */}
      {showManageModal && (
        <ManageEmployees onClose={() => setShowManageModal(false)} />
      )}
    </div>
  )
}

export default AdminDashboard