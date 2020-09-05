const express = require("express");
const ProductRouter = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const Product = require("../model/Product");

ProductRouter.route('/product')
  .post((req, res) => {
    try {
      var product = new Product(
        req.body.name,
        req.body.price,
        req.body.overview,
        req.body.desc,
        req.body.color,
        req.body.brand,
        req.body.os,
        req.body.battery,
        req.body.material,
        req.body.mainImage,
        req.body.secondImage,
        req.body.boxImage
      )

      const productRef = db.collection('Products').doc();
      productRef.set(Object.assign({}, product))
        .then(() => {
          return res.send({
            success: true
          })
        }).catch((err) => {
          return res.send({
            success: false,
            message: err.message
          })
        });;
    } catch (e) {
      res.send({
        success: false,
        message: e.message
      })
    }
  })
  .get((req,res)=>{
    const productRef = db.collection('Products');
    try{     
      productRef.get().then((snapshot )=>{     
        if(snapshot.empty){
          res.send({
            success: false,
            message: "Không có sản phẩm trong data"
          })
        }else{
          let data = []
          snapshot.forEach(doc=>{
            data.unshift({...doc.data(),id:doc.id});
            if(data.length === snapshot.size){
              res.send({
                success: true,
                products: data
              })
            }
          })
        }
      })
    }catch(e){
      res.send({
        success: false,
        message: e.message
      })
    }
  })

  ProductRouter.route('/product/single/:id').get((req,res)=>{
    try{
      const id = req.params.id;
      db.collection('Products').doc(id).get().then((doc)=>{
        if(!doc.exists){
          res.send({
            success: false,
            message: "Không có sản phẩm"
          })
        }else{
          res.send({
            success: true,
            data: {...doc.data(),id:doc.id}
          })
        }
      })
    }catch(e){
      res.send({
        success: false,
        message: e.message
      })
    }
  })

  ProductRouter.route('/product/:number')
  .get((req,res)=>{
    const productRef = db.collection('Products');
    try{     
      productRef.get().then((snapshot )=>{     
        if(snapshot.empty){
          res.send({
            success: false,
            message: "Không có sản phẩm trong data"
          })
        }else{
          let data = []
          snapshot.forEach(doc=>{
            data.unshift({...doc.data(),id:doc.id});
            if(data.length === snapshot.size){
              res.send({
                success: true,
                products: data
              })
            }
          })
        }
      })
    }catch(e){
      res.send({
        success: false,
        message: e.message
      })
    }
  })

module.exports = ProductRouter;