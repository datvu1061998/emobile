import React, { useState } from "react";
import Slider from '@material-ui/core/Slider';

const constPrice = [50,999]

function PriceFilter(props) {
  const[price,setPrice] = useState(constPrice);

  function valuetext(e,newValue) {
    var newPrice = [];
    newPrice[0] = ( Math.round((constPrice[1] - constPrice[0])/100*newValue[0]) + constPrice[0]);
    newPrice[1] = ( Math.round((constPrice[1] - constPrice[0])/100*newValue[1]) + constPrice[0]);
    setPrice(newPrice);
  }
  
  return (
    <div>
      <aside className="widget shop-filter box-shadow mb-30">
        <h6 className="widget-title border-left mb-20">Giá</h6>
        <div className="price_filter">
          <div className="price_slider_amount">
            <input type="submit" value="Giá:" />
            <input
              type="text"
              id="amount"
              name="price"
              placeholder={`$${price[0]} - $${price[1]}`}
            />
          </div>
          <Slider
            defaultValue={[0, 50]}
            aria-labelledby="vertical-slider"
            onChange={valuetext}
          />
        </div>
      </aside>
    </div>
  );
}

export default PriceFilter;
