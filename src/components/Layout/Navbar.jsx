import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container-fluid">
<NavLink className="navbar-brand text-light fs-3"
to="#">Navbar</NavLink>
<button className="navbar-toggler bg-info" type="button"
data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent" aria-expanded="false"
aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse"
id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<NavLink className="nav-link active text-warning fs-4"
aria-current="page" to="/home">Home</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link active text-warning fs-4"
aria-current="page" to="/about">About</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link active text-warning fs-4"
aria-current="page" to="/gallery">Gallery</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link active text-warning fs-4"
aria-current="page" to="/register">Register</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link active text-warning fs-4"
aria-current="page" to="/contact">Contact</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link active text-warning fs-4"
aria-current="page" to="/show">Show</NavLink>
</li>
</ul>
</div>
</div>
</nav>

    </div>
  )
}

export default Navbar