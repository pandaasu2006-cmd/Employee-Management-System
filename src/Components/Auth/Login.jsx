import React, { useState } from 'react'
import company from '../../assets/company.jpg'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div 
            style={{ backgroundImage: `url(${company})` }} 
            className='flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat'
        >
            <div className='border-2 border-emerald-600 p-20 rounded-xl bg-black/40 backdrop-blur-sm'>
                <form 
                    onSubmit={(e) => submitHandler(e)}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        type="email" 
                        placeholder='Enter your email' 
                        className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 text-white'
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        type="password" 
                        placeholder='Enter Password' 
                        className='border-2 border-emerald-600 mt-3 rounded-full py-4 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 text-white'
                    />
                    <button 
                        type="submit" 
                        className='mt-5 border-none bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 rounded-full py-4 px-5 text-xl text-white outline-none cursor-pointer'
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login