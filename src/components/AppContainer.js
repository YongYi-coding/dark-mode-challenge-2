import React from "react";
import { useSelector } from "react-redux";

export default function AppContainer({ children }) {
  const { isDarkMode } = useSelector((state) => state.mode);

  return (
      <div className={!isDarkMode ? "app-container" : "dark-mode"}>
        {children}
      </div>
  );
}
