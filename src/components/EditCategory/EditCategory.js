import React, { Component, useState, useEffect } from "react";

import * as Colors from "../../styles/colors";

import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField
} from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const EditCategory = ({
  openEditCategoryDialog,
  setOpenEditCategoryDialog,
  getCategories,
  categories,
  activeCategoryId,
  updateCategory,
  loading,
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
            InputLabelProps={{
              style: {
                color: Colors.TEXT_PRIMARY,
                fontSize: 12
              }
            }}
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

export default EditCategory;
