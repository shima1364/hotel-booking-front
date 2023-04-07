import { useContext, useRef } from "react";
import "../sass/SelectDate.scss";
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
        className="border-0 p-2 rounded-3"
        type="date"
        defaultValue={ctx.StartDate}
        ref={StartDate}
        onChange={StartDateHandler}
      />
    </div>
  );
}

export default SelectDateStart;
