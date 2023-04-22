import React, { useEffect } from "react";
import NavbarApp from "../layouts/Navbar";
import Header from "./../layouts/Header";
import Search from "../components/Search";
import BackPic from '../dist/img/beach.webp'
import styles from '../utility/sass/LandingPage.module.scss'
import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import Carousel from "../components/Carousel";

function LandingPage(props) {

const ctx = useContext(DataContext)

async function fetchData() {
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}api/hotels`);
  const data = await response.json();
  ctx.setHotelAPI(data);
}

useEffect(() => {
  fetchData();
},[]);


  return (
    <div>
      <NavbarApp />
      <Header />
      <Search />
      <Carousel image={ctx.HotelAPI}/>
    </div>
  );
}

export default LandingPage;
