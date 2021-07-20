import axios from 'axios'

const Asset_API_BASE_URL = "http://localhost:8080/api/v1/asset";


class AssetService {

    getAsset(){
        return axios.get(Asset_API_BASE_URL);
    }
    createAssets(assets){
        return axios.post(Asset_API_BASE_URL,assets);
    }
    getAssetsById(assetsId){
        return axios.get(Asset_API_BASE_URL + '/' + assetsId);
    }
    updateAssets(assets,assetsId){
        return axios.put(Asset_API_BASE_URL + '/' + assets,assetsId);
    }
    deleteAssets(assetsId){
        return axios.delete(Asset_API_BASE_URL + '/' + assetsId);
    }
}

export default new AssetService();