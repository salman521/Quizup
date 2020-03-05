import React, { Component, useState, useEffect, memo } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";
import AddQuestion from "../AddQuestion";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle
} from "@material-ui/core";
import QuestionsBox from "../QuestionsBox";
import {
  Button,
  MenuItem,
  Box,
  FormControl,
  Fab,
  InputLabel
} from "@material-ui/core";
import NavBar from "../NavBar";
import AddIcon from "@material-ui/icons/Add";
import History from "../History";

// import AddBookMember from "../AddBookMember/AddBookMember";
// import BookMembers from "../BookMembers";
// import RightBar from "../RightBar";
// import TransactionsBox from "../TransactionsBox";
// import AddTransaction from "../AddTransaction";
import moment from "moment";
// import NavBar from "../NavBar";
// import ReportsBox from "../ReportsBox";

const BookDetail = ({
  setActiveCategoryId,
  activeCategoryId,
  handleDrawerToggle,
  classes,
  // setBook,
  ...props
}) => {
  const [open, setBoxOpen] = useState(false);

  const handleClickOpenDialogs = () => {
    setOpen(true);
  };

  const [selectedBox, setSelectedBox] = React.useState("questions");
  const [inflow, setInflow] = React.useState(0);
  const [outflow, setOutflow] = React.useState(0);

  const [openDialog, setOpen] = React.useState(false);

  // useEffect(() => {
  //   setActiveBookId(props.data && props.data.getBook && props.data.getBook.id);
  // }, [props.data.getBook]);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{}}>
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
          {/* <Box
            display='flex'
            flexDirection='column'
            // style={{ borderRadius: 20 }}
            justifyContent='center'
            textAlign='left'> */}

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
            // color={Colors.PRIMARY}
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
        <div>
          {/* <h3>{props.data.getBook && props.data.getBook.bookName}</h3> */}
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
          {selectedBox === "history" && <History />}
        </div>
      </div>
      {/* <RightBar
        bookId={bookId}
        setBook={setBook}
        members={props.data.getBook && props.data.getBook.members}
        balance={props.data.getBook && props.data.getBook.balance}
        admins={props.data.getBook && props.data.getBook.admin}
        bookDetail={props.data && props.data.getBook}
        setTransactionDate={setTransactionDate}
        transactionDate={transactionDate}
        filterType={filterType}
        inflow={inflow}
        outflow={outflow}
        setFilterType={setFilterType}
      /> */}
    </div>
  );
};

export default BookDetail;
