import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/dataContext";

export default function Counter (props) {
  const ctx = useContext(DataContext);
  const [disable, setDisable] = useState(false);

  
  const increaseHandler = (title) => {
    if (title === "Adult") ctx.setAdultCounter(ctx.AdultCounter + 1);
    if (title === "Children") ctx.setChildrenCounter(ctx.ChildrenCounter + 1);
    if (title === "Room") ctx.setRoomCounter(ctx.RoomCounter + 1);
  };
  const decrementHandler = (title) => {
    if (title === "Adult") {ctx.setAdultCounter(ctx.AdultCounter - 1)};
    if (title === "Children") ctx.setChildrenCounter(ctx.ChildrenCounter - 1);
    if (title === "Room") ctx.setRoomCounter(ctx.RoomCounter - 1);
  };

  return (
    <div>
      <button
        onClick={() => increaseHandler(props.title)}
        className="btn border rounded-5 px-2 py-1"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <span className="mx-3 fs-5">{props.default}</span>
      <button
        disabled={disable}
        onClick={() => decrementHandler(props.title)}
        className="btn border rounded-5 px-2 py-1"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}
