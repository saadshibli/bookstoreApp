import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './context/AuthProvider';
import { Navigate } from 'react-router-dom';

function App() {
  const [ authUser, setAuthUser ] = useAuth();
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App