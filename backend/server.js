const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const firebase = require("firebase");
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.listen(port);
console.log("Port can dung la: " + port);

var firebaseConfig = {
  apiKey: "AIzaSyCkFhFuJNCi8hWzSpa5ba5pyY1OBtgqykQ",
  authDomain: "emobile-9eb75.firebaseapp.com",
  databaseURL: "https://emobile-9eb75.firebaseio.com",
  projectId: "emobile-9eb75",
  storageBucket: "emobile-9eb75.appspot.com",
  messagingSenderId: "140366350813",
  appId: "1:140366350813:web:bdabab835081dafc210e34",
  measurementId: "G-YNYCGKRT7N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT"); 
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,	Authorization,x-access-token"
  );
  next();
});

const ProductRouter = require('./routers/ProductRouter');
app.use('/emobile',ProductRouter);
const HotProductRouter = require('./routers/HotProductRouter');
app.use('/emobile',HotProductRouter);
const BannerRouter = require('./routers/BannerRouter');
app.use('/emobile',BannerRouter);
const BrandRouter = require('./routers/BrandRouter');
app.use('/emobile',BrandRouter);
const RegisterRouter = require('./routers/RegisterRouter');
app.use('/emobile',RegisterRouter);
const LoginRouter = require('./routers/LoginRouter');
app.use('/emobile',LoginRouter);
const ForgotRouter = require('./routers/ForgotRouter');
app.use('/emobile',ForgotRouter);
const TokenRouter = require('./routers/TokenRouter');
app.use('/emobile/token',TokenRouter);
const CartRouter = require('./routers/CartRouter');
app.use('/emobile/token',CartRouter);
const BillRouter = require('./routers/BillRouter');
app.use('/emobile/token',BillRouter);
