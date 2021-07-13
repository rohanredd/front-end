import React,{ useState} from 'react'

function Login(props) {

 const username = useFormInput('');
 const password = useFormInput('');
 
 // handle button click of login form
 const handleLogin = () => {
 props.history.push('/login/success');
 }
 return (
 <div className="login-class">Login here.!!!!
 
 <div>
 Username<br />
 <input type="text" {...username} autoComplete="new-password" />
 </div>
 <div style={{ marginTop: 10 }}>
 Password<br />
 <input type="password" {...password} autoComplete="new-password" />
 </div>
 
 <input type="button" value= 'Login' onClick={handleLogin} /><br />
 </div>
 );
}
 
const useFormInput = initialValue => {
 const [value, setValue] = useState(initialValue);
 
 const handleChange = e => {
 setValue(e.target.value);
 }
 return {
 value,
 onChange: handleChange
 }
}
 
export default Login