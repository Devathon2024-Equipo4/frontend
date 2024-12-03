import { useChildren } from '@/hooks/children-sorter/useChildren';
import React from 'react'
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const AddChidForm = ({addChildFormOpen, onClose}) => {

  const {addChild} = useChildren();
  const {register, handleSubmit, formState: { errors }} = useForm();

  async function registerChild(child) {
    try{
      console.log("Child added")
      const response = await addChild(child);
      console.log(response.success);
      (response.success)?
      toast.success("Niño agregado correctamente"):
      toast.error(response.error);
      onClose();
      
    } catch(e){
      toast.error(e.message);
    }

  }

  if (!addChildFormOpen) return null;

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
        <h2 className="text-xl text-plantation font-semibold mb-2">Agregar niño</h2>
        <form onSubmit={handleSubmit(registerChild)} className="flex flex-col gap-y-2">
          <label htmlFor="">Nombre:</label>
          <Input  type="text"
            placeholder="Nombre del niño"
            {...register("name", { required: true, maxLength: 20 })}/>
            {errors.name?.type === 'required' && <p role="alert" className='text-stiletto'>El nombre es requerido</p>}

          <input
            type="submit"
            value="Agregar"
            className="mt-4 px-4 py-2 bg-plantation hover:bg-plantation/50 text-white rounded-lg"   />
        </form>
      </div>
    </div>
  );
}

export default AddChidForm