import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import { ThemeProvider } from "@material-ui/core";
import theme from "./styling/theme";

import {
  NotesListPage,
  NoteDetailPage,
  LoginPage,
  CreateNotePage
} from "./pages";
import { PrimaryLayout } from "./components/Global/PrimaryLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimaryLayout>
        <Router>
          <NotesListPage path="/" />
          <NoteDetailPage path="/notes/:noteId" />
          <CreateNotePage path="/notes/create" />
          <LoginPage path="/login" />
        </Router>
      </PrimaryLayout>
    </ThemeProvider>
  );
}

export default App;
