import React from "react";
import PlusMinus from "../../plus-minus/PlusMinus";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {COLOR} from '../../../constants/Config';
import * as actions from '../../../actions/index';

function Cart(props) {
  const {product,color,qty} = props;
  const dispatch = useDispatch();
  const brand = useSelector(state=>state.brands[state.brands.findIndex(x=>x.id === product.brand)]);
  const cart = useSelector(state=>state.cart);

  const handleUpdateProduct = (val)=>{
    const deleteInfo = !Boolean(Object.values(cart[product.id]).reduce((n,t)=>n+t) + val);
    dispatch(actions.actUpdateToCartApi(product,val,color,deleteInfo));
  }
  const clickDelete = (e)=>{
    e.preventDefault();
    const deleteInfo = Object.keys(cart[product.id]).length === 1 ? true:false
    dispatch(actions.actDeleteFromCartApi(product,color,deleteInfo))
  }
  return (
    <tr>
      <td className="product-thumbnail">
        <div className="pro-thumbnail-img">
          <img src={product.mainImage} alt="" />
        </div>
        <div className="pro-thumbnail-info text-left">
          <h6 className="product-title-2">
            <Link to={`/single-product/${product.id}`}></Link>
          </h6>
          <p>Nhãn hiệu: {brand.name}</p>
          <p> Màu sắc: {COLOR[color]}</p>
        </div>
      </td>
      <td className="product-price">{Number(product.price).toLocaleString('en-US')} ₫</td>
      <td className="product-quantity">
       { <PlusMinus qty={qty} handleUpdateProduct={handleUpdateProduct}></PlusMinus>}
      </td>
      <td className="product-subtotal">{Number(product.price * qty).toLocaleString('en-US')} ₫</td>
      <td className="product-remove">
        <a href="delete" onClick={clickDelete}>
          <i className="zmdi zmdi-close" />
        </a>
      </td>
    </tr>
  );
}

export default Cart;
