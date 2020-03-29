import React from "react";
// import { ReactMarkdown } from "react-markdown";
// import MarkdownTest from "../markdown/test.md";
import markdownTest from "../markdown/test.md";

const ReactMarkdown = require("react-markdown");

const input = "# This is a header \n **Bold Text** \n Normal text";

export const MarkDown = () => {
  return (
    <div>
      <ReactMarkdown source={input} />
    </div>
  );
};
