import { useContext, useRef } from "react";
import { DataContext } from "../../context/dataContext";

function SelectDateStart(props) {
 

  const StartDate = useRef();
  const ctx = useContext(DataContext);
  const StartDateHandler = () => {
    ctx.setStartDate(StartDate.current.value);
  };

  return (
    <div>
      <input
        className="border-0 rounded-1 me-2 w-100"
        type="date"
        defaultValue={ctx.StartDate}
        ref={StartDate}
        onChange={StartDateHandler}
        style={{padding:'0.59rem 0.5rem'}}
      />
    </div>
  );
}

export default SelectDateStart;
