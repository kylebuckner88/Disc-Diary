import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home.js"
import { Login } from './auth/Login'

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
      return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("discdiary_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("discdiary_user") !== null)
      }


return (
    <>
        <Routes>
            <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

            <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
    </>
)
}
