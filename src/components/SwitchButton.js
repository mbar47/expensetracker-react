import React from "react";

export const SwitchButton = ({ displayGraph, setDisplayGraph }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    setDisplayGraph(!displayGraph);
  };
  return (
    <>
      <button className="btn" onClick={(e) => handleOnClick(e)}>
        {displayGraph ? "Show list" : "Show graph"}
      </button>
    </>
  );
};
