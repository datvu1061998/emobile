import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {COLOR} from '../../constants/Config';
import { Link } from "react-router-dom";
import * as actions from '../../actions/index';

function CartToggle(props) {
  const product = props.product;
  const brand = useSelector(state=>state.brands[state.brands.findIndex(x=>x.id === product.brand)]) || [];  
  const cart = useSelector(state=>state.cart[product.id]);
  const dispatch = useDispatch();

  const handleDelete = (e)=>{
    e.preventDefault();
    dispatch(actions.actDeleteFromCartApi(product,null,true));
  }
  return (
    <div className="single-cart clearfix">
      <div className="cart-img f-left">
        <Link to={`/single-product/${product.id}`} >
          <img src={product.mainImage} alt="Cart Product" />
        </Link>
        <div className="del-icon">
          <a href="/delete" onClick={handleDelete}>
            <i className="zmdi zmdi-close" />
          </a>
        </div>
      </div>
      <div className="cart-info f-left">
        <h6 className="text-capitalize">
          <Link to={`/single-product/${product.id}`}>{product.name}</Link>
        </h6>
        <p>
          <span>
            Nhãn hiệu <strong>:</strong>
          </span>
          {brand.name}
        </p>
        <p>
          <span>
            Màu sắc <strong>:</strong>
          </span>
          {showColor(cart)}
        </p>
      </div>
    </div>
  );
}

const showColor = (cart)=>{
    var listColor = null;
    if(cart){
        listColor = Object.keys(cart).map(value=>COLOR[value]);
        return listColor.join(', ');
    }
    return listColor;
}

export default CartToggle;
