import React, { useState } from "react";

import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const SearchNotes = ({
  fullWidth,
  data,
  setSearchResults,
  searchValue,
  setSearchValue,
}) => {
  const performSearch = (e, setSearchValue, setSearchResults, data) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
    const returnResults = [];
    console.log("Data", data);
    data.notes.map((note) => {
      note.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 &&
        returnResults.push(note);
      console.log(returnResults);
    });
    setSearchResults(returnResults);
  };

  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      fullWidth={fullWidth}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => performSearch(e, setSearchValue, setSearchResults, data)}
      value={searchValue}
    />
  );
};
