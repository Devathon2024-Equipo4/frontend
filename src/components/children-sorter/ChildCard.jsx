import React from 'react'

const ChildCard = ({ item, getNameBehaviorById, onShowDetail }) => {
  return (
    <div
      className={`
      text-donJuan p-4 rounded-md border-2 font-DynaPuff w-60 min-h-80 relative shadow-lg
      ${
        item.status == "GOOD"
          ? "bg-loblolly border-plantation shadow-plantation/50"
          : "bg-akaroa border-stiletto shadow-stiletto/50"
      }`}
    >
      <p className={`text-xl text-plantationtext-stiletto`}>{item.name}</p>
      <p>Nombre: {item.name}</p>
      <p>
        Clasificación:{" "}
        <span
          className={`font-semibold ${
            item.status == "BAD" ? "text-stiletto" : "text-plantation"
          }`}
        >
          {item.status}
        </span>
      </p>
      <p>Conmportamiento:</p>
      <ul>
        {item.behaviors.map((behavior) => (
          <li key={behavior.id} className="flex flex-row gap-x-2 ml-4">
            <p>{getNameBehaviorById(behavior.behaviorId)}</p>
            <p
              className={`${
                behavior.points >= 75 ? "text-plantation" : "text-stiletto"
              }`}
            >
              {behavior.points}
            </p>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          onShowDetail(item);
        }}
        className="bg-donJuan text-white border-donJuan hover:border-white hover:bg-donJuan/50 rounded-full border-2 py-2 px-4 mt-2"
      >
        Editar datos
      </button>
    </div>
  );
};

export default ChildCard