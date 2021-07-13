import React from 'react';
import { useHistory } from 'react-router-dom';
import AssetService from './services/AssetService';
import UserService from './services/AssetService';

class AssetComponent extends React.Component {

 constructor(props){
 super(props)
 this.state = {
 asset:[]
 }
 this.addAssets=this.addAssets.bind(this);
 this.editAssets=this.editAssets.bind(this);
 this.deleteAssets=this.deleteAssets.bind(this);
 }

 deleteAssets(assetid){
     

 AssetService.deleteAssets(assetid).then(res=>{
 this.setState({asset:this.state.asset.filter(assets=>assets.id!==assetid)});
 });
 }
 editAssets(assetid){
 this.props.history.push(`/update-assets/${assetid}`);
 
 }

 componentDidMount(){
 UserService.getAsset().then((response) => {
 this.setState({ asset: response.data})
 });
 }
 addAssets(){
 this.props.history.push('/add-assets');
 }

 render (){
 return (
 
 <div className="color">
 <h1 className = "text-center"> Asset List</h1>
 <div className="row">
 <button className="btn btn-primary" onClick={this.addAssets}>Add Assets</button>
 </div>
 <div className="row">
 <table className = "table table-striped table-bordered">
 <thead>
 <tr>

 <td> Assets Id</td>
 <td> Assets Name</td>
 <td> Assets Category</td>
 <td> Assets Status</td>
 <td>Actions</td>
 </tr>

 </thead>
 <tbody>
 {
 this.state.asset.map(
 assets => 
 <tr key = {assets.assetid}>
 <td>{assets.assetid}</td> 
 <td>{assets.assetname}</td> 
 <td>{assets.category}</td> 
 <td>{assets.status}</td> 
 <td>
 <button onClick={()=>this.editAssets(assets.id)}className="btn btn-info">Update</button>
 </td>
 <td>
 <button style={{marginLeft:"10px"}} onClick={()=>this.deleteAssets(assets.assetid)}className="btn btn-danger">Delete</button>
 </td>
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

export default AssetComponent