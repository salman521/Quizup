import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";

import UsersDropdown from "../../components/UsersDropdown";

import QuizHistoryBox from "../QuizHistoryBox";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const History = ({
  history,
  getUser,
  userData,
  category,
  getUserQuizes,
  getQuestions,
  activeCategoryId,
  userQuizzes,
  loading,
  ...props
}) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // getUser()
    if (userId) {
      getUserQuizes(userId);
    }
  }, [userId]);
  var count = 0;
  return (
    <div style={{ paddingTop: 20 }}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 25
            // height: 150
          }}
        >
          <UsersDropdown setUserId={setUserId} />
        </div>
        {userId !== null ? (
          <div>
            <div>
              {userQuizzes &&
                userQuizzes.map((quiz, index) => {
                  if (quiz.category._id === activeCategoryId) {
                    count++;
                    return <QuizHistoryBox quiz={quiz} index={index + 1} />;
                  }
                })}
              {!loading && count < 1 ? "No Quiz taken of this category" : null}
            </div>
            <div style={{ height: 30, paddingTop: 20 }}>
              {loading && <CircularProgress />}
            </div>
          </div>
        ) : (
          <div style={{ fontSize: 20, color: Colors.FOCUSED_NEGATIVE }}>
            No User Selected
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
