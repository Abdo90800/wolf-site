// src/components/templates/HomeTemplate.js
import React from "react";
import HeaderSection from "../organisms/HeaderSection";
import BlackNav from "../Atoms/BlackNav";

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
  </>
);

export default HomeTemplate;
