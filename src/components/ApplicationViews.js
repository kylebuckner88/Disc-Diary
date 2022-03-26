import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home.js"
import { Login } from './auth/Login'
import { RecordForm } from "./Record/RecordForm.js"
import { RecordsIHaveList } from "./Record/RecordsIHaveList.js"
import { RecordsIWantList } from "./Record/RecordsIWantList.js"
import { ShopList } from "./Shop/ShopList.js"
import { RecordEditForm } from "./Record/RecordEditForm.js"
import { ShopForm } from "./Shop/ShopForm.js"
import { RecordIFoundForm } from "./Record/RecordIFoundForm.js"

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

            <Route exact path="/records/addRecord" element={<PrivateRoute><RecordForm /></PrivateRoute>} />

            <Route exact path="/records/addRecordIgot" element={<PrivateRoute><RecordIFoundForm /></PrivateRoute>} />

            <Route exact path="/records/HaveRecord" element={<PrivateRoute><RecordsIHaveList /></PrivateRoute>} />

            <Route exact path="/records/WantRecord" element={<PrivateRoute><RecordsIWantList /></PrivateRoute>} />

            <Route path="/records/:recordId/edit" element={<PrivateRoute><RecordEditForm /></PrivateRoute>} />

            <Route exact path="/shops" element={<PrivateRoute><ShopList /></PrivateRoute>} />

            <Route exact path="/shops/shopsToVisit" element={<PrivateRoute><ShopList /></PrivateRoute>} />

            <Route exact path="/shops/addShop" element={<PrivateRoute><ShopForm /></PrivateRoute>} />

            <Route path="/shopsToVisit" element={<PrivateRoute><ShopForm /></PrivateRoute>} />


        
        </Routes>
    </>
)
}
