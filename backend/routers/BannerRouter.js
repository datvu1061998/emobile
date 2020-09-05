const express = require('express');
const BannerRouter = express.Router();
const firebase = require('firebase');
const db = firebase.firestore();

BannerRouter.route('/banner')
  .get((req, res) => {
    try {
      db.collection('BannerProducts').get().then((snapshot) => {
        if (snapshot.empty) {
          res.send({
            success: false,
            message: "Không có banner"
          })
        } else {
          let data = []
          snapshot.forEach(doc => {
            db.collection('Products').doc(doc.data().idProduct).get().then((result) => {
              if (!result.exists) {
                res.send({
                  success: false,
                  message: "id không đúng"
                })
              } else {
                data.push({
                  ...doc.data(),
									name: result.data().name,
									id:doc.id
                });
                if (data.length === snapshot.size) {
                  res.send({
                    success: true,
                    data
                  })
                }
              }
            })
          })
        }
      })
    } catch (e) {
      res.send({
        success: false,
        message: e.message
      })
    }
  })
module.exports = BannerRouter;