import React, { Component, useState, useEffect, memo } from "react";
import * as Colors from "../../styles/colors";
import AddQuestion from "../AddQuestion";
import QuestionsBox from "../QuestionsBox";
import Dashboard from "../Dashboard";
import Categories from "../Categories";
import Products from "../Products";
import Orders from "../Orders";
import Customers from "../Customers";
import DeliveryMen from "../DeliveryMen";
import Payments from "../Payments";

import { Fab } from "@material-ui/core";
import NavBar from "../NavBar";
import AddIcon from "@material-ui/icons/Add";
import History from "../History";

const BookDetailUser = ({
  activePageName,
  setActivePageName,
  handleDrawerToggle,
  classes,
  // setBook,
  ...props
}) => {
  const [open, setBoxOpen] = useState(false);
  const [selectedBox, setSelectedBox] = React.useState("questions");

  return (
    <div style={{ height: "97vh" }}>
      <div>
        <h1 style={{ marginTop: 10 }}>{activePageName}</h1>
        <div
          style={{
            height: "90vh",
            paddingBottom: "80px",
            // border: "1px solid red",
            overflow: "scroll",
          }}
        >
          {activePageName === "Dashboard" && <Dashboard />}
          {activePageName === "Categories" && <Categories />}
          {activePageName === "Products" && <Products />}
          {activePageName === "Orders" && <Orders />}
          {activePageName === "Customers" && <Customers />}
          {activePageName === "Delivery Men" && <DeliveryMen />}
          {activePageName === "Payments" && <Payments />}
        </div>
      </div>
    </div>
  );
};

export default BookDetailUser;
