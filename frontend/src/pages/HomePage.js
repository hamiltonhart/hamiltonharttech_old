import React from "react";
import { Link } from "@reach/router";

import { MarkDown } from "../components/MarkDown";

export const HomePage = () => {
  return (
    <div>
      Home Page
      <Link to="/login">Login</Link>
    </div>
  );
};
