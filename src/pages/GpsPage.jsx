import { Toolbar } from "@/components/gps/Toolbar";

import { Recent } from "@/components/gps/Recent";
import { Map } from "@/components/gps/Map";
import ButtonBack from "@/components/ButtonBack";

const GpsPage = () => {
  
  return (
    <>
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray font-DynaPuff">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-8">
        <h1 className="text-stiletto text-6xl font-MountainsOfChristmas pt-10 text-center">
          GPS
        </h1>
        <ButtonBack />
        <div className="h-[70vh] min-w-[300px] grid auto-rows-auto lg:grid-rows-12 lg:grid-cols-4 my-16 bg-akaroa border-stiletto shadow-stiletto/50 shadow-lg p-2 rounded-lg border">
        <div className="grid row-span-1" >
            <Toolbar/>
        </div>
        <div className="grid row-span-1 lg:row-span-11 lg:row-start-2 overflow-y-auto overflow-x-hidden">
            <Recent />
        </div>
        <div className="grid row-span-6 row-start-2 lg:row-span-12 lg:col-span-3">
            <Map />
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GpsPage;
