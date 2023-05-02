import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
function Navbar() {
  return(
    <>
<nav id="oknav"class="navbar navbar-expand-lg navbar-dark bg-dark p-2">
  <div class="container-fluid ">
    <a class="navbar-brand logo" href="javascript:void(0)"><span class="text-danger">T</span>RAVELS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto"> 
        <li class="nav-item ">
        <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/service">Service</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
       <button class="btn"><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav>
<Outlet/>
</>
  )
}

export default Navbar;