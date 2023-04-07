import React, { useEffect } from "react";
import NavbarApp from "../layouts/Navbar";
import Header from "./../layouts/Header";
import Search from "../components/Search";
import BackPic from '../dist/img/beach.webp'
import styles from '../utility/sass/LandingPage.module.scss'
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

function LandingPage(props) {

const ctx = useContext(DataContext)

async function fetchData() {
  const response = await fetch("http://localhost:8800/api/hotels");
  const data = await response.json();
  ctx.setHotelAPI(data);
}

useEffect(() => {
  fetchData();
});


  return (
    <div>
        <img className={styles.BackPic} src={BackPic} alt="" />
      <NavbarApp />
      <Header />
      <Search />
    </div>
  );
}

export default LandingPage;
