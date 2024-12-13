import React from "react";
import LetterCard from "@/components/letter-lector/LetterCard";
import LetterModal from "@/components/letter-lector/LetterModal";
import { useLetters } from '@/hooks/letter-lector/useLetters';
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner"

const LetterCardList = () => {
  const { data, loading, error, loadLetters, toggleStatus, loadingItems } = useLetters();

  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    loadLetters();
  }, []);

  const handleOpenModal = (item) => {
    if (!item.status) {
      toggleStatus(item.id);
    }
    setSelectedContent(item.content);
  };

  const handleCloseModal = () => {
    setSelectedContent(null);
    toast.success("Carta leída");
  };

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
      <div className="flex flex-wrap justify-center md:justify-between items-start mt-5 gap-6">
        {data.map((item) => (
          <LetterCard
            key={item.id}
            item={item}
            toggleStatus={toggleStatus}
            onShowDetail={handleOpenModal}
            loading={loadingItems[item.id]}
          />
        ))}
        <LetterModal content={selectedContent} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default LetterCardList;
