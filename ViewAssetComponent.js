import React, { Component } from 'react'
import AssetService from './services/AssetService'
import { Link } from 'react-router-dom'

class ViewAssetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            assets: {}
        }
    }

    componentDidMount(){
        AssetService.getAssetsById(this.state.id).then( res => {
            this.setState({assets: res.data});
        })
    }

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
              <Link class="nav-link" to="/asset"><big><b>back</b></big></Link>
  </li>
              <li class="nav-item logi">
              <Link class="nav-link" to="/home"><big><b>Logout</b></big></Link>
  </li>

  

  </ul>
  </div>
</nav> 
         
            <div>
                
                <div className = "card col-md-6 offset-md-3 cole mt-4">
                    <h3 className = "text-center"> View Asset Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                    
                            <div> <b>Asset Name: </b>{ this.state.assets.assetname }</div>
                        </div>
<br></br>
<br></br>

                        <div className = "row">
                          
                            <div><b>Asset Category:</b>{this.state.assets.category }</div>
                        </div>
                        <br></br>
                        <br></br>



                        <div className = "row">
                           
                            <div><b> Asset Status:</b> { this.state.assets.status}</div>
                        </div>
                    </div>

                </div>
                
            </div>
            </div>
        )
    }
}

export default ViewAssetComponent