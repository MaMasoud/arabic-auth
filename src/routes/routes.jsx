import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import Login from '../pages/Login'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <div>Home</div>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <div>register</div>
            },
            {
                path: '/forgot-password',
                element: <div>forgot-password</div>
            },
        ]
    }
])