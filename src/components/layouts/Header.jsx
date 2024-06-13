import React from 'react'

export default function Header() {
  return (
    <nav className='bg-nav flex items-center justify-between h-20 px-20 text-white absolute w-screen top-0 right-0'>
        <h1 className='text-2xl font-extrabold'>LOGO</h1>
        <a className='text-xl' to="/">تسجيل الدخول</a>
    </nav>
  )
}
