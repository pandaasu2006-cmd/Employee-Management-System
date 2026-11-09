import React, { useState } from 'react'

const Header = (props) => {
  const username = props.data?.name || 'Admin'
  const [showPhoto, setShowPhoto] = useState(false)

  const logOut = () => {
    localStorage.removeItem('loggedInUser')
    if (props.changeUser) {
      props.changeUser('')
    }
  }

  return (
    <div className='flex items-end justify-between'>
      <img
        src={props.data?.profilePhoto}
        alt="User avatar"
        onClick={() => setShowPhoto(true)}
        className='rounded-3xl size-12 cursor-pointer hover:opacity-80 transition-opacity'
      />
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username}👋</span>
      </h1>
      <button
        onClick={logOut}
        className='bg-red-600 hover:bg-red-700 text-lg font-medium rounded text-white px-5 py-2'
      >
        Log Out
      </button>

      {showPhoto && (
        <div
          onClick={() => setShowPhoto(false)}
          className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
        >
          <div className='relative' onClick={(e) => e.stopPropagation()}>
            <img
              src={props.data?.profilePhoto}
              alt={username}
              className='rounded-2xl max-w-xs w-full'
            />
            <button
              onClick={() => setShowPhoto(false)}
              className='photo-close-btn'
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <p className='text-white text-center mt-3 text-lg font-medium'>{username}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header