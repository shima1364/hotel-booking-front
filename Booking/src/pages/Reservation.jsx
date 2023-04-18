import React from "react";

import { useState, useEffect, useContext } from "react";
import NavbarApp from "../layouts/Navbar";


const ReservationHistory = () => {
    const userId = sessionStorage.getItem("userId");
    console.log(userId);
  const [userHistory, setUserHistiry]= useState([]);

  useEffect(() => {

    const getEntryById = async () => {
      try {
        const response = await fetch(
          `http://localhost:8800/api/users/${userId}/reservations`
        );
        const entries = await response.json();
        setUserHistiry(entries);
      } catch (error) {
        console.error(error);
      }
    };
    getEntryById();
  }, [userId]);
  console.log(userHistory);

 

  return (
    <div>
      <NavbarApp />
    
    </div>
  );
};

export default ReservationHistory;
