import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const Button = ({
  width,
  backgroundColor,
  fontSize,
  height,
  text,
  customStyle,
  borderRadius,
  onClick,
  ...props
}) => {
  return (
    <div
      className="btn"
      onClick={onClick}
      style={{
        ...customStyle,
        ...{
          // width: width ? width : 'auto',
          // height: height ? height : 'auto',
          cursor: "pointer",
          padding: "8px 10px 8px 10px"

          // borderRadius: borderRadius ? borderRadius : 0,
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // fontSize: fontSize ? fontSize : 14,
          // backgroundColor: customStyle.backgroundColor
          //   ? customStyle.backgroundColor
          //   : Colors.TERTIARY
        }
      }}
    >
      {text ? text : "text not given"}
    </div>
  );
};

export default Button;
