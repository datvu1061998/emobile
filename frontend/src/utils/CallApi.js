import Axios from "axios";

const CallApi = (url,data,method = 'GET')=>{
    const token = localStorage.getItem('token') || null;
    const apiAxios = Axios({
        method,url,data,
        headers:{
            'x-access-token':token
        }
    }).catch(err=>{
        console.log(err);
    })
    return apiAxios;
}

export default CallApi;