import React, { useContext } from "react";
import Counter from "../../components/Counter";
import { DataContext } from "../../context/dataContext";

function SelectPeople(props) {
  const ctx = useContext(DataContext);
  // const [people, setPeople] = useState([
  //   { title: "Adults", Value: ctx.AdultCounter },
  //   { title: "Children", Value: ctx.ChildrenCounter },
  //   { title: "Rooms", Value: ctx.RoomCounter },
  // ]);



  return (
    <div
      className="d-lg-block d-flex flex-column align-items-start"
    >
      <div className="d-flex justify-content-between mb-2">
        <label className="ms-3 me-2 text-dark fs-5">Adult</label>
        <Counter default={ctx.AdultCounter} title={'Adult'}/>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <label className="ms-3 me-2 text-dark fs-5">Children</label>
        <Counter default={ctx.ChildrenCounter} title={'Children'}/>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <label className="ms-3 me-2 text-dark fs-5">Room</label>
        <Counter default={ctx.RoomCounter} title={'Room'}/>
      </div>

      <button onClick={props.hide} type="submit" className="mt-3 btn btn-info">
        Done
      </button>
    </div>
  );
}

export default SelectPeople;
