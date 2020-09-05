const express = require('express');
const BrandRouter = express.Router();
const firebase = require('firebase');
const db = firebase.firestore();

BrandRouter.route('/brand')
  .get((req, res) => {
    try {
      db.collection('Brands').get().then((snapshot)=>{
        if(snapshot.empty){
          res.send({
            success: false,
            message: "Không có dữ liệu"
          })
        }else{
          let data = []
          snapshot.forEach(doc=>{
            data.push({...doc.data(),id:doc.id});
            if(data.length === snapshot.size){
              res.send({
                success: true,
                brands: data
              })
            }
          })
        }
      })
    } catch (e) {
      res.send({
        succsess: false,
        message: e.message
      })
    }
  })
module.exports = BrandRouter;