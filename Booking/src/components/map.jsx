import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "../App.css"



const Map = ({ hotels }) => {
 
 
  // const customIcon = new Icon(
  //   {iconUrl:require("../dist/img/placeholder.png"),
  //   iconSize: [36,36]
  //   }
  // )
  const [position, setPosition] = useState([]);

  useEffect(() => {
    setPosition(hotels.map((item)=>item.location));
  }, [hotels]);

  // const positionCenter= [position[0].lat,position[0].lng]

  // console.log([position[0].lat,position[0].lng]);

  return (
    <div>
     <MapContainer center={[52.3668, 4.9044]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      {position.map(marker => (
        <Marker  position={[marker.lat, marker.lng]}>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
 
};

export default Map;
