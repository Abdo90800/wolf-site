// src/components/organisms/HeaderSection.js
import React from "react";
import Navbar from "../molecules/Navbar";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import CallToActionCard from "../molecules/CallToActionCard";

const HeaderSection = () => (
  <header
    style={{
      width: "100%",
      height: "530px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div>
      <Navbar />
    </div>

    <div className="main-content">
      <Heading
        text={
          <>
            <span>Helping Brands to Stand</span> <br />
            <span> Out in The Digital Era</span>
          </>
        }
        style={{
          fontSize: "48px",
          fontWeight: "600",
          color: "white",
          lineHeight: "72px",
          textAlign: "center",
        }}
      />
      <Text
        text={
          <>
            <span>We are here to create the best software product for</span>
            <br />
            <span>your business</span>
          </>
        }
        styleClass="subtext"
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "white",
          lineHeight: "24px",
          textAlign: "center",
          color: "#E1E1E2",
        }}
      />
      <CallToActionCard />
    </div>
  </header>
);

export default HeaderSection;
