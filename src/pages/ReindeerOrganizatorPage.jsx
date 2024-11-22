import ButtonBack from "@/components/ButtonBack";
import AlignmentManager from "@/components/reindeers/AlignmentManager";
import { Organization } from "@/components/reindeers/Organization";
import SledSVG from "@/components/reindeers/SledSVG";
import { Weather } from "@/components/weather/Weather";
import { t } from "i18next";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ReindeerOrganizatorPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center pt-10 pb-10 px-10 font-DynaPuff ">
      <h1 className="text-stiletto font-MountainsOfChristmas text-center font-bold">
        {t("reindeerOrganizator.title")}
      </h1>
      <ButtonBack />
      <div className="w-full">
        <Weather />
      </div>
      <div className="flex items-start justify-center gap-x-4 w-full mb-10">
        <div className="w-full flex items-center justify-center bg-akaroa border-stiletto shadow-stiletto/50 shadow-lg p-4 rounded-lg border">
          <AlignmentManager />
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="w-full bg-akaroa border-stiletto shadow-stiletto/50 shadow-lg p-4 flex flex-col md:flex-row items-center rounded-lg border mb-10 ">
          <SledSVG />
          <DndProvider backend={HTML5Backend}>
            <Organization />
          </DndProvider>
        </div>
      </div>
    </div>
  );
};

export default ReindeerOrganizatorPage;
