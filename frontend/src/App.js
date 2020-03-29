import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { HomePage, LoginPage } from "./pages";
import { PrimaryLayout } from "./components/Global/PrimaryLayout";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#5c04d1" }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimaryLayout>
        <Router>
          <HomePage path="/" />
          <LoginPage path="/login" />
        </Router>
      </PrimaryLayout>
    </ThemeProvider>
  );
}

export default App;
