import React from "react";

import HomepageCard from "../components/HomepageCard";

const HomePage = () => {
  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)] bg-gray pt-10 px-20">
        <h1 className=" text-stiletto font-MountainsOfChristmas text-center">
          Dashboard navidad
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-10 items-center mt-10">
          <HomepageCard
            title={"Gps navideño"}
            route={"/gps"}
            source={"/gps_icon.png"}
          />
          <HomepageCard
            title={"Organizador de renos"}
            route={"/reindeerOrg"}
            source={"/reeinder_icon.png"}
          />
          <HomepageCard
            title={"Clasificador de niños"}
            route={"/childrenClassificator"}
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
