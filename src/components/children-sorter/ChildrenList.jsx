import { useChildren } from '@/hooks/children-sorter/useChildren';
import React from 'react'
import { useEffect, useState } from 'react';
import ChildCard from './ChildCard';
import { Loader } from "lucide-react";
import { useBehavior } from '@/hooks/children-sorter/useBehavior';
import ChildEditModal from './ChildEditModal';
import { Hint } from '../Hint';
import { Button } from '../ui/button';
import AddChidForm from './AddChidForm';
import { toast } from 'sonner';
import ChildDeleteModal from './ChildDeleteModal';

const ChildrenList = () => {
  const {
    data: children,
    selectedChild,
    setSelectedChild,
    loading,
    loadingChild,
    error,
    loadChildren,
    getChild,
    updateStatusChildById
  } = useChildren();
  const {
    data: behaviors,
    loading: behaviorLoading,
    error: behaviorError,
    loadBehaviors,
  } = useBehavior();

  const [selectedContent, setSelectedContent] = useState(null);

  const [addChildFormOpen, setAddChildFormOpen] = useState(false);

  const [deleteChildItem, setDeleteChildItem] = useState(null);

  useEffect(() => {
    loadChildren();
  }, []);

  useEffect(() => {
    loadBehaviors(); 
  }, []);

  const handleOpenModal = (item) => {
    setSelectedContent(item);
    //getChild(item.id);
  };

  const handleCloseModal = () => {
    //setSelectedChild(null);
    setSelectedContent(null);
  };

  function getNameBehaviorById(behaviorId){
    let item = behaviors.find((obj) => obj.id === behaviorId);
    //console.log(behaviorId);
    return item ? item.name : "Nombre no encontrado";
  }

  if (loading)
    return (
      <div className="flex flex-row items-center mt-10">
        <Loader className="animate-spin size-5 text-muted-foreground  " />
        <p className="font-DynaPuff ml-2 text-base">Cargando...</p>
      </div>
    );
  if (error) return <p className="mt-10">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-md w-full bg-stiletto text-white font-DynaPuff gap-4 justify-center">
        <div className="flex-1 p-4 pb-0">
          <p className="text-center text-2xl">Criterio de clasificación</p>
        </div>
        <div className="flex p-4 text-lg">
          <p className="flex-1 text-center">{"+ 75 : GOOD"}</p>
          <p className="flex-1 text-center"> {"< 75 : BAD"}</p>
        </div>
      </div>
      <Hint label={"Registrar nuevo niño"} side="top" align="end">
        <Button
          onClick={() => {
            //console.log(children.length );
            if (children.length < 20) {
              setAddChildFormOpen(true);
            } else {
              toast.info("Máximo 20 niños en la lista");
            }
          }}
          className="mt-4 font-DynaPuff flex-grow-0 bg-donJuan border-donJuan border hover:border-white hover:bg-donJuan/50   tracking-wider px-6 py-4 h-12 rounded-lg text-white text-xl shadow-lg"
        >
          {"Agregar niño"}
        </Button>
      </Hint>
      <div className="flex flex-wrap justify-center md:justify-between items-start mt-5 gap-6">
        {children.map((item) => (
          <ChildCard
            key={item.id}
            item={item}
            getNameBehaviorById={getNameBehaviorById}
            onShowDetail={handleOpenModal}
            setDeleteChildItem={setDeleteChildItem}
          />
        ))}
        <ChildEditModal
          onClose={handleCloseModal}
          child={selectedContent}
          getNameBehaviorById={getNameBehaviorById}
          behaviors={behaviors}
          setSelectedContent={setSelectedContent}
          loadChildren={loadChildren}
          loadingChild={loadingChild}
          getChild={getChild}
          updateStatusChildById={updateStatusChildById}
        />

        <AddChidForm
          addChildFormOpen={addChildFormOpen}
          onClose={() => {
            setAddChildFormOpen(false);
          }}
        />

        <ChildDeleteModal
          deleteChildItem={deleteChildItem}
          child={deleteChildItem}
          onClose={() => {
            setDeleteChildItem(null);
          }}
        />
      </div>
    </div>
  );
};

export default ChildrenList;