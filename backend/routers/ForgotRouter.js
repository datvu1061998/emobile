const express = require('express');
const ForgotRouter = express.Router();
const firebase = require('firebase');
const db = firebase.firestore();

ForgotRouter.route('/forgot')
  .post((req, res) => {
    try {
        var auth = firebase.auth();
        var emailAddress = req.body.email;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
            res.send({
                success: true,
                message: "Vui lòng kiểm tra email!!!"
              })
        }).catch(function(e) {
            res.send({
                success: false,
                message: "Email không khớp vui lòng kiểm tra lại!!!"
              })
        });
    } catch (e) {
      res.send({
        success: false,
        message: e.message
      })
    }
  })
module.exports = ForgotRouter;