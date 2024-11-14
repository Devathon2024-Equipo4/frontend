import { useState } from 'react';
import { ReindeerIcon } from "./ReindeerIcon"
import { useDrag, useDrop } from 'react-dnd';

const ItemType = {
  REINDEER: 'reindeer',
};

const DraggableReindeer = ({ reno, index, moveReno }) => {
  const [, ref] = useDrag({
    type: ItemType.REINDEER,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.REINDEER,
    hover(item) {
      if (item.index !== index) {
        moveReno(item.index, index);
        item.index = index; // Update the index for the dragged item
      }
    },
  });

  return (
    <div ref={node => ref(drop(node))} className="mb-2">
      <ReindeerIcon name={reno.name} />
    </div>
  );
};

export const Organization = () => {
  const [renos, setRenos] = useState([
    { id: '1', name: 'Rudolph' },
    { id: '2', name: 'Dasher' },
    { id: '3', name: 'Dancer' },
    { id: '4', name: 'Vixen' },
    { id: '5', name: 'Prancer' },
    { id: '6', name: 'Cupid' },
    { id: '7', name: 'Comet' },
    { id: '8', name: 'Blitzen' },
    { id: '9', name: 'Donner' },
  ]);

  const moveReno = (fromIndex, toIndex) => {
    const updatedRenos = [...renos];
    const [movedReno] = updatedRenos.splice(fromIndex, 1);
    updatedRenos.splice(toIndex, 0, movedReno);
    setRenos(updatedRenos);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <DraggableReindeer reno={renos[0]} index={0} moveReno={moveReno} />
      <div className="flex space-x-4">
        <DraggableReindeer reno={renos[1]} index={1} moveReno={moveReno} />
        <DraggableReindeer reno={renos[2]} index={2} moveReno={moveReno} />
      </div>
      <div className="flex space-x-4">
        <DraggableReindeer reno={renos[3]} index={3} moveReno={moveReno} />
        <DraggableReindeer reno={renos[4]} index={4} moveReno={moveReno} />
      </div>
      <div className="flex space-x-4">
        <DraggableReindeer reno={renos[5]} index={5} moveReno={moveReno} />
        <DraggableReindeer reno={renos[6]} index={6} moveReno={moveReno} />
      </div>
      <div className="flex space-x-4">
        <DraggableReindeer reno={renos[7]} index={7} moveReno={moveReno} />
        <DraggableReindeer reno={renos[8]} index={8} moveReno={moveReno} />
      </div>
    </div>
  );
}