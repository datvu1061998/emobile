import React, { useState } from "react";

function AddPictureProduct(props) {
  const [fileMain, setFileMain] = useState("");
  const [filesSecond, setFilesSecond] = useState("");
  const onChangeFile = (e) => {
    if (e.target.name === "fileMain") {
      setFileMain(URL.createObjectURL(e.target.files[0]) || '');
      props.setProduct({fileMain:e.target.files[0]});
    } else {
      const data = [];
      for (let i = 0; i < e.target.files.length; i++) {
        data.push(e.target.files[i]);
      }
      setFilesSecond(data);
      props.setProduct({filesSecond:data});
    }
  };

  const ShowFile = () => {
    let result = null;
    if (filesSecond) {
      result =  filesSecond.map((file,index)=>{
        return (<div key={index}><img src={URL.createObjectURL(file)} alt=""></img></div>)
      })
    }
    return result || (
      <React.Fragment>
        <div><img src="img/product/6.jpg" alt=""></img></div>
        <div><img src="img/product/6.jpg" alt=""></img></div>
        <div><img src="img/product/6.jpg" alt=""></img></div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className="login-account p-30 box-shadow">
        <div className="row">
          <label
            className="submit-btn-1 btn-hover-1"
            htmlFor="file-main"
            style={{ lineHeight: "35px" }}
          >
            Chọn
          </label>
          <div className="img-main">
            <img src={fileMain || "img/product/quickview.jpg"} alt=""></img>
          </div>
        </div>
        <input
          type="file"
          name="fileMain"
          id="file-main"
          style={{ display: "none" }}
          onChange={onChangeFile}
        />
        <hr></hr>
        <div className="row">
          <label
            className="submit-btn-1 btn-hover-1"
            htmlFor="file-secondary"
            style={{ lineHeight: "35px" }}
          >
            Chọn
          </label>
          <div className="img-secondary">{ShowFile()}</div>
        </div>
        <input
          type="file"
          name="fileSecond"
          id="file-secondary"
          style={{ display: "none" }}
          onChange={onChangeFile}
          multiple
        />
      </div>
    </div>
  );
}

export default AddPictureProduct;
