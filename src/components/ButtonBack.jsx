import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowLeft from "../assets/arrow-left-direction-icon.svg";

const ButtonBack = ({classNameBtn=""}) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={`hover:border-white border-2 border-plantation flex flex-row items-center
         bg-plantation hover:bg-plantation/85 text-gray font-DynaPuff my-5 py-2 px-4 rounded-full 
         ${classNameBtn}`}
        onClick={() => {
          navigate("/");
        }}
        type="button"
      >
        <img
          className="w-4 fill-gray mr-2 brightness-200"
          src={ArrowLeft}
          alt="arrow-left-icon"
        />
        <p className="text-white">Regresar</p>
      </button>
    </div>
  );
}

export default ButtonBack