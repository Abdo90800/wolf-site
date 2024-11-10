// src/components/molecules/Navbar.js
import React from "react";
import Link from "../atoms/Link";
// import Buttonn from "../atoms/Buttonn";
import Buttonn from "../Atoms/Buttonn";

const Navbar = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      color: "#121212",
      width: "628px",
      height: "64px",
      marginTop: "20px",
      borderRadius: "20px",
      boxShadow: "0px 0px 8px 0px #1A38611A", 
      backdropFilter: "blur(50px)",
      backgroundColor: "#FFFFFF80",
      marginBottom: "80px",
    
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <img src="/logo.png" alt="Logo" className="logo" />
      <Link href="#services">Services</Link>
      <Link href="#work">Work</Link>
      <Link href="#pricing">Pricing</Link>
      <Link href="#faqs">FAQs</Link>
      <Buttonn>We're here</Buttonn>
    </div>
  </div>
);

export default Navbar;
