import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useGpsStore } from "@/stores/gpsStore";

const MapContent = ({ position, name }) => {
  const map = useMap();

  useEffect(() => {
    if (map && position) {
      map.setView(position, 12); 
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
  const ipDetails = useGpsStore((state) => state.ipDetails);
  
  const [popupName, setPopupName] = useState("London");
  

  useEffect(() => {
    if (Array.isArray(coordinates) && coordinates.length > 0 ) {
      const { lat, lon, name } = coordinates[0];
      
      if (lat && lon && name) {
        setPosition([lat, lon]);
        setPopupName(name);
        
      }
    }else if(ipDetails.latitude && ipDetails.longitude && ipDetails.city) {
      setPosition([ipDetails.latitude, ipDetails.longitude]);
      setPopupName(ipDetails.city);
    }
  }, [coordinates, setPosition, setPopupName, ipDetails]);

  return (
    <div className="min-h-[200px] min-w-[260px] m-4 border rounded-sm">
      <MapContainer
        center={position}
        zoom={12}
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
