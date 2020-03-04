import React, { Component, useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { Select } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "../Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Popover from "@material-ui/core/Popover";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import AddCategory from "../AddCategory";
import { makeStyles } from "@material-ui/core/styles";
import * as Colors from "../../styles/colors";
// import AddBook from "../AddBook";

const useStyles = makeStyles({
  select: {
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    },
    // marginBottom: 15,
    border: "none",
    backgroundColor: Colors.SECONDARY,
    borderRadius: 6
  },
  formControl: {
    // minWidth: 120
  },
  paper: {
    backgroundColor: Colors.SECONDARY,
    color: "red"
  },
  root: {
    width: "100%",
    maxWidth: 360
  }
});

const DrawerCustom = ({
  getBooks,
  userData,
  setMobileOpen,
  mobileOpen,
  history,
  setActiveOrganizationId,
  activeOrganizationId,
  activeCategoryId,
  setActiveCategoryId,
  getCategories,
  categories,
  ...props
}) => {
  const [addMemberBoxOpen, setAddMemberBoxOpen] = useState(false);
  const [workplaceExpand, setWorkplaceExpand] = useState(false);
  const [organization, setOrganization] = useState();

  useEffect(() => {
    getCategories().then(res => {
      console.log(res);
      setActiveCategoryId(res.value.data[0]._id);
    });
  }, [categories.length < 0]);

  // const [activeBookId, setActiveBookId] = useState(
  //   !getBooks.loading &&
  //     getBooks.getBooks &&
  //     getBooks.getBooks.length >= 1 &&
  //     getBooks.getBooks[0].id
  // );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openDialog, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  // const [mobileOpen, setMobileOpen] = useState(false);
  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      {/* ////////////////////////////////////// Popover Code Start////////////////////////////////// */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: { borderRadius: 8, backgroundColor: Colors.TERTIARY }
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div
          style={{
            backgroundColor: Colors.TERTIARY,
            // borderRadius: 10,
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* {admins && admins.find(a => a.id === localStorage.getItem("id")) && (
            <Button
              onClick={() => {
                var data = {
                  bookId: bookId,
                  memberId
                };
                if (admins && admins.find(a => a.id === memberId)) {
                  props
                    .removeAdmin({
                      variables: {
                        bookId,
                        memberId
                      },
                      refetchQueries: [
                        {
                          query: GET_BOOK,
                          variables: {
                            id: bookId
                          }
                        }
                      ]
                    })
                    .then(res => {
                      setAnchorEl(null);
                    })
                    .catch(err => {
                      console.log(err);
                      alert("Cannot Remove Admin");
                    });
                } else {
                  props
                    .makeAdmin({
                      variables: {
                        bookId,
                        memberId
                      },
                      refetchQueries: [
                        {
                          query: GET_BOOK,
                          variables: {
                            id: bookId
                          }
                        }
                      ]
                    })
                    .then(res => {
                      setAnchorEl(null);
                    })
                    .catch(err => {
                      console.log(err);
                      alert("Cannot Make Admin");
                    });
                }
              }}
              customStyle={{
                backgroundColor: Colors.TERTIARY,
                color: Colors.TEXT_TERTIARY,
                textAlign: "left"
              }}
              text={
                admins && admins.find(a => a.id === memberId)
                  ? "Remove Admin"
                  : "Make Admin"
              }
            />
          )} */}

          <Button
            onClick={() => {}}
            customStyle={{
              backgroundColor: Colors.TERTIARY,
              color: Colors.TEXT_TERTIARY,
              textAlign: "left"
            }}
            text={"Delete Category"}
          />
        </div>
      </Popover>
      {/* ////////////////////////////////////// Popover Code End //////////////////////////// */}

      <AddCategory
        organizationName={organization && organization.organizationName}
        openDialog={openDialog}
        setOpen={setOpen}
      />
      <div
        style={{
          backgroundColor: Colors.PRIMARY,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            backgroundColor: Colors.SECONDARY,
            height: "100vh",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: Colors.SECONDARY
          }}
        >
          <div
            style={{
              // border: '1px solid red',
              height: "17vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <div>
              <img
                src={require("../../Image/profile.png")}
                width="auto"
                height="53"
                // style={{ marginRight: '12px' }}
                alt="Logo"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                color: Colors.TEXT_TERTIARY,
                fontSize: 14,
                minWidth: "140px"
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  color: Colors.TEXT_PRIMARY,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {organization ? organization.organizationName : "No Org"}
                <div
                  // value={member.firstName}
                  onClick={event => {
                    // setMemberId(member.id);
                    setAnchorEl(event.currentTarget);
                  }}
                >
                  <img
                    src={require("../../Image/dropdownWhite.png")}
                    width="15"
                    height="10"
                    style={{ marginRight: "7px" }}
                    alt="Logo"
                  />
                </div>
              </span>

              {userData && userData.firstName + " " + userData.lastName}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                textAlign: "left",
                marginLeft: "30px",
                fontWeight: "bold",
                color: Colors.TEXT_SECONDARY
              }}
            >
              Categories
            </div>
            <img
              src={require("../../Image/add.png")}
              onClick={() => {
                setOpen(true);
              }}
              width="auto"
              style={{ marginRight: "30px" }}
              height="20"
              alt="Logo"
            />
          </div>
          <div style={{ height: "60vh", marginTop: 15 }}>
            {categories ? (
              <div
                style={{
                  height: "50vh",
                  overflow: "auto"
                }}
              >
                <List>
                  {categories.length >= 1 ? (
                    categories.map((category, index) => {
                      return (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <ListItem
                            key={index}
                            // button
                            style={{
                              width: "85%",
                              marginLeft: "12px",
                              height: "50%",
                              borderRadius: "10px",
                              backgroundColor:
                                category._id === activeCategoryId
                                  ? Colors.FOCUSED
                                  : Colors.SECONDARY
                            }}
                            onClick={() => {
                              setActiveCategoryId(category._id);
                              // setMobileOpen(false);
                            }}
                            key={index}
                          >
                            <ListItemText primary={category.name} />
                          </ListItem>
                          {category._id === activeCategoryId && (
                            <ListItemIcon
                              onClick={event => {
                                setAnchorEl(event.currentTarget);
                              }}
                              style={{ minWidth: "10px", marginLeft: 10 }}
                            >
                              <img
                                src={require("../../Image/menu.png")}
                                // width={"11"}
                                height="11"
                                // style={{ marginRight: '3px' }}
                                alt="Logo"
                              />
                            </ListItemIcon>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div style={{ height: "100vh" }}>No Categories</div>
                  )}
                </List>
              </div>
            ) : (
              <div style={{ height: "100vh" }}>No Categories</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerCustom;
