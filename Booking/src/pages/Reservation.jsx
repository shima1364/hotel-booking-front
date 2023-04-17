import jwt from'jsonwebtoken';
import React from "react";
import NavbarApp from "../layouts/Navbar";
import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

function Reservation () {
const ctx = useContext(DataContext);
const HotelId = ctx.reservedHotel;
const token = ctx.token;
decoded_token = jwt.decode(token, verify=False)
user_id = decoded_token['userId']
(console.log(user_id))
useEffect(() => {
            axios  .post (`http://localhost:8800/api/users/${user_id}/reservations`, {  });
 
  }, [id])
return
(<>
</>)
 }

 export default Reservation