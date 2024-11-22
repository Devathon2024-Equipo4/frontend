import { ReindeerIcon } from "./ReindeerIcon";
import { useDrag, useDrop } from 'react-dnd';
import reindeerStore from '@/stores/reindeerStore';
import { motion } from 'framer-motion';
import { useState } from "react";

const ItemType = {
  REINDEER: 'reindeer',
};

const DraggableReindeer = ({ reindeer, index, moveReindeer }) => {
  const [tooltipActive, setTooltipActive] = useState(true);

  const [{ isDragging }, ref] = useDrag({
    type: ItemType.REINDEER,
    item: () => ({ index }), 
    collect: (monitor) => {
      const dragging = monitor.isDragging();
      if (dragging) {
        setTooltipActive(false);
      } else {
      
        setTooltipActive(true);
      }
      return { isDragging: dragging };
    },
    
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
    {tooltipActive ? ( 
      <div className="flex flex-col justify-center items-center">
        <ReindeerIcon name={reindeer.name} description={reindeer.description} />
      </div>
        
      ) : (
        <div className="flex flex-col justify-center items-center">
          <ReindeerIcon name={reindeer.name} description="" /> 
        </div>
      )}
 
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

  const columns = [[], [], [], [], []]; 
  reindeers.forEach((reindeer, index) => {
    if (index < 10) { 
      columns[Math.floor(index / 2)].push(reindeer); 
    }
  });
  
  return (
    <>
      {reindeers.length > 0 && (
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flew-row md:flex-col">
              {column.map((reindeer, index) => (
                
                <DraggableReindeer 
                  key={reindeer.id} 
                  reindeer={reindeer} 
                  index={colIndex * 2 + index} 
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