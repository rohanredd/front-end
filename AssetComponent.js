import React from 'react';
import AssetService from './services/AssetService';
import { Link, useHistory } from 'react-router-dom';



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
         this.setState({asset:this.state.asset.filter(assets=>assets.assetid!==assetid)});
      });
    }
    viewAssets(assetid){
        this.props.history.push(`/view-assets/${assetid}`);
    }
    editAssets(assetid){
         this.props.history.push(`/update-assets/${assetid}`);
         
        }

    componentDidMount(){
        AssetService.getAsset().then((res) => {
            this.setState({ asset: res.data})
        });
    }
    addAssets(){
        this.props.history.push('/add-assets');
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
            
            <li class="nav-item ">
              <Link class="nav-link " to="/userProfile"><big>Users</big></Link>
  </li>
              <li class="nav-item logii">
              <Link class="nav-link " to="/home"><big>Logout</big></Link>
  </li>
  

  

  </ul>
  </div>
</nav> 
         
            <div className="color col-md-8 offset-2 ">
                <h1 className = "text-center mt-4"> Asset List</h1>
                <div className="row ">
                    {/* <button className="btn btn-primary" onClick={this.addAssets}>Add Assets</button> */}
                    <button style={{width:"150px"}}className="btn btn-outline-primary" onClick={this.addAssets}><b>Add Assets</b></button>
                </div>
                <div className="row mt-4 ">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>

                           <td><b> Assets Id</b></td>
                             <td><b> Assets Name</b></td>
                             <td><b> Assets Category</b></td>
                             <td> <b>Assets Status</b></td>
                             <td><b>Actions</b></td>
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
                                          <button onClick={()=>this.editAssets(assets.assetid)}className="btn btn-info">Update</button>
                                          <button style={{marginLeft:"10px"}} onClick={()=>this.deleteAssets(assets.assetid)}className="btn btn-danger">Delete</button>
                                          <button style={{marginLeft:"10px"}} onClick={()=>this.viewAssets(assets.assetid)}className="btn btn-primary">View</button>
                                      </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                

            </div>
            </div>
            </div>
           
           

        )
    }
}

export default AssetComponent