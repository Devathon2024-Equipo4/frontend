import React from "react";

import HomepageCard from "../components/HomepageCard";

const HomePage = () => {
  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)] bg-gray pt-10 px-2 md:px-20">
        <h1 className=" text-stiletto text-6xl font-bold font-MountainsOfChristmas text-center">
          Dashboard Navidad
        </h1>

        <div className="max-w-7xl min-h-[75vh] mx-auto flex flex-wrap justify-evenly gap-10 content-evenly m-10">
          <HomepageCard 
            title={"Gps"}
            route={"/gps"}
            source={"/gps_icon.png"} />
          <HomepageCard
            title={"Organizador de renos"}
            route={"/reindeerOrg"}
            source={"/reeinder_icon.png"}
          />
          <HomepageCard
            title={"Clasificador de niños"}
            route={"/childrenSorter"}
            source={"/kid_icon.png"}
          />
          <HomepageCard
            title={"Lector de cartas"}
            route={"/letterLector"}
            source={"/letter_icon.png"}
          />
          <HomepageCard
            title={"Registro de duendes"}
            route={"/elfRegistry"}
            source={"/elf_icon.png"}
          />
          <HomepageCard
            title={"Contador de calorías"}
            route={"/caloryCounter"}
            source={"/cookies_icon.png"}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
