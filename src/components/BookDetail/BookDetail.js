import React, { Component, useState, useEffect, memo } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";

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

import {
  Button,
  MenuItem,
  Box,
  FormControl,
  Fab,
  InputLabel
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// import AddBookMember from "../AddBookMember/AddBookMember";
// import BookMembers from "../BookMembers";
// import RightBar from "../RightBar";
// import TransactionsBox from "../TransactionsBox";
// import AddTransaction from "../AddTransaction";
import moment from "moment";
// import NavBar from "../NavBar";
// import ReportsBox from "../ReportsBox";

const BookDetail = ({
  bookId,
  setActiveBookId,
  handleDrawerToggle,
  activeBookId,
  classes,
  setBook,
  ...props
}) => {
  const [open, setBoxOpen] = useState(false);
  const [filterType, setFilterType] = useState("today");
  const [transactionDate, setTransactionDate] = useState([
    new Date(),
    new Date()
  ]);

  const handleClickOpenDialogs = () => {
    setOpen(true);
  };

  const [selectedBox, setSelectedBox] = React.useState("transactions");
  const [inflow, setInflow] = React.useState(0);
  const [outflow, setOutflow] = React.useState(0);

  const [openDialog, setOpen] = React.useState(false);

  useEffect(() => {
    setActiveBookId(props.data && props.data.getBook && props.data.getBook.id);
  }, [props.data.getBook]);

  useEffect(() => {
    if (filterType === "weekly") {
      console.log(transactionDate, "ss");
      var curr = new Date();
      var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
      var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
      setTransactionDate([firstday, lastday]);
    } else if (filterType === "quarterly") {
      var start = moment()
        .quarter(moment().quarter())
        .startOf("quarter")
        .format();
      var end = moment()
        .quarter(moment().quarter())
        .endOf("quarter")
        .format();
      setTransactionDate([start, end]);

      // console.log(start, 's');
      // console.log(end, 'e');
    } else if (filterType === "today") {
      setTransactionDate([new Date(), new Date()]);
    }
  }, [filterType]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>
        <div
          className="addtransaction"
          style={{
            position: "absolute",
            // left: '54vw',
            bottom: "4vh",
            right: "22vw",
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

          {/* <AddTransaction
            open={open}
            members={props.data.getBook && props.data.getBook.members}
            data={props.data && props.data.getBook}
            transactionDate={transactionDate}
            bookDetail={props.data && props.data.getBook}
            handleClose={() => {
              setBoxOpen(!open);
            }}
          /> */}

          {/* </Box> */}

          <span>Add Transaction</span>
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
          {/* <NavBar
            handleDrawerToggle={handleDrawerToggle}
            selectedBox={selectedBox}
            classes={classes}
            setSelectedBox={setSelectedBox}
          /> */}
        </div>
        {/* <div
          style={{
            padding: "4%",
            height: "90vh",
            paddingBottom: "50px",
            overflow: "auto"
            // borderTop: '1px solid lightgrey',
            // borderBottom: '1px solid lightgrey'
          }}
        >
          {selectedBox === "transactions" && (
            <TransactionsBox
              bookName={props.data.getBook && props.data.getBook.bookName}
              balance={props.data.getBook && props.data.getBook.balance}
              bookId={bookId && bookId}
              filterType={filterType}
              transactionDate={transactionDate}
              setInflow={setInflow}
              setOutflow={setOutflow}
            />
          )}
          {selectedBox === "reports" && <ReportsBox />}
        </div> */}
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
