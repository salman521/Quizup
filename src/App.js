import React from "react";
import logo from "./logo.svg";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";

import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import * as Colors from "./styles/colors";
import store from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
const theme = createMuiTheme({
  palette: {
    primary: { 500: Colors.PRIMARY }
    // secondary: { 400: Colors.SECONDARY }
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppRouter />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
