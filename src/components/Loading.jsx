import React, { useContext } from "react";
import logo from "../medias/portfolio-logo-final.svg";
import ThemeContext from "../global/ThemeContext";

export default function Loading() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={`loading-screen ${
        theme === "dark" ? "bg-background" : "bg-white"
      }`}
    >
      <div className="loader"></div>
    </div>
  );
}
