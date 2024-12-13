import React from "react";
import { Link } from "react-router-dom";
import SantaHat from "@/assets/santa-hat.png";

const HomepageCard = ({ route, title, source }) => {
  return (
    <div className="relative mb-4 border border-transparent rounded-lg py-5 px-4 w-96 min-w-[250px] text-center text-white bg-gradient-to-b from-[#f12828] to-[#a00332] bg-gradient-to-b from-[#ae0034] to-[#6f094c] bg-clip-padding bg-origin-padding shadow-[inset_0_1px_rgba(255,255,255,0.25),inset_0_-1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.25)] transition duration-200 will-change-transform active:scale-95 active:brightness-75 hover:scale-105">
      <Link to={route}>
        <div className="flex flex-col items-center">
          <img src={`/img${source}`} alt="module" className=" h-28" />
          <p className="font-DynaPuff text-white text-2xl text-center">
            {title}
          </p>
        </div>
      </Link>
      <img
        className="absolute -top-5 -left-6 h-16 filter drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)]"
        src={SantaHat}
        alt="santa-hat"
      />
    </div>
  );
};

export default HomepageCard