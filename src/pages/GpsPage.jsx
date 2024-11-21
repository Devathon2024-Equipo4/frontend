import { Toolbar } from "@/components/gps/Toolbar";

import { Recent } from "@/components/gps/Recent";
import { Map } from "@/components/gps/Map";
import ButtonBack from "@/components/ButtonBack";

const GpsPage = () => {
  
  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)] flex flex-col bg-gray ">
        <h1 className="my-10 text-stiletto text-6xl font-bold font-MountainsOfChristmas text-center">
          GPS
        </h1>
        <Toolbar />
        <ButtonBack classNameBtn="ml-10" />
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
