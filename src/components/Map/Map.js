import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import classes from "./Map.module.css";

export default function Map({ lat, lon }) {
  return (
    <div className={classes.map}>
      <MapContainer
        className={classes["markercluster-map"]}
        center={[lat, lon]}
        zoom={5}
        maxZoom={18}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MarkerClusterGroup>
          <Marker position={[lat, lon]} />
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
