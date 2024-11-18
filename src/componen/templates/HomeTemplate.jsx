import React from "react";
import HeaderSection from "../organisms/HeaderSection";
// import BlackNav from "../Atoms/BlackNav";
import Home from "../Organisms/Home";
import OurServicesHome from "../Organisms/OurServicesHome";
import Ourwork from "../Organisms/Ourwork";
import SliderImgPhone from "../Organisms/SliderImgPhone";

const HomeTemplate = () => (
  <>
    {/* <BlackNav /> */}
    <div
    className="section"
      style={{
        backgroundImage: "url(/Section.png)",
        backgroundSize: "cover",
        position: "relative",

      }}
    >
      <HeaderSection />
    </div>
<Home/>
<OurServicesHome/>
<Ourwork/>
    
  </>
);

export default HomeTemplate;
