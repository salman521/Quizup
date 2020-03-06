import React, { Component, useState, useEffect, memo } from "react";
import * as Colors from "../../styles/colors";
import AddQuestion from "../AddQuestion";
import QuestionsBox from "../QuestionsBox";
import { Fab } from "@material-ui/core";
import NavBar from "../NavBar";
import AddIcon from "@material-ui/icons/Add";
import History from "../History";

const BookDetail = ({
  setActiveCategoryId,
  activeCategoryId,
  handleDrawerToggle,
  classes,
  // setBook,
  ...props
}) => {
  const [open, setBoxOpen] = useState(false);
  const [selectedBox, setSelectedBox] = React.useState("questions");

  return (
    <div style={{ height: "100vh" }}>
      <div>
        {selectedBox === "questions" && (
          <div
            className="addtransaction"
            style={{
              position: "absolute",
              // left: '54vw',
              bottom: "4vh",
              right: "8vw",
              minWidth: "15vw",
              display: "flex",
              // borderRadius: '20px',
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <AddQuestion
              open={open}
              activeCategoryId={activeCategoryId && activeCategoryId}
              handleClose={() => {
                setBoxOpen(!open);
              }}
            />

            {/* </Box> */}

            <span>Add Question</span>
            <Fab
              style={{
                backgroundColor: Colors.FOCUSED,
                boxShadow: `0px 0px 8px ${Colors.FOCUSED}`
              }}
              aria-label="add"
              onClick={() => {
                setBoxOpen(!open);
              }}
            >
              <AddIcon />
            </Fab>
          </div>
        )}
        <div>
          <NavBar
            handleDrawerToggle={handleDrawerToggle}
            selectedBox={selectedBox}
            classes={classes}
            setSelectedBox={setSelectedBox}
          />
        </div>
        <h1>
          {selectedBox === "questions" ? "Questions" : "Users Quiz History"}
        </h1>

        <div
          style={{
            height: "85vh",
            paddingBottom: "80px",
            overflow: "scroll"
          }}
        >
          {selectedBox === "questions" && (
            <QuestionsBox activeCategoryId={activeCategoryId} />
          )}
          {selectedBox === "history" && (
            <History activeCategoryId={activeCategoryId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
