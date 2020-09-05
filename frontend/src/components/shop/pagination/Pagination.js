import React from "react";

function Pagination(props) {
  return (
    <div>
      <ul className="shop-pagination box-shadow text-center ptblr-10-30">
        <li>
          <a href="1">
            <i className="zmdi zmdi-chevron-left" />
          </a>
        </li>
        <li>
          <a href="1">01</a>
        </li>
        <li>
          <a href="1">02</a>
        </li>
        <li>
          <a href="1">03</a>
        </li>
        <li>
          <a href="1">...</a>
        </li>
        <li>
          <a href="1">05</a>
        </li>
        <li className="active">
          <a href="1">
            <i className="zmdi zmdi-chevron-right" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
