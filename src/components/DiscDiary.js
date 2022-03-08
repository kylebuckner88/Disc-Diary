import React,  {useState} from "react"
// import { Route, Link } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
import "./DiscDiary.css"

export const DiscDiary = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("discdiary_user") !== null)

  const setAuthUser = (user) => {
      sessionStorage.setItem("discdiary_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("discdiary_user") !== null)
  }

  const clearUser = () => {
      sessionStorage.clear();
      setIsAuthenticated(sessionStorage.getItem("discdiary_user") !== null)
  }

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
}