import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
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
import Button from "../Button";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { getCategories } from "../../actions/category";

const useStyles = makeStyles({
  root: {
    // backgroundColor: 'red'
  },
  label: {
    color: Colors.TEXT_TERTIARY,
    fontSize: 10
  },

  // root: {
  //   '&$checked': {
  //     color: 'green',
  //     '&:hover': {
  //       backgroundColor: 'blue',
  //       // Reset on touch devices, it doesn't add specificity
  //       '@media (hover: none)': {
  //         backgroundColor: 'yellow'
  //       }
  //     }
  //   },
  checked: {
    backgroundColor: Colors.RED_ACCENT
    // color: Colors.RED_ACCENT
  }
});
const EditCategory = ({
  openEditCategoryDialog,
  setOpenEditCategoryDialog,
  getCategories,
  categories,
  activeCategoryId,
  updateCategory,
  ...props
}) => {
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    categories.map(c => {
      if (c._id === activeCategoryId) {
        setCategoryName(c.name);
      }
    });
  }, [openEditCategoryDialog]);

  const handleCloseDialogs = () => {
    if (categoryName !== "") {
      var data = { name: categoryName, id: activeCategoryId };
      updateCategory(data)
        .then(res => {
          getCategories().then(response => {
            setCategoryName("");
            setOpenEditCategoryDialog(false);
          });
        })
        .catch(err => alert("Cannot Update Category Name"));
    } else {
      alert("Please Enter Category Name");
    }
  };
  return (
    <Dialog
      open={openEditCategoryDialog}
      onClose={() => setOpenEditCategoryDialog(false)}
      PaperProps={{
        style: {
          borderRadius: 22,
          backgroundColor: Colors.TERTIARY
        }
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent
        style={{
          backgroundColor: Colors.TERTIARY,
          width: 400,
          display: "flex",
          flexDirection: "column",
          // borderRadius: 22,
          padding: 48
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 35
          }}
        >
          <span style={{ fontSize: 14, color: Colors.TEXT_TERTIARY }}>
            Edit Category Name
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 70,
            minWidth: "15vw",
            fontSize: "10px",
            color: Colors.TEXT_TERTIARY,
            marginBottom: 13
          }}
        >
          <TextField
            margin="dense"
            type="text"
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
            fullWidth
            label="Category Name"
            variant="outlined"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Button
            onClick={() => {
              setOpenEditCategoryDialog(false);
            }}
            customStyle={{
              backgroundColor: Colors.PRIMARY,
              minWidth: 140,
              borderRadius: 12,
              color: Colors.TEXT_TERTIARY,

              textAlign: "center"
            }}
            text="Cancel"
          />

          <Button
            onClick={handleCloseDialogs}
            customStyle={{
              backgroundColor: Colors.FOCUSED,
              minWidth: 140,

              borderRadius: 12,
              color: Colors.TEXT_PRIMARY,
              textAlign: "center"
            }}
            text="Update"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategory;
