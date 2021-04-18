import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { setMode } from "../actions/modeAction";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.mode);

  const handleModeClick = () => {
    dispatch(setMode());
    console.log(isDarkMode? !isDarkMode : isDarkMode)
  };

  return (
    <button
      onClick={() => handleModeClick()}
      className="app__dark-mode-btn icon level-right"
    >
      <FontAwesomeIcon
        icon={!isDarkMode ? faMoon : faSun}
        color={!isDarkMode ? "#4D5B6B" : "#FFA500"}
      />
    </button>
  );
}
