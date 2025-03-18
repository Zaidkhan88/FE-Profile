import React from 'react'

function Header() {
  return (
    
      <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-semibold">SimpliTrain</h1>
        <input
          type="text"
          placeholder="What would you like to learn?"
          className="border px-4 py-2 rounded-md w-1/3"
        />
        <nav className="space-x-6">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Categories</a>
          <a href="#" className="text-gray-700">Chat</a>
          <a href="#" className="text-gray-700">Forum</a>
          <a href="#" className="text-gray-700">Notification</a>
        </nav>
      </header>
    
  )
}

export default Header
