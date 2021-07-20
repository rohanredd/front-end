import React from 'react'
import { useHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom';


export default function Login() {

    let history=useHistory();
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
        <div className="login-style">
            <h1  style={{color: 'white' }}>User Login</h1> <br></br>
            <div className="col-sm-6 offset-sm-3">
                <div class="form-style">
            <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" name="e-mail"   required></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control"  placeholder="Password" name="Password"  required></input>
                        </div></div>
                        
                {/* <input type="text" placeholder="email" className="font-control"/> */}
            {/* <br/><br/> */}
                {/* <input type="text" placeholder="password" className="font-control"/> */}
            {/* <br></br><br></br> */}
               <button
                onClick={()=>{
                    alert( 'login was Successfull')
                    history.push('/asset');
                 }}
                  className="btn btn-primary">Login</button>
            </div>

        </div>
        </div>
    )
}
// import React,{ useState} from 'react'

// function Login(props) {
    
//     const [email,setEmail]=useState("");
//    const [password,setpassword]=useState("");
// //  const username = useFormInput('');
// //  const password = useFormInput('');

//  // handle button click of login form
//  const handleLogin = () => {
//  props.history.push('/login');
//  }
//  return (
//  <div >
//      <h1>Login Here..!!!</h1>
 
 
//  <div className="col-sm-6 offset-sm-3">
//             <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)} className="form-control"/>
//              <br/>
//              <input type="password" placeholder="password" onChange={(e)=> setpassword(e.target.value)} className="form-control"/>
//              <br/>
//              <button onClick={Login}  className="btn btn-primary">Login</button>
           
// </div>
// </div>
//  );
// }
 
// const useFormInput = initialValue => {
//  const [value, setValue] = useState(initialValue);
 
//  const handleChange = e => {
//  setValue(e.target.value);
//  }
//  return {
//  value,
//  onChange: handleChange
//  }
// }
 
// export default Login

// import React, { useEffect, useState } from 'react'

// import {useHistory} from 'react-router-dom'



// function Login() {
//     const [email,setEmail]=useState("");
//     const [password,setpassword]=useState("");

//     const history=useHistory();
//     useEffect(() => {
//         if(localStorage.getItem('user-info')){
//         history.push('/login')
    
//     }
// },
//     )
//     async function Login(){
//         console.warn(email,password)
//         let item={email,password};
//      let result = await fetch("http://localhost:8080/users",{
//          method:'POST',
//          headers:{
//              "Content-Type":"application/json",
//              "Accept":"application/json"
//          },
//          body:JSON.stringify(item)
//      });
//      result = await  result.json();
//      localStorage.setItem("user-info",JSON.stringify(result))
//      history.push('/login/success')
//     }
//     return (
//         <div>
//             <h1>Login Page</h1>
//             <div className="col-sm-6 offset-sm-3">
//             <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)} className="form-control"/>
//             <br/>
//             <input type="password" placeholder="password" onChange={(e)=> setpassword(e.target.value)} className="form-control"/>
//             <br/>
//             <button onClick={Login}  className="btn btn-primary">Login</button>

//             </div>
//         </div>
//     )
// }

// export default Login
