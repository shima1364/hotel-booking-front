import React, { useContext, useRef } from "react";
import { DataContext } from "../../context/dataContext";

function SelectDateEnd(props) {

  const FinalDate = useRef();
  const ctx = useContext(DataContext);
  const FinalDateHandler = () => {
    ctx.setFinalDate(FinalDate.current.value);
  };

  return (
    <div>
      <input
        className="border-0 p-2 rounded-3"
        type="date"
        defaultValue={ctx.FinalDate}
        ref={FinalDate}
        onChange={FinalDateHandler}
      />
    </div>
  );
}

export default SelectDateEnd;


