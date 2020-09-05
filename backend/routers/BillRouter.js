const express = require('express');
const BillRouter = express.Router();
const firebase = require('firebase');
const db = firebase.firestore();
const Order = require('../model/Order');
const BillAddress = require('../model/BillAddress');
const Bill = require('../model/Bill');

BillRouter.route('/bill')
    .post((req, res) => {
        try {
            const bodyOrder = req.body.order;
            const order = new Order(
                bodyOrder.cart,
                bodyOrder.ship,
                bodyOrder.subtotal,
                bodyOrder.total,
            )
            const bodyBillAddress = req.body.billAddress;
            const billAddress = new BillAddress(
                bodyBillAddress.name,
                bodyBillAddress.email,
                bodyBillAddress.phone,
                bodyBillAddress.city,
                bodyBillAddress.district,
                bodyBillAddress.wards,
                bodyBillAddress.address,
                bodyBillAddress.detailAddress
            )

            const uid = req.decoded.user.uid;
            const bill = new Bill(
                Object.assign({}, billAddress),
                Object.assign({}, order),
                req.body.payment,
                uid
            )
            const billRef = db.collection('Bills').doc();
            billRef.set(Object.assign({}, bill)).then(() => {
                db.collection('Carts').doc(uid).delete().then(() => {
                    res.send({
                        success: true,
                        id: billRef.id
                    })
                });
            }).catch((e) => {
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
    .get((req, res) => {
        try {
            const user = req.decoded.user;
            var billRef = db.collection('Bills').where('uid', "==",user.uid).orderBy('numberTime');
            if(user.role === 'admin'){
                var billRef = db.collection('Bills').orderBy('numberTime');
            }
            billRef.get().then((snapshot) => {
                if (!snapshot.empty) {
                    let bills = [];
                    snapshot.forEach(doc => {
                        bills.unshift({
                            ...doc.data(),
                            id: doc.id
                        })
                        if (bills.length === snapshot.size) {
                            res.send({
                                success: true,
                                bills
                            })
                        }

                    })
                }else{
                    res.send({
                        success: true,
                        bills:[]
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
module.exports = BillRouter;