import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login.jsx'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './Components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './Context/AuthProvider.jsx'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const storedData = JSON.parse(loggedInUser)
      setUser(storedData.role)
      setloggedInUserData(storedData.data)
    }
  }, [userData])

  const handleLogin = (email, password) => {
    if (userData?.admin) {
      const adminUser = userData.admin.find(
        (a) => email.trim().toLowerCase() === a.email.trim().toLowerCase() && password === a.password
      )
      if (adminUser) {
        setUser('admin')
        setloggedInUserData(adminUser)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminUser }))
        return
      }
    }

    if (userData?.employees) {
      const employee = userData.employees.find(
        (e) => email.trim().toLowerCase() === e.email.trim().toLowerCase() && password === e.password
      )
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }

    alert('Invalid Credentials')
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App