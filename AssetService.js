import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Asset_REST_API_URL = 'http://localhost:8080/asset';

class AssetService {

 getAsset(){
 return axios.get(Asset_REST_API_URL);
 }
 createAssets(assets){
 return axios.post(Asset_REST_API_URL,assets);
 }
 getAssetsById(assetsId){
 return axios.get(Asset_REST_API_URL + '/' + assetsId);
 }
 deleteAssets(assetsId){
    
 return axios.delete(Asset_REST_API_URL + '/' + assetsId);
 }
}

export default new AssetService();