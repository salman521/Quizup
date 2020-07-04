import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../Card";

const Dashboard = ({ ...props }) => {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-evenly",
          height: 600,
          fontSize: 40,
          width: "80vw",
          color: Colors.FOCUSED,
        }}
      >
        <Card text={"Categories"} value={"0"} />
        <Card text={"Products"} value={"0"} />
        <Card text={"Customers"} value={"0"} />
      </div>
    </div>
  );
};

export default Dashboard;
