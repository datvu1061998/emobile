const express = require('express');
const CartRouter = express.Router();
const firebase = require('firebase');
const db = firebase.firestore();

CartRouter.route('/Cart')
//get all cart of user
  .get((req, res) => {
    try {
      const uid = req.decoded.user.uid;
      db.collection('Carts').doc(uid).get().then(async doc => {
        if (doc.exists) {
          //get info product from cart
          const listId = Object.keys(doc.data());
          const products = await getProductFromListId(listId);
          res.send({
            success: true,
            cart: {...doc.data()},
            products
          })
        } else {
          res.send({
            success: true,
            cart: {},
            products:[]
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

const getProductFromListId = (listId)=>{
  return new Promise(resolve=>{
    if(listId.length === 0) resolve([]);
      const productRef = db.collection('Products');
      const listProduct = [];
      listId.forEach(id => {
        productRef.doc(id).get().then(doc=>{
          if(doc.exists){
            listProduct.push({...doc.data(),id:doc.id});
            if(listProduct.length === listId.length){
              resolve(listProduct);
            }
          }
        })
      });
  })
}

CartRouter.route('/Cart/:id')
//add product 
  .post((req, res) => {
    try {
      const id = req.params.id;
      const uid = req.decoded.user.uid;
      const color = req.body.color;
      const increase = req.body.increase;
      db.collection('Carts').doc(uid).set({
        [id]: {[color] : increase}
      },{merge:true}).then(() => {
        res.send({
          success: true
        })
      }).catch(e => {
        res.send({
          success: false,
          message: e.message
        })
      })
    } catch (e) {
      res.send({
        success: false,
        message: e.message
      })
    }
  })
  //update product
  .put((req, res) => {
    try {
      const id = req.params.id;
      const uid = req.decoded.user.uid;
      const color = req.body.color;
      const field = id + '.'+ color;
      const increase = Number(req.body.increase);
      db.collection('Carts').doc(uid).update({
        [field]: firebase.firestore.FieldValue.increment(increase)
      }).then(() => {
        //check cart < 0
        checkValueProduct(uid,id,color);
        res.send({
          success: true
        })
      }).catch(e => {
        res.send({
          success: false,
          message: e.message
        })
      })
    } catch (e) {
      res.send({
        success: false,
        message: e.message
      })
    }
  })
  //delete product
  .delete((req, res) => {
    try {
      const id = req.params.id;
      const uid = req.decoded.user.uid;
      const color = req.body.color;
      let field = id;
      if(color) field = field +'.'+color;
      const cartRef = db.collection('Carts').doc(uid);
      cartRef.update({
        [field]: firebase.firestore.FieldValue.delete()
      }).then(() => {
        cartRef.get().then(doc=>{
          if(doc.exists && Object.keys(doc.data()[id]).length === 0){
            cartRef.update({
              [id]: firebase.firestore.FieldValue.delete()
            });
          }
        })
        res.send({
          success: true
        })
      }).catch(e => {
        res.send({
          success: false,
          message: e.message
        })
      })
    } catch (e) {
      res.send({
        success: false,
        message: e.message
      })
    }
  })

  const checkValueProduct = (uid,id,color)=>{
    const field = id + '.'+ color;
    const cartRef = db.collection('Carts');
    cartRef.doc(uid).get().then(doc=>{
      if(doc.exists){
        const product = doc.data()[id];
        if(product[color]<= 0){
          cartRef.doc(uid).update({
            [field]: firebase.firestore.FieldValue.delete()
          }).then(()=>{
            if(Object.keys(product).length === 1){
              cartRef.doc(uid).update({
                [id]: firebase.firestore.FieldValue.delete()
              })
            }
          })
        }
      }
    })
  }

module.exports = CartRouter;