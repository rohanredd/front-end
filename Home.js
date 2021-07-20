import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'


 function home() {
    return (
      <div>
      <nav style={{borderBottom:'5px solid white'}} 
      nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <Link class="navbar-brand" href="#" to="/home">Asset Management System</Link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
        
        <li class="nav-item">
        <Link class="nav-link" to="/Home"><big>Home</big></Link>
</li> <li class="nav-item">
        <Link class="nav-link" to="/login"><big>Login</big></Link>
</li>
<li class="nav-item">
        <Link class="nav-link" to="/register"><big>Register</big></Link>
</li>




</ul>
</div>
</nav> 
      <div className="head">
      <h1 style={{textAlign:'center',color:'antiquewhite'}}>Welcome to ASSET MANAGEMENT SYSTEM</h1>
      </div>
   

          
      
         
      
      
        </div>
    )
}
export default home
