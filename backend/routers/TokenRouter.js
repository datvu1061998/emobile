const express = require('express');
const TokenRouter = express.Router();
const config = require('../constants/config');
const jwt = require('jsonwebtoken');

TokenRouter.use((req,res,next)=>{
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token){
        jwt.verify(token,config.SUPERSECRET,(err,decoded)=>{
            if(err){
                return res.send({
                    success:false,
                    message: 'Failed to authenticate token.'
                })
            }else{
                req.decoded = decoded
                next();
            }
        })
    }else{
        return res.send({
            success:false,
            message:'No token provided'
        })
    }
})

module.exports = TokenRouter;
