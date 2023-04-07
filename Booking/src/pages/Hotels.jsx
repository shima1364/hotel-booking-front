import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";
import NavbarApp from "../layouts/Navbar";
import SelectLocation from "../utility/elements/SelectLocation";
import SelectDateStart from "../utility/elements/SelectDateStart";
import SelectDateEnd from "../utility/elements/SelectDateEnd";
import SelectPeople from "../utility/elements/SelectPeople";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HotelCard from "../utility/elements/HotelCard";

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

export default function Hotels(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [hotels, setHotels] = useState([]);
  const ctx = useContext(DataContext);
  console.log(ctx.HotelAPI);

  useEffect(() => {
    setHotels(ctx.HotelAPI.filter((items) => items.city === ctx.Destination));
  }, []);

  console.log(hotels);
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

    navigate("/hotels");
  };

  return (
    <div>
      <NavbarApp />
      <div className="container mt-4 d-flex">
        <div
          className="col-3 bg-danger py-3 ps-2 d-flex justify-content-evenly rounded-4 align-items-start flex-column"
          style={{ height: "50vh" }}
        >
          <SelectLocation />
          <SelectDateStart />
          <SelectDateEnd />
          <Button variant="light" onClick={() => setModalShow(true)}>
            {ctx.AdultCounter} Adult . {ctx.ChildrenCounter} Children .{" "}
            {ctx.RoomCounter} Room
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <button onClick={sendDataHandler} className="btn btn-primary">
            Search
          </button>
        </div>
        <div className="col-1"></div>
        <div className="col-8">
          {hotels.map(items => <div key={items._id}><HotelCard items={items}/></div> )}
        </div>
      </div>
    </div>
  );
}
