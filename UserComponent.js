import React from 'react';
import UserService from './services/UserService';
import { Link } from 'react-router-dom';


class UserComponent extends React.Component {
 
 constructor(props){
 super(props)
 this.state = {
 users:[]
 }
 }
 

 componentDidMount(){
 UserService.getUsers().then((response) => {
 this.setState({ users: response.data})
 });
 }

 render (){
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
    
      
      <li class="nav-item logi">
      <Link class="nav-link" to="/home"><big>Logout</big></Link>
</li>



</ul>
</div>
</nav> 
 
 
 <div className ="cont">
 
 <h2 className = "text-center"><b> Users List</b></h2>
 <table className = "table table-striped">
 <thead>
 <tr>

 <td><b>User Id</b></td>
 <td><b> User Role</b></td>
 <td><b> User firstName</b></td>
 <td><b> User lastName</b></td>
 <td><b> User EmailId</b></td>
 {/* <td> User password</td> */}
 </tr>

 </thead>
 <tbody>
 {
 this.state.users.map(
 user => 
 <tr key = {user.id}>
 <td> {user.id}</td>
 <td> {user.role}</td> 
 <td> {user.firstname}</td> 
 <td> {user.lastname}</td> 
 <td> {user.email}</td> 
 {/* <td> {user.password}</td>  */}
 </tr>
 )
 }

 </tbody>
 </table>

 </div>
 </div>

 )
 }
}

export default UserComponent