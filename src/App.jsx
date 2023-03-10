import React from 'react';
import './App.css';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import CollectionPages from './pages/CollectionPages';
import ProtectedRoute from './util/ProtectedRouter';
import SignUp from './pages/SignUp';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<LoginPage/>} />
                    <Route path='/' element={<SignUp/>} />
                    <Route path='/home' element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
                    <Route path='/error/:code' element={<ErrorPage/>} />
                    <Route path='/collection/:id' element={<ProtectedRoute><CollectionPages/></ProtectedRoute>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
