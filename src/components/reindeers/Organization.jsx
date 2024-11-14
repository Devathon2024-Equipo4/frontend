import { ReindeerIcon } from "./ReindeerIcon";
import { useDrag, useDrop } from 'react-dnd';
import reindeerStore from '@/stores/reindeerStore';

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
    <div ref={node => ref(drop(node))} className="mb-2">
      <ReindeerIcon name={reindeer.name} />
    </div>
  );
};

export const Organization = () => {
  const reindeers = reindeerStore((state) => state.reindeers);
  const setReindeers = reindeerStore((state) => state.setReindeers);

  const moveReindeer = (fromIndex, toIndex) => {
    const updatedReindeer = [...reindeers];
    const [movedReindeer] = updatedReindeer.splice(fromIndex, 1);
    updatedReindeer.splice(toIndex, 0, movedReindeer);
    setReindeers(updatedReindeer);
  };

  return (
    <>
      {reindeers.length > 0 && (
        <div className="flex flex-col items-center mt-4">
          {reindeers[0] && (
            <DraggableReindeer reindeer={reindeers[0]} index={0} moveReindeer={moveReindeer} />
          )}
          <div className="flex space-x-4">
            {reindeers[1] && <DraggableReindeer reindeer={reindeers[1]} index={1} moveReindeer={moveReindeer} />}
            {reindeers[2] && <DraggableReindeer reindeer={reindeers[2]} index={2} moveReindeer={moveReindeer} />}
          </div>
          <div className="flex space-x-4">
            {reindeers[3] && <DraggableReindeer reindeer={reindeers[3]} index={3} moveReindeer={moveReindeer} />}
            {reindeers[4] && <DraggableReindeer reindeer={reindeers[4]} index={4} moveReindeer={moveReindeer} />}
          </div>
          <div className="flex space-x-4">
            {reindeers[5] && <DraggableReindeer reindeer={reindeers[5]} index={5} moveReindeer={moveReindeer} />}
            {reindeers[6] && <DraggableReindeer reindeer={reindeers[6]} index={6} moveReindeer={moveReindeer} />}
          </div>
          <div className="flex space-x-4">
            {reindeers[7] && <DraggableReindeer reindeer={reindeers[7]} index={7} moveReindeer={moveReindeer} />}
            {reindeers[8] && <DraggableReindeer reindeer={reindeers[8]} index={8} moveReindeer={moveReindeer} />}
          </div>
        </div>
      )}
    </>
  );
};