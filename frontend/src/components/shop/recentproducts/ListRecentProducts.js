import React from "react";
import RecentProduct from './RecentProduct';

function ListRecentProducts(props) {
  return (
    <div>
      {/* widget-product */}
      <aside className="widget widget-product box-shadow">
        <h6 className="widget-title border-left mb-20">Có thể bạn thích</h6>
        <RecentProduct></RecentProduct>
        <RecentProduct></RecentProduct>
        <RecentProduct></RecentProduct>
      </aside>
    </div>
  );
}

export default ListRecentProducts;
