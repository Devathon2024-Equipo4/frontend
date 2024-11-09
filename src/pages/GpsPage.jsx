import { Toolbar } from "@/components/gps/Toolbar";
import { MapContainer, TileLayer } from "react-leaflet";
import { Recent } from "@/components/gps/Recent";

const GpsPage = () => {
  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)] flex flex-col ">
        <Toolbar />
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          <div className="flex justify-center ">
            <Recent />
            <div className="h-[650px] w-[900px]">
              <MapContainer
                center={[51.505, -0.09]}
                zoom={4}
                scrollWheelZoom={false}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GpsPage;
