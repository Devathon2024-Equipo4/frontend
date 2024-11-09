import { Toolbar } from "@/components/gps/Toolbar";

import { Recent } from "@/components/gps/Recent";
import { Map } from "@/components/gps/Map";

const GpsPage = () => {
  
  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)] flex flex-col ">
        <Toolbar />
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          <div className="flex justify-center ">
            <Recent />
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default GpsPage;
