import React from 'react'
import Header from '../components/layouts/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <main className="bg-bgColor">
            <Header />
            <div className='h-screen flex items-center justify-center'>
                <Outlet />
            </div>
        </main>
    )
}
