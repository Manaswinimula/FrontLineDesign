import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Content from "../pages/Content";
import AboutUs from "../pages/AboutUs"; 
import Login from "../pages/login";
import Signup from "../pages/signup";

function AppRouter() {
  return (
    <Router>
     <MainLayout>
        <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;

