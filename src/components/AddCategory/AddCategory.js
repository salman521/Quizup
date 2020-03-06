import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddCategory = ({
  openDialog,
  organizationName,
  setOpen,
  getCategories,
  addCategory,
  loading,
  ...props
}) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCloseDialogs = () => {
    if (categoryName !== "") {
      addCategory(categoryName)
        .then(res => {
          getCategories().then(response => {
            setCategoryName("");
            setOpen(false);
          });
        })
        .catch(err => alert("Cannot Add Category"));
    } else {
      alert("Please Enter Category Name");
    }
  };
  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpen(false)}
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
            Add Category
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
              setOpen(false);
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
            text="Add"
          />
        </div>
        <div
          style={{
            height: 10,
            paddingTop: 20,
            display: "flex",
            justifyContent: "center"
          }}
        >
          {loading && <CircularProgress size={20} color="secondary" />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
