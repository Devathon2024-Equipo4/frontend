import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useGpsStore } from "@/stores/gpsStore";

const MapContent = ({ position, name }) => {
  const map = useMap();

  useEffect(() => {
    if (map && position) {
      map.setView(position, 10); 
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
  const position = useGpsStore((state) => state.position);
  const setPosition = useGpsStore((state) => state.setPosition);
  
  const [popupName, setPopupName] = useState("London");
  

  useEffect(() => {
    if (Array.isArray(coordinates) && coordinates.length > 0 ) {
      const { lat, lon, name } = coordinates[0];

      if (lat && lon && name) {
        setPosition([lat, lon]);
        setPopupName(name);
        
      }
    }
  }, [coordinates]);

  return (
    <div className="h-[500px] w-[900px] mr-4">
      <MapContainer
        center={position}
        zoom={10}
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
        {Array.isArray(coordinates) && coordinates.length > 0 && <MapContent position={position} name={popupName} />}
      </MapContainer>
    </div>
  );
};
