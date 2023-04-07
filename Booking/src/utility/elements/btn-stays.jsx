import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

const BtnStays = () => {
  return (
    <>
      <button className="btn border rounded-5 text-white py-2 px-3">
        <FontAwesomeIcon icon={faBed} /> Stays
      </button>
    </>
  );
};

export default BtnStays;
