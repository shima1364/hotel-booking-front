import React, { useContext } from "react";
import Counter from "../../components/Counter";
import { DataContext } from "../../context/dataContext";

import Dropdown from "react-bootstrap/Dropdown";

function SelectPeople(props) {
  const ctx = useContext(DataContext);
  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle variant="light" id="dropdown-autoclose-outside" className="rounded-1 py-2 me-2 w-100">
        {ctx.AdultCounter} Adult . {ctx.ChildrenCounter} Children .{" "}
        {ctx.RoomCounter} Room
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <div className="d-flex justify-content-between mb-2">
            <label className="ms-3 me-2 text-dark fs-5">Adult</label>
            <Counter default={ctx.AdultCounter} title={"Adult"} />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="d-flex justify-content-between mb-2">
            <label className="ms-3 me-2 text-dark fs-5">Children</label>
            <Counter default={ctx.ChildrenCounter} title={"Children"} />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          {" "}
          <div className="d-flex justify-content-between mb-2">
            <label className="ms-3 me-2 text-dark fs-5">Room</label>
            <Counter default={ctx.RoomCounter} title={"Room"} />
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SelectPeople;

