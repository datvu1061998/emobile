const express = require("express");
const RegisterRouter = express.Router();
const firebase = require("firebase");
const User = require("./../model/User");
const db = firebase.firestore();

RegisterRouter.route("/register").post((req, res) => {
  try {
    var email = req.body.email;
    var password = req.body.password;
    var user = new User(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.phone,
      req.body.birthday,
      req.body.address
    );

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        user.uid = result.user.uid;
        db.collection("Users")
          .doc(user.uid)
          .set(Object.assign({}, user))
          .then(
            res.send({
              success: true,
              message: "Đăng kí thành công!!!"
            })
          )
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        res.send({
          success: false,
          message: err.message
        });
      });
  } catch (e) {
    res.send({
      success: false,
      message: e.message
    });
  }
});

module.exports = RegisterRouter;