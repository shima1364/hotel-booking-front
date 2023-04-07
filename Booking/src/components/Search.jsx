import React, { useContext } from "react";
import SelectLocation from "./../utility/elements/SelectLocation";
import SelectDateStart from "./../utility/elements/SelectDateStart";
import SelectDateEnd from "./../utility/elements/SelectDateEnd";
import SelectPeople from "./../utility/elements/SelectPeople";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";

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
const navigate = useNavigate()
  const sendDataHandler = () => {
    const SendData = {
      Destination: ctx.Destination,
      StartDate: ctx.StartDate,
      FinalDate: ctx.FinalDate,
      Adult: ctx.AdultCounter,
      Children: ctx.ChildrenCounter,
      Room: ctx.RoomCounter
    };

    navigate('/hotels')
  };

  return (
    <div className="container mt-3 d-flex d-lg-block">
      <div className="row bg-danger py-1 rounded-3 mb-3 text-center d-flex flex-column flex-lg-row">
        <div className="col-4 d-flex justify-content-end">
          <SelectLocation />
        </div>
        <div className="col-2">
          <SelectDateStart />
        </div>
        <div className="col-2">
          <SelectDateEnd />
        </div>
        <div className="col-3">
          <Button variant="light" onClick={() => setModalShow(true)}>
            {ctx.AdultCounter} Adult . {ctx.ChildrenCounter} Children .{" "}
            {ctx.RoomCounter} Room
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="col-1">
          <button onClick={sendDataHandler} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
