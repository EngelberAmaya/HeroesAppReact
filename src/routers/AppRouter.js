import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import LoginScreen from '../components/login/LoginScreen'
import Marvel from '../components/marvel/Marvel'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container mt-3'>
                <Routes>
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/' element={<Marvel />} />                
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
