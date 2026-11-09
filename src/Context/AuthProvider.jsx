import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../Utils/LocalStorage.jsx'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setlocalStorage()
    }
    const { employees, admin } = getlocalStorage()
    setUserData({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider