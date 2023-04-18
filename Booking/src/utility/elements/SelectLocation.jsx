import { useRef, useContext } from "react";
import { DataContext } from "./../../context/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import "../sass/SelectLocation.scss";

function SelectLocation(props) {
  const Location = useRef();
  const ctx = useContext(DataContext);
  const DestinationHandler = () => {
    ctx.setDestination(Location.current.value);
  };
  return (
    <div className="DestParent d-flex justify-content-around rounded-1 me-2 w-100">
      <span className="BedIcon">
        <FontAwesomeIcon icon={faBed} />
      </span>
      <input
        className="border-0 ps-4 DestInput"
        type="text"
        placeholder="Destination"
        ref={Location}
        onChange={DestinationHandler}
        value={ctx.Destination}
      />
    </div>
  );
}

export default SelectLocation;
