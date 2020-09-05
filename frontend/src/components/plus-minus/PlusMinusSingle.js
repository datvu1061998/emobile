import React, { useState, useEffect } from "react";

function PlusMinusSingle(props) {
  const [qty,setQty] = useState(1);
  
  const handleClick = (flag)=>{
    if(flag){
      setQty(qty+1);
    }else{
      if(qty <= 1) return setQty(1);
      setQty(qty-1);
    }
  }

  useEffect(()=>{
    if(props.setIncrease){
      props.setIncrease(qty);
    }
  },[qty,props])

  return (
    <div className="cart-plus-minus f-left">
      <div className="dec qtybutton" onClick={()=>handleClick(false)}>-</div>
      <input
        type="text"
        value={qty}
        disabled
        name="qtybutton"
        className="cart-plus-minus-box"
      />
      <div className="inc qtybutton" onClick={()=>handleClick(true)}>+</div>
    </div>
  );
}

export default PlusMinusSingle;
