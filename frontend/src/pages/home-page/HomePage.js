import React from "react";
import SliderArea from "../../components/sliderarea/SliderArea";
import ListBrands from "../../components/brands/ListBrands";
import ListPFeatureds from "../../components/pfeatured/ListPFeatureds";
import ComingP from "../../components/comingp/ComingP";

function HomePage(props) {
  document.title = 'eMobile || Home'
  return (
    <div>
      <section id="page-content" className="page-wrapper">
        <SliderArea></SliderArea>
        <ListBrands></ListBrands>
        <ListPFeatureds></ListPFeatureds>
        <ComingP></ComingP>
      </section>
    </div>
  );
}

export default HomePage;
