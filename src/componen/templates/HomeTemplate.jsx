
import React from "react";
import HeaderSection from "../organisms/HeaderSection";
import BlackNav from "../Atoms/BlackNav";
import Home from "../pages/Home";
import OurServicesHome from "../Organisms/OurServicesHome";

const HomeTemplate = () => (
  <>
    <BlackNav />
    <div
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
    
  </>
);

export default HomeTemplate;
