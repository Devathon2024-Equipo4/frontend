import { useChildren } from '@/hooks/children-sorter/useChildren';
import React from 'react'
import { toast } from 'sonner';

const ChildDeleteModal = ({onClose, child, deleteChildItem}) => {
  const {deleteChildById, loadChildren} = useChildren();


  async function handleDeeteCHild(id){
    try{
      await deleteChildById(id);
      toast.success("Niño borrado correctamente");
      await loadChildren();
      onClose();
    } catch(e){
      toast.error(e.message);
    }

  }

  if (!deleteChildItem) return null;

  return (
    <div className="fixed font-DynaPuff inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-loblolly p-4 rounded-lg shadow-lg w-10/12 sm:w-5/12">
        <button
          className="absolute top-0 right-2 mt-2 px-3 py-1 bg-stiletto hover:bg-stiletto/50 text-white rounded-lg"
          onClick={onClose}
          type="button"
        >
          X
        </button>
        <h2 className="text-xl text-plantation font-semibold mb-2">
          Borrar niño
        </h2>
        <p>{`¿Seguro que desea eliminar a ${child.name}?`}</p>
        <button
          onClick={() => {
            handleDeeteCHild(child.id);
          }}
          type="button"
          className="mt-2 px-3 py-1 bg-stiletto hover:bg-stiletto/50 text-white rounded-lg"
        >Borrar niño</button>
      </div>
    </div>
  );
}

export default ChildDeleteModal