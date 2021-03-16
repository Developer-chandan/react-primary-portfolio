import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { NavLink } from "react-router-dom"
import Logo from "./image/cover.png"
const Navbar = () => {
  return (
    <div className="container-lg">
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to={"/"}><img className="logo img-fluid" src={Logo}/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>  </button>

                <div className="collapse navbar-collapse"   id="navbarSupportedContent">
                      <ul className="navbar-nav mb-2 mb-lg-0">
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to={"/About"}>About</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to={"/Portfolio"}>Portfolio</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to={"/Service"}>Service</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to={"/Blog"}>Blog</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to={"/Contact"}>Contact Us</NavLink>
                          </li>

                      </ul>

              </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
