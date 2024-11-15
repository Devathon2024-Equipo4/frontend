import ButtonBack from "@/components/ButtonBack";
import { Organization } from "@/components/reindeers/Organization";
import { ReeinderTable } from "@/components/reindeers/ReindeerTable";
import SledSVG from "@/components/reindeers/SledSVG";
import { Weather } from "@/components/weather/Weather";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ReindeerOrganizatorPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-center pt-10 pb-10 px-10 bg-gray  font-DynaPuff">
      <ButtonBack />
      <div className=" flex items-center justify-center mb-10">
        <Weather />
      </div>
      <div className="  flex items-center justify-center">
        <div className="w-fit bg-akaroa border-stiletto shadow-stiletto/50 shadow-lg p-4 flex items-center rounded-lg border ">
          <SledSVG />
          <DndProvider backend={HTML5Backend}>
            <Organization />
          </DndProvider>
        </div>
      </div>
      <ReeinderTable />
    </div>
  );
};

export default ReindeerOrganizatorPage;
