import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center max-w-md px-4">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-gray-300"
            fill="currentColor"
          >
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 1 6 0h2a5 5 0 0 0-10 0zm1-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
        </div>
      </div>
      <h1 className="text-8xl font-light text-gray-400 mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-6">Page not found</p>
      <p className="text-sm text-gray-400 mb-8 max-w-sm mx-auto">
        The page you are looking for doesn't exist or an other error occurred.
        Go back, or head over to homepage to choose a new direction.
      </p>
      <Link
        to="/"
        className="text-white px-5 rounded-md py-2 hover:text-gray-700 transition-colors bg-[#FF6900]"
      >
        Return to Home
      </Link>
    </div>
  </div>
  )
}

export default PageNotFound