import { ReindeerIcon } from "./ReindeerIcon";
import { useDrag, useDrop } from 'react-dnd';
import reindeerStore from '@/stores/reindeerStore';
import { motion } from 'framer-motion';

const ItemType = {
  REINDEER: 'reindeer',
};

const DraggableReindeer = ({ reindeer, index, moveReindeer }) => {
  const [, ref] = useDrag({
    type: ItemType.REINDEER,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.REINDEER,
    hover(item) {
      if (item.index !== index) {
        moveReindeer(item.index, index);
        item.index = index; 
      }
    },
  });

  return (
    <motion.div 
      ref={node => ref(drop(node))} 
      className="mb-2"
      initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.3 }}
    >
    
      <ReindeerIcon name={reindeer.name} />
 
    </motion.div>
  );
};

export const Organization = () => {
  const reindeers = reindeerStore((state) => state.reindeers);
  const setReindeers = reindeerStore((state) => state.setReindeers);

  const moveReindeer = (fromIndex, toIndex) => {
    const updatedReindeer = [...reindeers];
    const [movedReindeer] = updatedReindeer.splice(fromIndex, 1);
    updatedReindeer.splice(toIndex, 0, movedReindeer);
    
    updatedReindeer.forEach((reindeer, index) => {
      reindeer.order = index; 
    });

    setReindeers(updatedReindeer);
  };

  const columns = [[], [], [], [], []]; // 5 columnas
  reindeers.forEach((reindeer, index) => {
    if (index < 10) { // Limita a 10 reindeers
      columns[Math.floor(index / 2)].push(reindeer); // Cada columna tiene 2 elementos
    }
  });

  return (
    <>
      {reindeers.length > 0 && (
        <div className="flex flex-row items-center">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-4">
              {column.map((reindeer, index) => (
                <DraggableReindeer 
                  key={reindeer.id} // Asegúrate de que cada reindeer tenga un id único
                  reindeer={reindeer} 
                  index={colIndex * 2 + index} // Calcula el índice correcto
                  moveReindeer={moveReindeer} 
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};