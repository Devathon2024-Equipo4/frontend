import React from "react";

import HomepageCard from "../components/HomepageCard";

const HomePage = () => {
  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)] bg-gray pt-10 px-20">
        <h1 className=" text-stiletto text-3xl font-bold font-MountainsOfChristmas text-center">
          Dashboard Navidad
        </h1>

        <div className="flex flex-row flex-wrap justify-between gap-10 items-start mt-10">
          <HomepageCard title={"Gps"} route={"/gps"} />
          <HomepageCard title={"Organizador de renos"} route={"/reindeerOrg"} />
          <HomepageCard title={"Clasificador de niños"} route={"/childrenClassificator"} />
          <HomepageCard title={"Lector de cartas"} route={"/letterLector"} />
          <HomepageCard title={"Registro de duendes"} route={"/elfRegistry"} />
          <HomepageCard title={"Contador de calorías"} route={"/caloryCounter"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
