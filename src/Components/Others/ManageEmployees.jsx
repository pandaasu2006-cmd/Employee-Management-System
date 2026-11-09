import React, { useState, useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const ManageEmployees = ({ onClose }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const [editId, setEditId] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePhoto(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let updatedEmployees = [...userData.employees]

    if (editId) {
      updatedEmployees = updatedEmployees.map((emp) => {
        if (emp.id === editId) {
          return {
            ...emp,
            name,
            email,
            password,
            profilePhoto: profilePhoto || emp.profilePhoto
          }
        }
        return emp
      })
      setEditId(null)
    } else {
      const newEmployee = {
        id: Date.now(),
        name,
        email,
        password,
        profilePhoto: profilePhoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApiLUhlU0x0UfRQWgSQnb0Jh9KzieCXsxLoLo-suiXA&s=10',
        taskCount: { active: 0, newTask: 0, completed: 0, failed: 0 },
        tasks: []
      }
      updatedEmployees.push(newEmployee)
    }

    setUserData({ ...userData, employees: updatedEmployees })
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    setName('')
    setEmail('')
    setPassword('')
    setProfilePhoto('')
  }

  const handleEdit = (emp) => {
    setEditId(emp.id)
    setName(emp.name)
    setEmail(emp.email)
    setPassword(emp.password)
    setProfilePhoto(emp.profilePhoto)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      const updatedEmployees = userData.employees.filter((emp) => emp.id !== id)
      setUserData({ ...userData, employees: updatedEmployees })
      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4'>
      <div className='bg-[#1c1c1c] border border-gray-700 w-full max-w-4xl p-6 rounded-xl max-h-[90vh] overflow-y-auto'>
        
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-bold text-white'>
            {editId ? 'Edit Employee' : 'Manage Employees'}
          </h2>
          <button 
            onClick={onClose}
            className='text-gray-400 hover:text-white text-xl font-bold px-2 py-1'
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#282828] p-4 rounded-lg mb-6'>
          <div>
            <label className='text-xs text-gray-300'>Employee Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type='text'
              placeholder='e.g. John Doe'
              className='w-full text-sm py-1.5 px-3 rounded bg-transparent border border-gray-500 text-white outline-none mt-1'
            />
          </div>

          <div>
            <label className='text-xs text-gray-300'>Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
              placeholder='employee@company.com'
              className='w-full text-sm py-1.5 px-3 rounded bg-transparent border border-gray-500 text-white outline-none mt-1'
            />
          </div>

          <div>
            <label className='text-xs text-gray-300'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type='password'
              placeholder='Enter password'
              className='w-full text-sm py-1.5 px-3 rounded bg-transparent border border-gray-500 text-white outline-none mt-1'
            />
          </div>

          <div>
            <label className='text-xs text-gray-300'>Upload Profile Photo</label>
            <div className='flex items-center gap-3 mt-1'>
              <input
                onChange={handleImageUpload}
                type='file'
                accept='image/*'
                className='w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer bg-transparent border border-gray-500 rounded py-1 px-2'
              />
              {profilePhoto && (
                <img 
                  src={profilePhoto} 
                  alt="Preview" 
                  className='w-8 h-8 rounded-full object-cover border border-emerald-500'
                />
              )}
            </div>
          </div>

          <div className='md:col-span-2 flex gap-3 mt-2'>
            <button
              type='submit'
              className='bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm font-semibold text-white transition-colors'
            >
              {editId ? 'Update Employee' : 'Add Employee'}
            </button>
            {editId && (
              <button
                type='button'
                onClick={() => {
                  setEditId(null)
                  setName('')
                  setEmail('')
                  setPassword('')
                  setProfilePhoto('')
                }}
                className='bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm text-white'
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        <h3 className='text-lg font-semibold text-gray-200 mb-3'>Existing Employees</h3>
        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm text-gray-300'>
            <thead className='bg-[#2c2c2c] text-xs uppercase text-gray-400'>
              <tr>
                <th className='p-3'>Photo</th>
                <th className='p-3'>Name</th>
                <th className='p-3'>Email</th>
                <th className='p-3'>Active Tasks</th>
                <th className='p-3 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData?.employees?.map((emp) => (
                <tr key={emp.id} className='border-b border-gray-800 hover:bg-[#252525]'>
                  <td className='p-3'>
                    <img 
                      src={emp.profilePhoto} 
                      alt={emp.name} 
                      className='w-8 h-8 rounded-full object-cover'
                    />
                  </td>
                  <td className='p-3 text-white font-medium'>{emp.name}</td>
                  <td className='p-3'>{emp.email}</td>
                  <td className='p-3 text-emerald-400'>{emp.taskCount.active}</td>
                  <td className='p-3 text-center flex justify-center gap-2'>
                    <button
                      onClick={() => handleEdit(emp)}
                      className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition-colors'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(emp.id)}
                      className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs transition-colors'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ManageEmployees