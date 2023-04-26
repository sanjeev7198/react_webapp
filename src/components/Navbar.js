import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(prop) {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3>Kal Tak News</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link btn active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn active" aria-current="page" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark" style={{height: "20vh"}}>
        <h3 style={{color: "black", textShadow: "5px 2px 15px yellow"}}>{prop.heading}</h3>
    </div>
    </>
  )
}
