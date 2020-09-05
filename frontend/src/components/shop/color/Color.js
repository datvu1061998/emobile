import React from "react";

function Color(props) {
  return (
    <div>
      <aside className="widget widget-color box-shadow mb-30">
        <h6 className="widget-title border-left mb-20">Màu sắc</h6>
        <ul>
          <li className="color-1">
            <a href="1">Black</a>
          </li>
          <li className="color-2">
            <a href="1">Floral White</a>
          </li>
          <li className="color-3">
            <a href="1">Gold</a>
          </li>
          <li className="color-4">
            <a href="1">Deep Sky Blue</a>
          </li>
          <li className="color-5">
            <a href="1">Electric Purple</a>
          </li>
          <li className="color-6">
            <a href="1">Red</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Color;
