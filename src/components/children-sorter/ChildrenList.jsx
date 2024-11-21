import { useChildren } from '@/hooks/children-sorter/useChildren';
import React from 'react'
import { useEffect, useState } from 'react';
import ChildCard from './ChildCard';
import { Loader } from "lucide-react";
import { useBehavior } from '@/hooks/children-sorter/useBehavior';
import ChildEditModal from './ChildEditModal';

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
    <div>
      <div className="rounded-md bg-stiletto text-white font-DynaPuff gap-4 justify-center">
        <div className="flex-1 p-4">
          <p className="text-center text-lg">
            Criterio de clasificación
          </p>
        </div>
        <div className="flex p-4 text-lg">
          <p className="flex-1 text-center">{"+ 75 : GOOD"}</p>
          <p className="flex-1 text-center"> {"< 75 : BAD"}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-start mt-5 gap-6">
        {children.map((item) => (
          <ChildCard
            key={item.id}
            item={item}
            getNameBehaviorById={getNameBehaviorById}
            onShowDetail={handleOpenModal}
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
      </div>
    </div>
  );
};

export default ChildrenList;