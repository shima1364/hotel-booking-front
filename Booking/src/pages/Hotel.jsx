import React from 'react';
import moment from 'moment';
import "./hotel.css";
import Header from "../layouts/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight, 
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect, useContext} from "react";
import NavbarApp from "../layouts/Navbar";
import { useLocation } from "react-router-dom";
import { DataContext } from "../context/dataContext";

import axios from "axios";



const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [hotelPost, setHotelPost]= useState([]);
  const ctx = useContext(DataContext);
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const token = ctx.token;
  const userId = sessionStorage.getItem('userId');
  console.log(userId);
  console.log(hotelId);
  const [hotelReservation, setHotelReservation] = useState({
    hotelId: "",
    checkInDate: "",
    checkOutDate:"",
    numberOfRooms:"",
    hotelName:""
    });

  function DateDifference({ startDate, endDate }) {
    try {
      const start = moment(startDate, 'YYYY-MM-DD');
      const end = moment(endDate, 'YYYY-MM-DD');
  
      if (!start.isValid() || !end.isValid()) {
        throw new Error('Invalid date format');
      }
  
      const days = end.diff(start, 'days');
  
      return (days
      );
    } catch (error) {
      console.error('Error calculating date difference:', error);
      return null;
    }
  }

  const vacation = DateDifference({startDate:ctx.StartDate, endDate:ctx.FinalDate});
  console.log(ctx.StartDate, ctx.FinalDate)
  const room = ctx.RoomCounter
  
  
  useEffect(() => {
    const getEntryById = async () => {
        try {
            const response = await fetch(`http://localhost:8800/api/hotels/${hotelId}`);
            const entries = await response.json();
            setHotelPost(entries);
          } catch (error) {
            console.error(error);
          }
    };
    getEntryById()
  }, [hotelId])
  console.log(hotelPost)
  

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 4 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  const handleClick = () => {
    ctx.setReservedHotel(hotelId);
    
    setHotelReservation({ hotelId: hotelId,
      checkInDate: ctx.StartDate,
      checkOutDate:ctx.FinalDate,
      numberOfRooms:room,
      hotelName: hotelPost.name});
      console.log(hotelReservation);
    axios.post(`http://localhost:8800/api/users/${userId}/reservations`, hotelReservation )
    .then(response => {
     console.log(response);
      // handle response from API
    }).catch(error => {
      console.log(error);
      // handle error
    });};
  

  return (
    <div>
      <NavbarApp />
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
              <img src={hotelPost.photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{hotelPost.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotelPost.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {hotelPost.distance} from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${hotelPost.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotelPost.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {vacation}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
              <b>${room *vacation * hotelPost.cheapestPrice}</b> ( {room} Rooms & {vacation} nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
              {/* <Link variant="primary" to={`/reservation/${user_id}`} onClick={()=>ctx.setReservedHotel(id)}>Reserve or Book Now!</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;