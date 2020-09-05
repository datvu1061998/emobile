import React from "react";

function SysOperating(props) {
  return (
    <div>
      {/* operating-system */}
      <aside className="widget operating-system box-shadow mb-30">
        <h6 className="widget-title border-left mb-20">Hệ điều hành</h6>
        <form action="action_page.php">
          <label>
            <input type="checkbox" name="operating-1" defaultValue="phone-1" />
            Windows Phone
          </label>
          <br />
          <label>
            <input type="checkbox" name="operating-1" defaultValue="phone-1" />
            Bleckgerry ios
          </label>
          <br />
          <label>
            <input type="checkbox" name="operating-1" defaultValue="phone-1" />
            Android
          </label>
          <br />
          <label>
            <input type="checkbox" name="operating-1" defaultValue="phone-1" />
            ios
          </label>
          <br />
          <label>
            <input type="checkbox" name="operating-1" defaultValue="phone-1" />
            Windows Phone
          </label>
          <br />
          <label>
            <input type="checkbox" name="operating-1" defaultValue="phone-1" />
            Symban
          </label>
          <br />
          <label className="mb-0">
            <input type="checkbox" name="operating-1" defaultValue="phone-1" />
            Bleckgerry os
          </label>
          <br />
        </form>
      </aside>
    </div>
  );
}

export default SysOperating;
