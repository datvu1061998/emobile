import Axios from "axios";

const CallApiNoToken = (url,data,method = 'GET')=>{
    const apiAxios = Axios({
        method,url,data,
    }).catch(err=>{
        console.log(err);
    })
    return apiAxios;
}

export default CallApiNoToken;