import React, { useContext } from "react";
import SelectLocation from "./../utility/elements/SelectLocation";
import SelectDateStart from "./../utility/elements/SelectDateStart";
import SelectDateEnd from "./../utility/elements/SelectDateEnd";
import SelectPeople from "./../utility/elements/SelectPeople";
import Modal from "react-bootstrap/Modal";
import { DataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <SelectPeople hide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

function Search(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const ctx = useContext(DataContext);
  const navigate = useNavigate();
  const sendDataHandler = () => {
    const SendData = {
      Destination: ctx.Destination,
      StartDate: ctx.StartDate,
      FinalDate: ctx.FinalDate,
      Adult: ctx.AdultCounter,
      Children: ctx.ChildrenCounter,
      Room: ctx.RoomCounter,
    };
    if (ctx.Destination === undefined ) {
      toast.error("Please enter your destination", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      navigate("/hotels");
    }
  };

  const DestinationHandler = (dest) => {
    ctx.setDestination(dest);
  };

  return (
    <div className="container mt-3 d-flex d-lg-flex justify-content-center align-items-center">
      <ToastContainer />
      <div
        className="py-2 ps-3 ps-lg-0 align-items-start align-items-lg-center rounded-3 mb-3 d-flex flex-column flex-lg-row justify-content-evenly col-12"
        style={{ backgroundColor: "#FFB700", minWidth: "65%" }}
      >
        <div className="">
          <SelectLocation select={DestinationHandler}/>
        </div>
        <div className="my-2">
          <SelectDateStart />
        </div>
        <div>
          <SelectDateEnd />
        </div>
        <div className="my-2">
          <SelectPeople />
        </div>
        <button onClick={sendDataHandler} className="btn btn-primary py-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
