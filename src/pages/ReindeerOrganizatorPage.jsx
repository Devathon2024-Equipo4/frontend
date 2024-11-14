import { Organization } from "@/components/reindeers/Organization"
import { Weather } from "@/components/weather/Weather"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ReindeerOrganizatorPage = () => {
  return (
    <div className='w-full min-h-[calc(100vh-64px)] flex  justify-center space-x-10 bg-gray'>
      <Weather />
      <DndProvider backend={HTML5Backend}>
        <Organization />
      </DndProvider>
    </div>
  )
}

export default ReindeerOrganizatorPage