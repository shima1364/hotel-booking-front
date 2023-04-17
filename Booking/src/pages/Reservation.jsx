import jwt from 'jsonwebtoken';
import React, { useEffect } from "react";
import NavbarApp from "../layouts/Navbar";
import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

function Reservation() {
  const ctx = useContext(DataContext);
  const HotelId = ctx.reservedHotel;
  const token = ctx.token;
  const decoded_token = jwt.decode(token, verify=false);
  const user_id = decoded_token['userId'];

  useEffect(() => {
    axios.post(`http://localhost:8800/api/users/${user_id}/reservations`, {
      user: {user_id},
      hotel: {HotelId},
      checkInDate: ctx.StartDate,
      checkOutDate: ctx.FinalDate,
      numberOfRooms: ctx.RoomCounter,
    }).then(response => {
      console.log(response);
      // handle response from API
    }).catch(error => {
      console.log(error);
      // handle error
    });
  }, [HotelId, ctx.StartDate, ctx.FinalDate, ctx.RoomCounter]);

  return (
    <>
      <NavbarApp />
      {/* your JSX code here */}
    </>
  );
}

export default Reservation;
