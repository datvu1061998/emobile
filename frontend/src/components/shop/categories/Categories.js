import React, { useEffect } from "react";
import * as animations from "./../../../animations";

function Categories(props) {
  useEffect(() => {
    animations.aCategaries();
  }, []);
  return (
    <div>
      {/* widget-categories */}
      <aside className="widget widget-categories box-shadow mb-30">
        <h6 className="widget-title border-left mb-20">Loại</h6>
        <div id="cat-treeview" className="product-cat">
          <ul className="treeview">
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Ram</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">2GB RAM</a>
                </li>
                <li>
                  <a href="1">3GR RAM</a>
                </li>
                <li>
                  <a href="1">4GB RAM</a>
                </li>
                <li>
                  <a href="1">8GB RAM</a>
                </li>
                <li>
                  <a href="1">16GB RAM</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Nhãn hiệu</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Samsung</a>
                </li>
                <li>
                  <a href="1">Apple</a>
                </li>
                <li>
                  <a href="1">Xiaomi</a>
                </li>
                <li>
                  <a href="1">Nokia</a>
                </li>
                <li>
                  <a href="1">BlackBerry</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Màn hình</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Dưới 5 inch</a>
                </li>
                <li>
                  <a href="1">Trên 5 inch</a>
                </li>
                <li>
                  <a href="1">Tai thỏ</a>
                </li>
                <li>
                  <a href="1">Tràn viền</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Top Brands</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Mobile</a>
                </li>
                <li>
                  <a href="1">Tab</a>
                </li>
                <li>
                  <a href="1">Watch</a>
                </li>
                <li>
                  <a href="1">Head Phone</a>
                </li>
                <li>
                  <a href="1">Memory</a>
                </li>
              </ul>
            </li>
            <li className="closed expandable">
              <div className="hitarea closed-hitarea expandable-hitarea" />
              <a href="1">Tính năng đặc biệt</a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="1">Bảo vệ khuôn mặt</a>
                </li>
                <li>
                  <a href="1">Bảo vệ vân tay</a>
                </li>
                <li>
                  <a href="1">Sạc pin nhanh</a>
                </li>
                <li>
                  <a href="1">Sạc không dây</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Categories;
