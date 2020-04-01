import React, { useState } from "react";

export const useToggle = () => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };
  return { on, toggle };
};
