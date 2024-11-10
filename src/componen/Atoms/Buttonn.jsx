// src/components/atoms/Button.js
import React from "react";
import Button from "@mui/material/Button";
const Buttonn = ({ children, styleClass }) => (
  <Button
    style={{
      color: "#fff",
      backgroundColor: "#121212",
      borderRadius: "10px",
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
    }}
  >
    {children}
  </Button>
);

export default Buttonn;
