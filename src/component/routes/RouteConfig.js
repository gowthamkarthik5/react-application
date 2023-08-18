import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from '../login/Login';
import SignUp from '../signup/SignUp';
import Home from '../home/Home';
import Users from '../users/Users';

const RouteConfig = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Navigate to={"/login"} />} />
        </Routes>
    )
}

export default RouteConfig;
