import React from "react";

export const HHTLogo = ({ classes }) => {
  return (
    <svg
      width="105"
      height="88"
      viewBox="0 0 105 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <rect x="47" width="11" height="88" fill="#C4C4C4" />
      <rect y="15" width="11" height="60" fill="#C4C4C4" />
      <path d="M31 15H42V87.5L31 75V15Z" fill="#C4C4C4" />
      <rect
        y="51"
        width="11"
        height="42"
        transform="rotate(-90 0 51)"
        fill="#C4C4C4"
      />
      <path d="M63 15H74V75L63 87V15Z" fill="#C4C4C4" />
      <rect x="94" y="15" width="11" height="60" fill="#C4C4C4" />
      <rect
        x="63"
        y="51"
        width="11"
        height="42"
        transform="rotate(-90 63 51)"
        fill="#C4C4C4"
      />
      <path d="M0 11L11 0L94 0L105 11L0 11Z" fill="#C4C4C4" />
    </svg>
  );
};
