import React from 'react';
import UserService from './services/UserService';


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
            
            <div className ="cont">
               
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User Role</td>
                            <td> User firstName</td>
                            <td> User lastName</td>
                            <td> User EmailId</td>
                             <td> User password</td>
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
                                     <td> {user.password}</td> 
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent