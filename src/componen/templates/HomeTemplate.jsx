
import React from "react";
import HeaderSection from "../organisms/HeaderSection";
import BlackNav from "../Atoms/BlackNav";
import Home from "../pages/Home";

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
    
  </>
);

export default HomeTemplate;
