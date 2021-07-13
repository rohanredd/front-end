import React, { Component } from 'react'
import AssetService from './services/AssetService';

class UpdateAssetComponent extends Component {
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
        
         this.updateAssets = this.updateAssets.bind(this);
    }

    //step 3
    componentDidMount(){

        // step 4
        // if(this.state.id === '_add'){
        //     return
        // }else{
            AssetService.getAssetsById(this.state.id).then( (res) =>{
                let assets = res.data;
                this.setState({assetname: assets.assetname,
                    category: assets.category,
                    status : assets.status
                });
            });
        }        
    // }
    updateAssets = (e) => {
        e.preventDefault();
        let assets = {assetname: this.state.assetname, category: this.state.category, status: this.state.status};
        console.log('assets => ' + JSON.stringify(assets));

//         // step 5
        // if(this.state.id === '_add'){
            AssetService.createAssets(assets).then(res =>{
                this.props.history.push('/asset');
            });
        // }else{
            AssetService.updateAssets(assets, this.state.assetid).then( res => {
                this.props.history.push('/asset');
            });
        }
    // }
    
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
               
                   <div className = "Update Assets">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Assets</h3>
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

                                         <button className="btn btn-success" onClick={this.updateAssets}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                 </div>
                             </div>
                      </div>

                   </div>
             </div>
        )
    }
}

export default UpdateAssetComponent