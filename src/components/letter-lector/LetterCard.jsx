import React from 'react'
import NewLetterTag from "@/assets/tag-newLetter.png"

const LetterCard = ({ item, toggleStatus, onShowDetail, loading }) => {
  return (
    <div
      className={`${
        item.status ? "bg-loblolly/50 border-plantation" : "bg-akaroa border-stiletto"
      } text-donJuan p-4 rounded-md border-2 font-DynaPuff w-50 min-h-40 relative`}
    >
      {!item.status &&
        <img
          className="h-[50px] w-[50px] absolute left-[-7px] top-[-7px]"
          draggable="false" 
          src={NewLetterTag}
          alt="new-letter"
        />
      }
      <p className={`text-xl text-plantation ${item.status ? "" : "text-stiletto"}`}>
        {"Carta para Santa"}
      </p>
      <p>Leída: {item.status ? "Si" : "No"}</p>
      <div className="flex flex-row items-center">
        <label className="text-sm flex flex-row items-center">
          <input
            type="checkbox"
            checked={item.status}
            onChange={() => toggleStatus(item.id)}
            disabled={loading} 
          />
          <p className="ml-2">{"Carta leída"}</p>
        </label>
      </div>
      <button
        onClick={() => {
          onShowDetail(item);
        }}
        className="bg-donJuan text-white border-plantation hover:border-white hover:bg-donJuan/50 rounded-full border-2 py-2 px-4 mt-2"
      >
        Leer carta
      </button>
    </div>
  );
};

export default LetterCard