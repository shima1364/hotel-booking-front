import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "../App.css"
import { Icon } from "leaflet";



const Map = ({ hotels }) => {
  const customIcon = new Icon(
    {iconUrl:require("../dist/img/placeholder (2).png"),
    iconSize: [36,36]
    }
  )
  const [position, setPosition] = useState([]);
  const [mapCenter, setMapCenter] = useState([0,0]);

  useEffect(() => {
    setPosition(hotels.map((item)=>item.location));
    if (position && position.length > 0)setMapCenter([position[0].lat, position[0].lng])
   
  }, []);
  console.log(hotels);
  console.log(mapCenter);


  return (
    <div>
     <MapContainer center={[52.36, 4.8908]} zoom={18}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      {position.map(marker => (
        <Marker  position={[marker.lat, marker.lng]} icon={customIcon}>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
 
};

export default Map;
