const express = require("express");
const HotProductRouter = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

HotProductRouter.route('/hotproduct').get((req, res) => {
    try {
        db.collection('HotProducts').get().then((snapshot) => {
            if(snapshot.empty){
                res.send({
                  success: false,
                  message: "Không có sản phẩm hot"
                })
              }else{
                let data = []
                snapshot.forEach(doc=>{
                    db.collection('Products').doc(doc.data().id).get().then((result)=>{     
                        if(!result.exists){
                            res.send({
                                success: false,
                                message: "id không đúng"    
                            })
                        }else{
                            data.push({...result.data(),id:result.id});
                            if(data.length === snapshot.size){
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
    }catch(e){
        res.send({
            success:false,
            message:e.message
        })
    }

})

module.exports = HotProductRouter;