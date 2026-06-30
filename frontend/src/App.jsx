import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SelectCompany from "./pages/SelectCompany";

import Dashboard from "./pages/dashboard/Dashboard";

import PrivateRoute from "./routes/PrivateRoute";

import DashboardLayout from "./layout/Dashboardlayout";
import "./index.css";
function App() {
    return (
        <Routes>

            {/* Public Routes */}

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}

         <Route
    path="/select-company"
    element={
        <PrivateRoute>
            <SelectCompany />
        </PrivateRoute>
    }
/>

<Route
    element={
        <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>
    }
>
    <Route path="/dashboard" element={<Dashboard />} />
</Route>

        </Routes>
    );
}

export default App;