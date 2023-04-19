import React, { useState, useEffect } from "react";
import NavbarApp from "../layouts/Navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ReservationHistory = () => {
  const userId = sessionStorage.getItem("userId");
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

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container">
      <NavbarApp />
      <div className="row mt-3">
        {userHistory.map((items) => (
          <div className="col-md-6 mb-4" key={items.id}>
            <Card>
              <Card.Body>
                <Card.Title>{items.hotelName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{items.numberOfRooms} rooms</Card.Subtitle>
                <Card.Text>
                  Your reservation from {formatDate(items.checkInDate)} to {formatDate(items.checkOutDate)} was completed.
                </Card.Text>
                <Link to={`/hotels/${items.hotel}`}>
                  <Button variant="primary">View hotel details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationHistory;

