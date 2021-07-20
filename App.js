import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Home from './components/home/Home';
import Login from './components/Login'
import Register from './components/Register';
import UserComponent from './components/UserComponent';
import HeaderComponents from './components/HeaderComponents';
import AssetComponent from './components/AssetComponent';
import CreateAssetComponent from './components/CreateAssetComponent';
import UpdateAssetComponent from './components/UpdateAssetComponent';
import ViewAssetComponent from './components/ViewAssetComponent';
import { Redirect } from 'react-router';

import home from './components/Home';


function App() {
 return (
 <Router>
 <div className="App">

 

<nav id="options">
<Switch>
<Route exact path ="/" component={home}/>
 <Route exact path="/home" component={home} />
 
 <Route exact path="/login" component={Login} />
 <Route exact path="/register" component={Register} />
  
 <Route exact path="/userProfile" component={UserComponent}/>
                 <Route exact path = "/asset" component = {AssetComponent}></Route>
                   <Route exact path = "/add-assets" component = {CreateAssetComponent}></Route>
                   <Route exact path = "/update-assets/:id" component = {UpdateAssetComponent}></Route>
                   <Route exact path = "/view-assets/:id" component = {ViewAssetComponent}></Route>
                   
                


 
 {/* <UserLogin />  */}

 </Switch>
 
 </nav>
 </div>
 </Router>
);
}

 export default App

      
   
