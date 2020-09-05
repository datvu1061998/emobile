const express = require('express');
const LoginRouter = express.Router();
const firebase = require('firebase');
const Message = require('./../constants/Message');
const db = firebase.firestore();
const jwt = require('jsonwebtoken');
const config = require('./../constants/config');

LoginRouter.route('/login').post((req,res)=>{
    var email = req.body.email;
    
    var password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() =>{
        var uid = firebase.auth().currentUser.uid;
        db.collection('Users').doc(uid).get().then((doc)=>{
            if(doc.exists){
                const user = {...doc.data()};
                let token = jwt.sign({
                    user
                },config.SUPERSECRET,{
                    expiresIn:'24h'
                });
                res.send({
                    success:true,
                    message: Message.LOGINSUCCESSFUL,
                    token:token
                })
            }
        })
    })
    .catch(err=>{
        res.send({
            success:false,
            message: Message.ACCOUNTISEMPTY
        })
    })
});
module.exports = LoginRouter;