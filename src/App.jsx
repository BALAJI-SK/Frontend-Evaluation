import React from 'react';
import './App.css';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import CollectionPages from './pages/CollectionPages';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<LoginPage/>} />
                    <Route path='/home' element={<HomePage/>} />
                    <Route path='/error/:code' element={<ErrorPage/>} />
                    <Route path='/collection/:id' element={<CollectionPages/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
