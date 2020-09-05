import React from "react";
import RowWishList from "./RowWishList";

function WishList(props) {
  return (
    <div className="tab-pane" id="wishlist">
      <div className="wishlist-content">
        <form action="#">
          <div className="table-content table-responsive mb-50">
            <table className="text-center">
              <thead>
                <tr>
                  <th className="product-thumbnail">Sản phẩm</th>
                  <th className="product-price">Giá</th>
                  <th className="product-stock">Tình trạng kho</th>
                  <th className="product-add-cart">Thêm vào giỏ hàng</th>
                  <th className="product-remove">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <RowWishList></RowWishList>
                <RowWishList></RowWishList>
                <RowWishList></RowWishList>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WishList;
