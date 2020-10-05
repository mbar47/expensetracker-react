import React from "react";

export const SwitchButton = ({ displayGraph, setDisplayGraph }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    setDisplayGraph(!displayGraph);
  };
  return (
    <>
      <button className="btn" onClick={(e) => handleOnClick(e)}>
        {displayGraph ? "Press for list" : "Press for graph"}
      </button>
    </>
  );
};
