import axios from 'axios';
import React, { useState } from 'react'
import Login from './Login';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function UserLogin() {
    const url="http://localhost:8080/user"
    const [data,setData] = useState({
        role:"",
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })
   
    function submit(e){
        
        alert( 'Signup was Successful')
            e.preventDefault();
            axios.post(url,{
                role:data.role,
                firstname:data.firstName,
                lastname:data.lastName,
                email:data.email,
                password:data.password,
            })
            .then(res=>{
                console.log(res.data)
            })
    }
    function handle(e){
            const newdata={...data}
            newdata[e.target.id]=e.target.value
            setData(newdata)
            console.log(newdata)
            
    }
    let history =useHistory();
 
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
          <Link class="nav-link" to="/Home"><big>home</big></Link>
  </li> <li class="nav-item">
          <Link class="nav-link" to="/login"><big>Login</big></Link>
  </li>
  <li class="nav-item">
          <Link class="nav-link" to="/register"><big>Register</big></Link>
  </li>
  
  
  
  </ul>
  </div>
  </nav> 
        <div className="col-sm-6 offset-sm-3 registr"  >
       
            <h1  style={{color: 'white' }}>Registration</h1> 
             <form onSubmit={(e)=>submit(e)}>
                 <br></br>
                 <div class="form style">
                 <div class="form-group">
                            <input onChange={(e)=>handle(e)} id="role" value={data.role} type="text" class="form-control"  placeholder="UserRole"  ></input>
                        </div>
            <div class="form-group">
                            <input onChange={(e)=>handle(e)} id="firstName" value={data.firstName} type="text" class="form-control" placeholder="Firstname"   ></input>
                        </div>
                        <div class="form-group" >
                            <input onChange={(e)=>handle(e)} id="lastName" value={data.lastName} type="Lastname" class="form-control"  placeholder="Lastname"  ></input>
                        </div>
            <div class="form-group">
                            <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" class="form-control" placeholder="Email"   ></input>
                        </div>
                        <div class="form-group">
                            <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" class="form-control"  placeholder="Password" ></input>
                        </div>
                       </div>
                       
                        
                 {/* <div className="Register">
                 <label>User Role:    </label>
                <input onChange={(e)=>handle(e)} id="role" value={data.role} placeholder="" type="text"></input>
                </div><br></br>
                <div className="Register">
               <label>First Name:</label>  <input onChange={(e)=>handle(e)} id="firstName" value={data.firstName} placeholder="" type="text"></input>
               </div><br></br>
               <div className="Register">
              <label>Last Name:</label> <input onChange={(e)=>handle(e)} id="lastName" value={data.lastName} placeholder="" type="text"></input>
              </div><br></br>
              <div className="Register">
               <label>Email-Id:</label> <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="" type="text"></input>
               </div><br></br>
               <div className="Register">
               <label>Password:</label> <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="" type="password"></input>
               </div><br></br> */}

               
               <button style={{marginBottom: '20px' }}
                   
                className="btn btn-primary">Submit
                </button>
                <button style={{marginBottom: '20px' ,marginLeft: '10px' }}
                onClick={()=>{history.push("/login")}}
                className="btn btn-primary">Login</button>
              
          

                </form>
                
        </div>
        </div>
    )
}