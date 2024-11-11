import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowLeft from "../assets/arrow-left-direction-icon.svg";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="flex flex-row items-center bg-plantation hover:bg-plantation/50 text-gray font-DynaPuff my-5 py-2 px-4 rounded-full"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="w-4 fill-gray mr-2"
          src={ArrowLeft}
          alt="arrow-left-icon"
        />
        <p>Regresar</p>
      </button>
    </div>
  );
}

export default ButtonBack