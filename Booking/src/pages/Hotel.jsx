import React from "react";
import moment from "moment";
import "./hotel.css";
import Header from "../layouts/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import NavbarApp from "../layouts/Navbar";
import { json, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [hotelPost, setHotelPost] = useState([]);
  const ctx = useContext(DataContext);
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const token = ctx.token;
  const [user_Id, setUser_Id]= useState();
  const navigateToReservation = useNavigate();
  const navigateToSignin = useNavigate();
  console.log(hotelId);
  // const [hotelReservation, setHotelReservation] = useState({
  //   hotelId: "",
  //   checkInDate: "",
  //   checkOutDate: "",
  //   numberOfRooms: "",
  //   hotelName: "",
  // });
   

  function DateDifference({ startDate, endDate }) {
    try {
      const start = moment(startDate, "YYYY-MM-DD");
      const end = moment(endDate, "YYYY-MM-DD");

      if (!start.isValid() || !end.isValid()) {
        throw new Error("Invalid date format");
      }

      const days = end.diff(start, "days");

      return days;
    } catch (error) {
      console.error("Error calculating date difference:", error);
      return null;
    }
  }

  const vacation = DateDifference({
    startDate: ctx.StartDate,
    endDate: ctx.FinalDate,
  });
  console.log(ctx.StartDate, ctx.FinalDate);
  const room = ctx.RoomCounter;

  useEffect(() => {
    setUser_Id (sessionStorage.getItem("userId"));
    const getEntryById = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}api/hotels/${hotelId}`
        );
        const entries = await response.json();
        setHotelPost(entries);
      } catch (error) {
        console.error(error);
      }
    };
    getEntryById();
  }, [hotelId]);
  console.log(hotelPost);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    ctx.setReservedHotel(hotelId);

    if (ctx.token === undefined) {
      toast.error("Log in to your account", { position: toast.POSITION.TOP_LEFT });
      setTimeout(() => {
        navigateToSignin("/signin");
      }, 5000);
    } else {
     const body= {
        hotelId: hotelId,
        checkInDate: ctx.StartDate,
        checkOutDate: ctx.FinalDate,
        numberOfRooms: room,
        hotelName: hotelPost.name,
      };
      const response = await axios
        .post(
          `${process.env.REACT_APP_API_ENDPOINT}api/users/${user_Id}/reservations`,
          {
            hotelId: hotelId,
            checkInDate: ctx.StartDate,
            checkOutDate: ctx.FinalDate,
            numberOfRooms: room,
            hotelName: hotelPost.name,
          }

        )
        .then((response) => {
          console.log(response);
          // handle response from API
          toast.success("Your Reservation has been Successful", {
            position: toast.POSITION.TOP_CENTER,
          })
        }
       )
        .catch((error) => {
          console.log(error);
          // handle error
        });
     ;
      
      setTimeout(() => {
        navigateToReservation("/reservation");
      }, 5000);
    }
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "1") {
      newSlideNumber =
        slideNumber === 0
          ? Number(hotelPost.photos.length) - 1
          : slideNumber - 1;
    } else {
      newSlideNumber =
        slideNumber === Number(hotelPost.photos.length) - 1
          ? 0
          : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <NavbarApp />
      <ToastContainer />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={hotelPost.photos[slideNumber]}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <Link variant="primary" to={`/reservation`}>
            hostory
          </Link>
          <h1 className="hotelTitle">{hotelPost.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotelPost.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {hotelPost.distance} from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${hotelPost.cheapestPrice} at this property and get
            a free airport taxi
          </span>
          <div className="hotelImages container">
            <div className="row d-flex flex-lg-row flex-column">
              {hotelPost.photos?.map((photo, i) => (
                <img
                  key={i}
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="mt-3 hotelImg col-12 col-lg-6"
                />
              ))}
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
                cum blanditiis. Corrupti qui esse id, quaerat voluptatibus fugit
                alias possimus quae cupiditate repudiandae in at eius assumenda
                minus sit a, minima officiis velit. Qui dolorum laudantium quas
                reiciendis tempora molestiae nihil veniam. Animi, culpa
                inventore alias soluta sapiente sit nisi.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {vacation}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h6>
                <b>${room * vacation * hotelPost.cheapestPrice}</b> ( {room}{" "}
                Rooms & {vacation} nights)
              </h6>
              <button type="button" onClick={(e) => handleClick(e)}>Reserve or Book Now!</button>
              {/* <Link variant="primary" to={`/reservation/${user_id}`} onClick={()=>ctx.setReservedHotel(id)}>Reserve or Book Now!</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
