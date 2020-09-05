import jwt from 'jsonwebtoken';
import * as Types from '../constants/Types';
import * as Configs from '../constants/Config';

var initalState = null;
const token = localStorage.getItem('token') || null;
if(token){
    jwt.verify(token,Configs.SUPERSECRET,(err,decode)=>{
        if(err){
        }else{
            initalState = {...decode.user};
        }
    })  
}

const User = (state = initalState,action)=>{
    switch(action.type){
        case Types.LOGIN:
            state = {...action.user};
            return {...state};
        case Types.LOGOUT:
            localStorage.clear();
            return null;
        default: return state;
    }
}

export default User;