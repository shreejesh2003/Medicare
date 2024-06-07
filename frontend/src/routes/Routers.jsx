import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctor from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/CheckoutSucess";


import { Route, Routes } from "react-router-dom";
// import {Routes,Route} from 'react-router-dom'

function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/checkout-sucess" element={<CheckoutSuccess />} />
        <Route path="/user/profile/me" element={<ProtectedRoute allowedRoles={['patient']}>{<MyAccount/>}</ProtectedRoute> }/>
        <Route path="/doctor/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}>{<Dashboard/>}</ProtectedRoute>} />
      </Routes>
  );
}

export default Routers;
