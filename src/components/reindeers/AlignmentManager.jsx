import { useGetAlignments } from "@/hooks/alignment/useGetAlignments"
import alignmentStore from "@/stores/alignmentStore"
import { useState } from "react";
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";


export const AlignmentManager = () => {
  const {t} = useTranslation();
  const { isLoading, Error, alignments, fetchAlignments } = useGetAlignments();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };


  if (isLoading) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <Loader className="animate-spin size-5 text-muted-foreground  " />
      </div>
    );
  }

  if (Error) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <TriangleAlertIcon className="size-5 text-red-500" />
        {Error}
      </div>
    );
  }

  

  return (
    <div className="flex flex-col space-y-4">
      <h2>{t('alignment.alignmentManager')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)}  placeholder={t('alignment.enterName')} />
        
        <Button type="submit">{t('alignment.save')}</Button>
      </form>
      <ul>
        {alignments.map((alignment) => (
          <li key={alignment.id}>
            {alignment.alignmentId} - {alignment.reindeerId} - {alignment.order}
            <button onClick={() => handleEdit(alignment)}>Edit</button>
            <button onClick={() => handleDelete(alignment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
