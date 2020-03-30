import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { NotesListPage, LoginPage } from "./pages";
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
          <NotesListPage path="/" />
          <LoginPage path="/login" />
        </Router>
      </PrimaryLayout>
    </ThemeProvider>
  );
}

export default App;
