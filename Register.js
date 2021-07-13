// 
import axios from 'axios';
import React, { useState } from 'react'
import Login from './Login';
import { useHistory } from 'react-router-dom';

export default function UserLogin() {
    const history =useHistory();
    const url="http://localhost:8080/user"
    const [data,setData] = useState({
        role:"",
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })
   
    function submit(e){
        
        alert( 'login successfull')
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
    function login(){
     
    }
 
    return (
        <div className="signup">
             <form onSubmit={(e)=>submit(e)}>
                 <label>User Role:</label>
                <input onChange={(e)=>handle(e)} id="role" value={data.role} placeholder="" type="text"></input><br></br>
               <label>First Name:</label>  <input onChange={(e)=>handle(e)} id="firstName" value={data.firstName} placeholder="" type="text"></input><br></br>
              <label>Last Name:</label> <input onChange={(e)=>handle(e)} id="lastName" value={data.lastName} placeholder="" type="text"></input><br></br>
               <label>Email-Id:</label> <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="" type="text"></input><br></br>
               <label>Password:</label> <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="" type="password"></input><br></br>
                <button>Submit</button>
                <button onClick ={() =>{history.push('/login')}} >Login</button>
              


                </form>
                
        </div>
    )
}
