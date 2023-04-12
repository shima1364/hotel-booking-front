
import { Link } from "react-router-dom";


const HotelCard = ({ items }) => {

  return (
    <div className="my-3 border d-flex p-2 flex-column flex-lg-row">
      <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center">
        <img
          className="rounded-2 img-fluid"
          src={items.photos[0]}
          alt="hotel pic"
          style={{minHeight:'200px',objectFit:'cover'}}
        />
      </div>
      <div className="col-lg-8 col-12 d-flex mt-3 mt-lg-0">
        <div className="col-6">
          {" "}
          <div className="d-flex ms-3 flex-column">
            <h6>{items.name}</h6>
            <a>Address: {items.address}<span className="ms-3">{items.distance} km from center</span></a>
            <a href={items.location} target="_blank">
              Show on Map
            </a>
            <p>{items.type}</p>
            <p>{items.rooms}</p>
          </div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-between align-items-end">
        <span class="badge text-bg-primary">{items.rating}</span>
        <span class="badge text-bg-primary">duration</span>
        <span class="badge text-bg-danger fs-6">US${items.cheapestPrice}</span>
        <Link className="btn btn-info" to={`/hotels/${items._id}`}>See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
