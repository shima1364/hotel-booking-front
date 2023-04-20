import React, { useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "../App.css"
import { Icon } from "leaflet";
import { DataContext } from "../context/dataContext";

const Map = ({ hotels }) => {
  const customIcon = new Icon(
    {iconUrl:require("../dist/img/placeholder (2).png"),
    iconSize: [36,36]
    }
  )
  const [position, setPosition] = useState([]);
  const [mapCenter, setMapCenter] = useState([0,0]);
  const ctx = useContext(DataContext);
  useEffect(() => {
    setPosition(hotels.map((item)=>item.location));
  }, [hotels]);

  useEffect(() => {
    if (position && position.length > 0) {
      const lat = position.reduce((sum, item) => sum + item.lat, 0) / position.length;
      const lng = position.reduce((sum, item) => sum + item.lng, 0) / position.length;
      setMapCenter([lat, lng]);
    }
   
  }, [position]);
  
  return (
    <>
      {mapCenter[0] !== 0 ? (
        <MapContainer center={mapCenter} zoom={13} key={hotels.id}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      {position.map((marker) => (
        <Marker position={[marker.lat, marker.lng]} icon={customIcon}>
        </Marker>
      ))}
    </MapContainer>
      ): null}
    </>
  );
 
};

export default Map;
