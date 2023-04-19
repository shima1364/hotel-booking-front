import React from "react";

import { useState, useEffect} from "react";
import NavbarApp from "../layouts/Navbar";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



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
      {userHistory.map((items) => (
      <Card style={{ width: '18rem' }} key={items.id}>
      <Card.Body>
        <Card.Title>{items.hotelName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{items.numberOfRooms}</Card.Subtitle>
        <Card.Text>
          your resevation from {items.checkInDate} to {items.checkOutDate}  was complited
        </Card.Text>
        <Link to={`/hotels/${items.hotel}`}>Card Link</Link>
      </Card.Body>
    </Card>))}
    
    </div>
  );
};

export default ReservationHistory;
