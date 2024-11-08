import { Toolbar } from "@/components/gps/Toolbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const GpsPage = () => {
  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)]">
        <Toolbar />
          <div className="h-full w-full">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={4}
            scrollWheelZoom={false}
            style={{
              height:"650px",
              width: "900px"
          }}
            
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          </div>
      </div>
    </>
  );
};

export default GpsPage;