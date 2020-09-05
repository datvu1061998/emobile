import React from "react";
import Categories from "./categories/Categories";
import PriceFilter from "./pricefilter/PriceFilter";
import SysOperating from "./sysOperating/SysOperating";
import Color from "./color/Color";
import ListRecentProducts from "./recentproducts/ListRecentProducts";

function ShopLeft(props) {
  return (
    <div className="col-md-3 col-md-pull-9 col-sm-12">
      {/* widget-search */}
      <aside className="widget-search mb-30">
        <form action="#">
          <input type="text" placeholder="Tìm kiếm..." />
          <button type="submit">
            <i className="zmdi zmdi-search" />
          </button>
        </form>
      </aside>
      <ListRecentProducts></ListRecentProducts>
      <Categories></Categories>
      <PriceFilter></PriceFilter>
      <Color></Color>
      <SysOperating></SysOperating>
    </div>
  );
}

export default ShopLeft;
