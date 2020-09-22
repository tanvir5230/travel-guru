import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function MyMap({ hotels }) {
  const cenPos = hotels[0].position;
  return (
    <Map center={cenPos} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {hotels.map((hotel) => {
        const pos = hotel.position;
        console.log(hotel.position);
        return (
          <Marker position={pos}>
            <Popup>{hotel.name}</Popup>
          </Marker>
        );
      })}
    </Map>
  );
}
