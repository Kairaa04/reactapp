import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <Link class="navbar-brand" to="#">Navbar</Link>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
    <Link class="nav-link" to="/Home">Home <span class="sr-only"></span></Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link" to="/Form">Form</Link>
     </li>
     <li class="nav-item">
     <Link class="nav-link" to="/About">About Us</Link>
     </li>
     <li class="nav-item">
     <Link class="nav-link" to="/Search">Contact</Link>
     </li>
    </ul> 
    </div>
   </nav>
   </>
  )
}

export default Navbar
