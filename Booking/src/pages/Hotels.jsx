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
import Map from './../components/map';
import Filter from "../components/filter";

export default function Hotels(props) {
  const [hotels, setHotels] = useState([]);
  const [Type, setType] = useState();
  // function MyVerticallyCenteredModal(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="sm"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Body>
         
  //       </Modal.Body>
  //     </Modal>
  //   );
  // }
  // const [modalShow, setModalShow] = React.useState(false);

  const ctx = useContext(DataContext);

  useEffect(() => {
    ctx.setHotels(ctx.HotelAPI.filter((items) => items.city.toLowerCase() === ctx.Destination.toLowerCase() && (Type === undefined ? true : items.type === Type) ));
  }, []);


  const navigateToHotels = useNavigate();

  const sendDataHandler = () => {
    const SendData = {
      Destination: ctx.Destination,
      StartDate: ctx.StartDate,
      FinalDate: ctx.FinalDate,
      Adult: ctx.AdultCounter,
      Children: ctx.ChildrenCounter,
      Room: ctx.RoomCounter,
    };

    navigateToHotels("/hotels");
  };
  const filterdItem=(item)=>{
    setType(item)
  }
  return (
    <div>
      <NavbarApp />
      <div className="container mt-4 d-flex flex-column flex-lg-row">
        <div className="d-flex col-12 col-lg-3 flex-column">
          <div
            className=" bg-danger py-3 ps-2 d-flex justify-content-evenly rounded-4 align-items-start flex-column"
            style={{ height: "50vh" }}
          >
            <SelectLocation />
            <SelectDateStart />
            <SelectDateEnd />
            <SelectPeople />
            <button onClick={sendDataHandler} className="btn btn-primary">
              Search
            </button>
          </div>
          <div className="mt-3 h-75"><Map hotels={ctx.hotels}/></div>
          {/* <Filter handleFilter={filterdItem}/> */}
        </div>
        <div className="col-1"></div>
        <div className="col-lg-8 col-12 mt-3">
          <div className="d-flex justify-content-between">
            <h3>
              {ctx.Destination} : {ctx.hotels.length} properties found
            </h3>
            {/* <Button
              onClick={() => setModalShow(true)}
              className="btn btn-primary"
            >
              Show on Map
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            /> */}
          </div>
          {ctx.hotels.map((items) => (
            <div key={items._id}>
              <HotelCard items={items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
