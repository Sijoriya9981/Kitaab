import React from 'react';
import Home from './Home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import { useAuth } from './context/AuthProvider';
import About from './components/About';

const App = () => {

  const [authUser, setAuthUser] = useAuth(); // Destructure the authUser from useAuth
  console.log(authUser, "---")

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Toaster position="top-center" /> {/* Display Toast notifications */}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* Protected Route */}
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
      </Routes>
    </div>
  );
};

export default App;
