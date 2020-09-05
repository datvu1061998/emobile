import React from "react";

function SortBy(props) {
  return (
    <div>
      {/* short-by */}
      <div className="short-by f-left text-center">
        <span>Sắp xếp theo :</span>
        <select>
        <option value=""></option>
          <option value="volvo">Giá: Thấp tới cao</option>
          <option value="saab">Giá: Cao tới thấp</option>
          <option value="saab">Độ phổ biến</option>
        </select>
      </div>
    </div>
  );
}

export default SortBy;
