import ButtonBack from "@/components/ButtonBack";
import LetterCardList from "@/components/letter-lector/LetterCardList";
import React from "react";

const LetterLectorPage = () => {

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray pt-10 pb-10 px-10 sm:px-30 lg:px-40">
      <h1 className="text-stiletto text-3xl font-MountainsOfChristmas text-center font-bold">
        Lector de Cartas
      </h1>
      <ButtonBack />
      <LetterCardList />
    </div>
  );
};

export default LetterLectorPage;
