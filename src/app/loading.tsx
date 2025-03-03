import React from 'react'
import "./globals.css"

const loading = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
        <div className="loader"></div>
    </div>
  )
}

export default loading;