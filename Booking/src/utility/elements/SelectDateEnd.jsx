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
        className="border-0 me-2 rounded-1 w-100"
        type="date"
        defaultValue={ctx.FinalDate}
        ref={FinalDate}
        onChange={FinalDateHandler}
        style={{padding:'0.59rem 0.5rem'}}
      />
    </div>
  );
}

export default SelectDateEnd;


