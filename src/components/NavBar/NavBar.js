import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import * as Colors from "../../styles/colors";

const NavBar = ({
  selectedBox,
  setSelectedBox,
  handleDrawerToggle,
  classes,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: Colors.TERTIARY,
          borderBottomLeftRadius: 11,
          borderBottomRightRadius: 11,
          alignItems: "center",
          flexDirection: "row",
          width: "94%"
        }}
      >
        <span
          onClick={() => {
            setSelectedBox("questions");
          }}
          style={{
            padding: 30,
            cursor: "pointer",
            color:
              selectedBox === "questions"
                ? Colors.FOCUSED
                : Colors.TEXT_TERTIARY
          }}
        >
          <h4>Questions</h4>
        </span>
        <span
          onClick={() => {
            setSelectedBox("history");
          }}
          style={{
            padding: 30,
            cursor: "pointer",
            color:
              selectedBox === "history" ? Colors.FOCUSED : Colors.TEXT_TERTIARY
          }}
        >
          <h4>Users History</h4>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
