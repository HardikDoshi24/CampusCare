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
import ManageEntities from "./components/admin/ManageEntities"; // Import the ManageEntities component
import UserProfile from './components/auth/UserProfile';
import Footer from './components/common/Footer';
import AdminHistory from './components/admin/AdminHistory'; // Import AdminHistory component


function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status

  const [submittedReports, setSubmittedReports] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleSubmit = (formData) => {
    setSubmittedReports([...submittedReports, formData]);
  };
  const handleLogin = (namelogin, emaillogin) => {
    setIsLoggedIn(true);
    setUserData({ namelogin, emaillogin });
  };

  return (
    <Router>
      <div>
        <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} handleLogin={handleLogin} user={userData}/>
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} setUserAuthenticated={setUserAuthenticated} />} />
          <Route path="/register" element={<Register setUserAuthenticated={setUserAuthenticated} />} />
          
          <Route path="/" element={<Home/>} />

          <Route path="/report" element={<Report/>} />
          
          <Route path="/form/:entity" element={<Form onSubmit={handleSubmit} />} />
          <Route path="/history" element={<History reports={submittedReports} />} />

          <Route path="/about" element={<About/>} />


          <Route path="/manage-entities" element={<ManageEntities/>} />
          <Route path="/admin-history" element={<AdminHistory />} />


          <Route path="/userprofile" element={<UserProfile user={userData}/>} />

          {/* Protected routes */}
          {/* <Route
            path="/report"
            element={userAuthenticated ? <Report /> : <Navigate to="/login" />}
          />
          <Route
            path="/history"
            element={userAuthenticated ? <Report /> : <Navigate to="/login" />}
          />
          <Route
            path="/form"
            element={userAuthenticated ? <Form /> : <Navigate to="/login" />}
          /> */}
        </Routes>
        <ToastContainer />

      </div>
      <Footer/>
    </Router>
  );
}

export default App;
