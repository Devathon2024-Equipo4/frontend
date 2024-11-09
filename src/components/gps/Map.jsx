import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useGpsStore } from "@/stores/gpsStore";

const MapContent = ({ position, name }) => {
  const map = useMap();

  useEffect(() => {
    if (map && position) {
      map.setView(position, 4); 
    }
  }, [position, map]);

  return (
    <>
      <Marker position={position}>
        <Popup>{name}</Popup>
      </Marker>
    </>
  );
};

export const Map = () => {
  const coordinates = useGpsStore((state) => state.coordinates);
  const [position, setPosition] = useState([51.505, -0.09]);
  const [popupName, setPopupName] = useState("");

  useEffect(() => {
    if (coordinates.length > 0) {
      const { lat, lon, name } = coordinates[0];

      if (lat && lon && name) {
        setPosition([lat, lon]);
        setPopupName(name);
      }
    }
  }, [coordinates]);

  return (
    <div className="h-[500px] w-[900px]">
      <MapContainer
        center={position}
        zoom={4}
        scrollWheelZoom={true}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.length > 0 && <MapContent position={position} name={popupName} />}
      </MapContainer>
    </div>
  );
};
