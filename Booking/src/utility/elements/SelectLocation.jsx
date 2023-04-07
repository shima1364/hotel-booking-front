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
    <div className="DestParent d-flex justify-content-around">
      <span className="BedIcon">
        <FontAwesomeIcon icon={faBed} />
      </span>
      <input
        className="border-0 rounded-3 DestInput"
        type="text"
        placeholder="Where are you going?"
        ref={Location}
        onChange={DestinationHandler}
      />
    </div>
  );
}

export default SelectLocation;
