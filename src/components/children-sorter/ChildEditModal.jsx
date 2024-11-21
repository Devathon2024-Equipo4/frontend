import { useChildBehavior } from '@/hooks/children-sorter/useChildBehavior';
import { useChildren } from '@/hooks/children-sorter/useChildren';
import React from 'react'
import { useState } from 'react';
import { toast } from "sonner"
import { Save } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';

const ChildEditModal = ({
  child,
  onClose,
  getNameBehaviorById,
  behaviors,
  loadingChild,
  getChild,
  setSelectedContent,
  loadChildren,
  updateStatusChildById,
}) => {
  const { data, loading, error, addChildBehavior, deleteChildbehavior,editChildbehavior } = useChildBehavior();
  const { editChild } = useChildren();

  const [valueSelected, setValueSelected] = useState();
  const [points, setPoints] = useState();
  const [name, setName] = useState();


  const createChildBehavior = async (behaviorId, childId, points) => {
    try {
      if( !behaviorId || !points){
        toast.error("Complete los campos");
        console.log(behaviorId);
      }
      else{
        const result = await addChildBehavior({
          childId: childId,
          behaviorId: behaviorId,
          points: parseInt(points),
        });

        result.success? toast.success("Comportamiento agregado"):
        toast.error(result.error);
  
        await updateStatusChildById(child.id);
        await loadChildren();
        setSelectedContent(await getChild(child.id));
      }
    } catch (err) {
      toast.error(error || "Ocurrió un error al agregar el comportamiento");
    }
  };

  const editName = async (name) =>{
    try {
      if (!name) {
        toast.error("Complete los campos");
      } else {
        await editChild(child.id,{
          name: name,
        });
        toast.success("Nombre cambiado correctamente");

        await updateStatusChildById(child.id);
        await loadChildren();
        setSelectedContent(await getChild(child.id));
      }
    } catch (err) {
      toast.error(error || "Ocurrió un error al cambiar el nombre");
    }
  }

  const [behaviorData, setBehaviorData] = useState(() =>
  (child?.behaviors || []).reduce((acc, behaviorChild) => {
    acc[behaviorChild.id] = {
      behaviorId: behaviorChild.behaviorId,
      points: behaviorChild.points,
    };
    return acc;
  }, {})
  );

  const handleSelectChange = (id, value) => {
    setBehaviorData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        behaviorId: value, // Actualiza solo el behaviorId
      },
    }));
  };

  const handleInputChange = (id, value) => {
    setBehaviorData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        points: value, // Actualiza solo los puntos
      },
    }));
  };

  const deleteBehaviorChild = async (childId, behaviorId) =>{
    //console.log("childId: " +childId);
    //console.log("behaviorId: " +behaviorId);

    try {
      const result = await deleteChildbehavior(childId, behaviorId);
      result.success? toast.success("Comportamiento borrado correctamente"):
      toast.error(result.error);
      await loadChildren();
      setSelectedContent(await getChild(child.id));
    } catch (err) {
      toast.error(error || "Ocurrió un error al cambiar el nombre");
    }
  }

  const editBehaviorChild = async (childId, behaviorId, NewBehaviorId, points, behaviorData) =>{
    // console.log("childId: " + childId);
    // console.log("NewBehaviorId: " + NewBehaviorId);
    // console.log("points: " + points);

    if (behaviorData) {
      try {
        const result = await editChildbehavior(childId, behaviorId, {
          childId: childId,
          behaviorId: NewBehaviorId,
          points: points,
        });
        result.success
          ? toast.success("Comportamiento editado correctamente")
          : toast.error(result.error);
        await loadChildren();
        setSelectedContent(await getChild(child.id));
        //console.log(child);
        console.log(await getChild(child.id));
      } catch (err) {
        toast.error(error || "Ocurrió un error al cambiar el nombre");
      }
    }
  }

  if (!child) return null;
  if (loadingChild) return <p>Loading child ...</p>;
  return (
    <div className="fixed font-DynaPuff inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-loblolly p-4 rounded-lg shadow-lg w-10/12 sm:w-1/2">
        <h2 className="text-xl text-plantation font-semibold mb-2">
          Editar {child.name}
        </h2>
        <div className="mb-2">
          <div className="flex flex-row gap-x-2 items-center">
            <p>Nombre: </p>
            <input
              type="text"
              placeholder={"Nuevo nombre"}
              onChange={(e) => setName(e.target.value)}
              className="ml-4 flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>
          <button
            type="button"
            onClick={() => editName(name)}
            className={`flex flex-row items-center text-sm ml-2 mt-2 px-4 py-2 bg-plantation hover:bg-plantation/50 text-white rounded-lg `}
          >
            <Pencil className="mr-2 w-4" />
            {"Cambiar nombre"}
          </button>{" "}
        </div>

        <div className="border-y-2 border-plantation py-2 text-sm">
          <p className="font-semibold text-plantation text-base">
            Agregar comportamiento:
          </p>
          <select
            name=""
            id=""
            onChange={(e) => setValueSelected(e.target.value)}
            defaultValue="add-null"
          >
            <option value="add-null" disabled>
              {" "}
              -{" "}
            </option>
            {behaviors.map((behavior) => (
              <option key={behavior.id} value={behavior.id}>
                {behavior.name}
              </option>
            ))}
          </select>
          <div className="flex flex-row items-center mt-2">
            <label htmlFor="points">Puntaje: </label>
            <input
              name="points"
              type="number"
              className="max-w-40 ml-4 flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Puntaje"
              onChange={(e) => setPoints(e.target.value)}
            />

            <button
              type="button"
              onClick={() => {
                createChildBehavior(valueSelected, child.id, points);
              }}
              disabled={child.behaviors.length >= 5}
              className={`ml-2 px-4 py-2 bg-plantation hover:bg-plantation/50 text-white rounded-lg 
            ${
              child.behaviors.length >= 5
                ? "bg-plantation/50 cursor-not-allowed"
                : ""
            }`}
            >
              Agregar
            </button>
          </div>
        </div>

        <div className="mt-2">
          <p className="font-semibold text-plantation">
            Editar comportamientos:
          </p>
          <div className="flex flex-row flex-wrap gap-2 mt-2 text-sm">
            {child.behaviors.map((behaviorChild) => (
              <div
                key={behaviorChild.id}
                className="flex flex-col gap-2 bg-baliHai/80 rounded-md p-2"
              >
                <div className="flex flex-row gap-x-2">
                  <p>{getNameBehaviorById(behaviorChild.behaviorId)}</p>
                  {/* <select
                    name=""
                    id=""
                    defaultValue={behaviorChild.behaviorId}
                    //value={behaviorData[behaviorChild.id]?.behaviorId || ""}
                    onChange={(e) =>
                      handleSelectChange(behaviorChild.id, e.target.value)
                    }
                  >
                    {behaviors.map((behavior) => (
                      <option key={behavior.id} value={behavior.id}>
                        {behavior.name}
                      </option>
                    ))}
                  </select> */}
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                  <p>Puntaje:</p>
                  <input
                    type="number"
                    defaultValue={behaviorChild.points}
                    className="w-20"
                    onChange={(e) =>
                      handleInputChange(
                        behaviorChild.id,
                        Number(e.target.value)
                      )
                    }
                  />

                  <Save
                    onClick={() => {
                      const { behaviorId, points } =
                        behaviorData[behaviorChild.id] || {};
                      editBehaviorChild(
                        behaviorChild.childId,
                        behaviorChild.behaviorId,
                        // behaviorId,
                        behaviorChild.behaviorId,
                        points,
                        behaviorData[behaviorChild.id]
                      );
                    }}
                    className={`text-green-900 cursor-pointer`}
                  />
                  <Trash2
                    onClick={() => {
                      deleteBehaviorChild(
                        behaviorChild.childId,
                        behaviorChild.behaviorId
                      );
                    }}
                    className="text-stiletto cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-0 right-2 mt-2 px-3 py-1 bg-stiletto hover:bg-stiletto/50 text-white rounded-lg"
          onClick={onClose}
          type="button"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ChildEditModal