import React from "react";

const HandlerString = (string)=>{
  if(!string) return;
  let start = 0;
  let end = string.indexOf('\n');
  let arrayString = [];
  while(end !== -1){
    arrayString.push(string.slice(start,end));
    start = end;
    end = string.indexOf('\n',start+1);
  }
  if(arrayString.length === 0) return string;
  return arrayString.map((s,index)=>{
    return<p key={index}>{s}</p>
  })
  
}

function SingleProductTab(props) {
  const {product} = props
  
  return (
    <div className="col-md-12">
      {/* hr */}
      <hr />
      <div className="single-product-tab">
        <ul className="reviews-tab mb-20">
          <li className="active">
            <a href="#description" data-toggle="tab">
              Mô tả
            </a>
          </li>
          <li>
            <a href="#information" data-toggle="tab">
              Thông tin chi tiết
            </a>
          </li>
          <li>
            <a href="#reviews" data-toggle="tab">
              reviews
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="description">
          {HandlerString(product.desc)}
          </div>
          <div role="tabpanel" className="tab-pane" id="information">
            {HandlerString(product.overview)}
          </div>
          <div role="tabpanel" className="tab-pane" id="reviews">
            {/* reviews-tab-desc */}
            <div className="reviews-tab-desc">
              {/* single comments */}
              <div className="media mt-30">
                <div className="media-left">
                  <a href="1">
                    <img
                      className="media-object"
                      src="img/author/1.jpg"
                      alt="#"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="clearfix">
                    <div className="name-commenter pull-left">
                      <h6 className="media-heading">
                        <a href="1">Gerald Barnes</a>
                      </h6>
                      <p className="mb-10">27 Jun, 2016 at 2:30pm</p>
                    </div>
                    <div className="pull-right">
                      <ul className="reply-delate">
                        <li>
                          <a href="1">Reply</a>
                        </li>
                        <li>/</li>
                        <li>
                          <a href="1">Delate</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer accumsan egestas .
                  </p>
                </div>
              </div>
              {/* single comments */}
              <div className="media mt-30">
                <div className="media-left">
                  <a href="1">
                    <img
                      className="media-object"
                      src="img/author/2.jpg"
                      alt="#"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="clearfix">
                    <div className="name-commenter pull-left">
                      <h6 className="media-heading">
                        <a href="1">Gerald Barnes</a>
                      </h6>
                      <p className="mb-10">27 Jun, 2016 at 2:30pm</p>
                    </div>
                    <div className="pull-right">
                      <ul className="reply-delate">
                        <li>
                          <a href="1">Reply</a>
                        </li>
                        <li>/</li>
                        <li>
                          <a href="1">Delate</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer accumsan egestas .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  hr */}
      <hr />
    </div>
  );
}

export default SingleProductTab;
