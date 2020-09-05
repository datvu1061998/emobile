import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import CallApi from '../utils/CallApi';
import * as ApiUrls from '../constants/APIUrls';
import * as Types from './../constants/Types';
import jwt from 'jsonwebtoken';
import * as Configs from '../constants/Config';
import {
   customAlert
} from './../animations';
var isRun = false;

//START
export const actStart = ()=>{
   if(isRun) return ()=>{};
   return dispatch=>{
      isRun = true;
      dispatch(actGetBrandApi());
      dispatch(actGetProductApi());
      dispatch(actCartApi());
   }
}

//BILL

export const actAddBillApi = (data)=>{
   return dispatch=>{
      dispatch(actUpdateLoad(true));
      CallApi(ApiUrls.BILL,data,"POST").then(response=>{
         if(!response) return;
         if(response.data.success){
            dispatch(actCartApi());
            dispatch(actUpdateLoad(false));
         }
      })
   }
}

//CART

//cart delete
export const actDeleteFromCartApi = (product,color,deleteInfo)=>{
   return dispatch =>{
      const id = product.id;
      dispatch(actDeleteCart(id,color));
      if(deleteInfo) dispatch(actDeleteCartProduct(product));
      CallApi(ApiUrls.CART+'/'+id,{color},'DELETE');
   }
}

const actDeleteCart = (id,color)=>{
   return {
      type: Types.DELETE_CART,
      id,
      color
   }
}

const actDeleteCartProduct = (product)=>{
   return {
      type: Types.DELETE_PRODUCT_CART,
      product
   }
}

//cart update
export const actUpdateToCartApi = (product,increase,color,deleteInfo = false)=>{
   return dispatch=>{
      const id = product.id;
      dispatch(actUpdateCart(id,increase,color));
      dispatch(actUpdateCartProduct(product));
      if(deleteInfo) dispatch(actDeleteCartProduct(product));
      CallApi(ApiUrls.CART+'/'+id,{increase,color},'PUT')
   }
}

const actUpdateCart = (id,increase,color)=>{
   return {
      type:Types.UPDATE_CART,
      id,
      increase,
      color
   }
}; 

const actUpdateCartProduct = (product)=>{
   return{
      type:Types.UPDATE_PRODUCT_CART,
      product
   }
}

//cart add
export const actAddToCartApi = (product,increase,color)=>{
   const id = product.id;
   return dispatch=>{
      dispatch(actAddToCart(id,increase,color));
      dispatch(actUpdateCartProduct(product));
      CallApi(ApiUrls.CART+'/'+id,{increase,color},'POST')
   }
}

const actAddToCart = (id,increase,color)=>{
   return {
      type:Types.ADD_CART,
      id,
      increase,
      color
   }
}; 

//cart get
export const actCartApi = ()=>{
   return dispatch=>{
      CallApi(ApiUrls.CART).then(response=>{
         if(!response) return;
         const result = response.data;
         if(result.success){
            dispatch(actCart(result.cart))
            dispatch(actGetProductCart(result.products))
         }
      })
   }
}

const actCart = (cart)=>{
   return {
      type:Types.GET_CART,
      cart
   }
}

const actGetProductCart = (products)=>{
   return{
      type: Types.GET_PRODUCT_CART,
      products
   }
}

//LOGIN
export const actForgotPasswordApi = (email) => {
   return dispatch => {
      dispatch(actUpdateLoad(true));
      CallApi(ApiUrls.FORGOT, {
         email
      }, 'POST').then(response => {
         dispatch(actUpdateLoad(false))
         customAlert(response.data.message);
      })
   }
}

export const actLoginApi = (data) => {
   return dispatch => {
      dispatch(actUpdateLoad(true));
      CallApi(ApiUrls.LOGIN, data, "POST").then(async response => {
         dispatch(actUpdateLoad(false));
         const result = response.data;
         if (result.success) {
            localStorage.setItem('token', result.token);
            const user = await verifyToken();
            dispatch(actLogin(user));
            dispatch(actCartApi());
         } else {
            customAlert("Email hoặc mật khẩu không chính xác!!!");
         }
      })
   }
}

const verifyToken = () => {
   return new Promise(resolve => {
      const token = localStorage.getItem('token') || null;
      if (token) {
         jwt.verify(token, Configs.SUPERSECRET, (err, decode) => {
            if (err) {
               resolve(null);
            } else {
               resolve(decode.user);
            }
         })
      } else {
         resolve(null);
      }
   })
}

const actLogin = (user) => {
   return {
      type: Types.LOGIN,
      user
   }
}

export const actLogout = () => {
   return {
      type: Types.LOGOUT
   }
}


export const actRegisterApi = (data) => {
   return dispatch => {
      dispatch(actUpdateLoad(true));
      CallApi(ApiUrls.REGISTER, {
         ...data
      }, 'POST').then(response => {
         const data = response.data;
         if (data.success) {
            customAlert(data.message);
         }
         dispatch(actUpdateLoad(false))
      })
   }
}


//BRAND
export const actGetBrandApi = () => {
   return dispatch => {
      try {
         CallApi(ApiUrls.GET_BRAND).then(response => {
            if (!response) return;
            const result = response.data;
            if (result.success) {
               dispatch(actGetBrand(result.brands));
            } else {
               customAlert("Không thể lấy dữ liệu");
            }
         })
      } catch (e) {
         console.log(e);
      }
   }
}

const actGetBrand = (brands) => {
   return {
      type: Types.GET_BRAND,
      brands
   }
}


//PRODUCT
export const actGetProductApi = () => {
   return dispatch => {
      try {
         CallApi(ApiUrls.POST_PRODUCT).then(response => {
            if(!response) return;   
            const result = response.data;
            if (result.success) {
               dispatch(actGetProduct(result.products));
            } else {
               customAlert("Không thể lấy dữ liệu");
            }
         })
      } catch (e) {
         console.log(e);
      }
   }
}

const actGetProduct = (products) => {
   return {
      type: Types.GET_PRODUCT,
      products
   }
}

export const actAddProductApi = (data) => {
   return async dispatch => {
      dispatch(actUpdateLoad(true));
      const image = await saveImage(data.fileMain, data.filesSecond);

      CallApi(ApiUrls.POST_PRODUCT, {
         ...data.info,
         ...image
      }, 'POST').then((response) => {
         if (response.data.success) {
            customAlert("Thêm sản phẩm thành công!!!");
         }
         dispatch(actUpdateLoad(false));
      })
   }
}

const saveImage = (mainImage, secondImage) => {
   return new Promise(resolve => {
      const time = new Date().getTime().toString();
      const result = {
         boxImage: time
      };
      try {
         const imgRef = firebase.storage().ref().child('Products').child(time);
         imgRef.child('main').child(mainImage.name).put(mainImage)
            .then(() => {
               imgRef.child('main').child(mainImage.name).getDownloadURL().then((url) => {
                  result.mainImage = url;
               })
               result.secondImage = [];
               secondImage.forEach((img) => {
                  imgRef.child('second').child(img.name).put(img).then(() => {
                     imgRef.child('second').child(img.name).getDownloadURL().then((url) => {
                        result.secondImage.push(url);
                        if (secondImage.length === result.secondImage.length) {
                           resolve(result);
                        }
                     })
                  })
               });
            });
      } catch (e) {
         console.log(e);

      }
   })

}

//ANIMATION LOAD
export const actUpdateLoad = (isLoad) => {
   return {
      type: Types.UPDATE_LOAD,
      isLoad
   }
}