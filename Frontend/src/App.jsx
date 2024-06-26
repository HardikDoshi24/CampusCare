import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Report from "./components/report/Report";
import History from "./components/history/History";
import Form from "./components/report/Form";
import About from "./components/about/About";
import Home from "./components/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from './components/auth/UserProfile';
import Footer from './components/common/Footer';
import AdminEntities from './components/admin/AdminEntities';
function App() {
  const [submittedReports, setSubmittedReports] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", isAdmin: false  });

  const handleSubmit = (formData) => {
    setSubmittedReports([...submittedReports, formData]);
  };
  const handleLogin = (name, email) => {
    // console.log("Name:", name);
    // console.log("Email:", email);
    const isAdmin = email === "admincampuscare@gmail.com";
    setIsLoggedIn(true);
    setUserData({ name, email, isAdmin });
    // console.log("Logged in as admin:", isAdmin);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({ name: "", email: "", isAdmin: false });
  };

  return (

      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} user={userData}/>
          <Routes>
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Home/>} />

            {isLoggedIn && userData.isAdmin && (
            <Route path="/manage-entities" element={<AdminEntities />} />
            )}

            {isLoggedIn && !userData.isAdmin && (
                <>
                  <Route path="/report" element={<Report/>} />
                  <Route path="/form/:entity" element={<Form onSubmit={handleSubmit} />} />
                  <Route path="/history" element={<History reports={submittedReports} />} />
                </>
            )}

            <Route path="/about" element={<About/>} />
            <Route path="/userprofile" element={<UserProfile user={userData}/>} />

            {/* Redirect to home if not logged in */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <ToastContainer />
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
