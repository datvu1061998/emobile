import React, { useState, useEffect } from "react";

function PlusMinus(props) {
  const [qty,setQty] = useState(1);  

  const handleClick = (val)=>{
    console.log('click');
    
    if(qty > 0){
      setQty(qty+val);
      props.handleUpdateProduct(val);
    }
  }

  useEffect(()=>{
    setQty(props.qty)
  },[props.qty])

  return (
    <div className="cart-plus-minus f-left">
      <div className="dec qtybutton" onClick={()=>handleClick(-1)}>-</div>
      <input
        type="text"
        value={qty}
        disabled
        name="qtybutton"
        className="cart-plus-minus-box"
      />
      <div className="inc qtybutton" onClick={()=>handleClick(1)}>+</div>
    </div>
  );
}

export default PlusMinus;
