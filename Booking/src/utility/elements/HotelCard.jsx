const HotelCard = ({items}) => {
  return (
    <div className="my-3 border d-flex p-2">
      <div className="col-4 d-flex align-items-center">
        <img width='200' height='150' className="rounded-2" src={items.photos[0]} alt="hotel pic" />
      </div>
      <div className="col-8 ms-3">
        <div>
            <h6>{items.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
