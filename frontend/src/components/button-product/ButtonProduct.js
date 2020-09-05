import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as actions from '../../actions/index';
import {useDispatch, useSelector} from 'react-redux';

function ButtonProduct(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const product = props.product;
  const color = props.color;
  const cart = useSelector(state=>state.cart);
  const increase = Number(props.increase) || 1;

  const handleCart = (e)=>{
    e.preventDefault();
    if(cart){
      const objProduct = cart[product.id];
      if(objProduct && objProduct.hasOwnProperty(color)){
        dispatch(actions.actUpdateToCartApi(product,increase,color));
      }else{
        dispatch(actions.actAddToCartApi(product,increase,color));
      }
    }else{
      history.push('/login');
    }
  }
  return (
    <ul className="action-button">
      <li>
        <a href="Yêu thích" title="Yêu thích">
          <i className="zmdi zmdi-favorite" />
        </a>
      </li>
      {showButton(product.id)}
      <li>
        <a href="addtocart" title="Thêm vào giỏ hàng" onClick={handleCart}>
          <i className="zmdi zmdi-shopping-cart-plus" />
        </a>
      </li>
    </ul>
  );
}

const showButton = (idProduct) => {
  if (idProduct) {
    return (
      <React.Fragment>
        <li>
          <Link to={`single-product/${idProduct}`} title="Thông tin">
            <i className="zmdi zmdi-zoom-in" />
          </Link>
        </li>
        <li>
          <a href="compare" title="So sánh">
            <i className="zmdi zmdi-refresh" />
          </a>
        </li>
      </React.Fragment>
    );
  }
};

export default ButtonProduct;
