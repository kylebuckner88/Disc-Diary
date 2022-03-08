import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {
  return (
    
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      
      <ul className="nav nav-pills nav-fill">
        
        {/* <li className="nav-item">
          <Link className="nav-link" to="/"><img src={'/images/image2vector.svg'} alt="Employees" /></Link>
            </li> */}
            
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/records">My Collection</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/addRecord">Add a Record</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/haveVisited">Shops I've Visited</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/toVisit">Shops to Visit</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/recordsIWant">Records I Want</Link>
        </li>
      </ul>
    </nav>
  )
}
