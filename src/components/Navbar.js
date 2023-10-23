import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) { 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>              
            </ul>   
            <div className="mx-2">
                <select className="form-select" onChange={props.setTheme}>
                  <option value="white">White</option>
                  <option value="#9797db">Blue</option>
                  <option value="#f04747">Red</option>
                  <option value="#dfeb44">Yellow</option>                  
                </select>
            </div>         
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="darkModeSwitch"/>
                <label className="form-check-label" htmlFor="darkModeSwitch">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}
