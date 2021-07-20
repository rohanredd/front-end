import React, { Component } from 'react'
import AssetService from './services/AssetService';
import { Link } from 'react-router-dom';

class CreateAssetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            assetname: '',
            category:'',
            status: ''
        }
        this.changeAssetNameHandler = this.changeAssetNameHandler.bind(this);
        
         this.saveAssets = this.saveAssets.bind(this);
    }

    // step 3
//     componentDidMount(){

//         // step 4
//         if(this.state.id === '_add'){
//             return
//         }else{
//             AssetService.getAssetsById(this.state.id).then( (res) =>{
//                 let assets = res.data;
//                 this.setState({assetname: assets.assetname,
//                     category: assets.category,
//                     status : assets.status
//                 });
//             });
//         }        
//     }
    saveAssets = (e) => {
        e.preventDefault();
        let assets = {assetname: this.state.assetname, category: this.state.category, status: this.state.status};
        console.log('assets => ' + JSON.stringify(assets));

//         // step 5
//         if(this.state.id === '_add'){
            AssetService.createAssets(assets).then(res =>{
                this.props.history.push('/asset');
            });
        // }else{
        //     AssetService.updateAssets(assets, this.state.id).then( res => {
        //         this.props.history.push('/asset');
        //     });
//         }
    }
    
    changeAssetNameHandler= (event) => {
        this.setState({assetname: event.target.value});
    }
    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
    

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/asset');
    }

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add Assets</h3>
//         }else{
//             return <h3 className="text-center">Update Assets</h3>
//         }
//     }
    render() {
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
         
           
            <div>
               
                   <div  style={{ marginTop:'20px'} } className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 colr">
                                <h3 className="text-center">Add Assets</h3>
{/* //                                 {
//                                     this.getTitle()
//                                 } */}
                                 <div className = "card-body">
                                     <form>
                                         <div className = "form-group">
                                             <label> Asset Name: </label>
                                             <input placeholder="Asset Name" name="assetname" className="form-control" 
                                                value={this.state.assetname} onChange={this.changeAssetNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                             <label> Category: </label>
                                             <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>
                                       
                                         <div className = "form-group">
                                             <label> Status: </label>
                                             <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>

                                         <button className="btn btn-success" onClick={this.saveAssets}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                 </div>
                             </div>
                      </div>

                   </div>
             </div>
             </div>
        )
    }
}

export default CreateAssetComponent