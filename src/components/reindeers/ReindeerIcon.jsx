import  RudolphSVG  from "@/components/reindeers/RudolphSVG";
import ReindeerSVG2 from "@/components/reindeers/ReindeerSVG";
import { Hint } from "../Hint";
import { useReindeerTranslation } from "./useReindeerTranslation";
export const ReindeerIcon = ({name, description}) => {
  const { getTranslatedCondition } = useReindeerTranslation();

  if (name === 'Rudolph') {
    return (
      <>
      <Hint label={getTranslatedCondition(description)} side="top" align="end">
      <div className='w-32 h-40 flex flex-col justify-center items-center bg-transparent border border-gray-300 rounded-md p-2 mx-4'>
        <RudolphSVG /> 
        <p>{name}</p>
      </div>
      </Hint>
      </>
    );
  }else {
    return (
      <>
      <Hint label={getTranslatedCondition(description)} side="top" align="end">
      <div className='w-32 h-40 flex flex-col justify-center items-center bg-transparent border border-gray-300 rounded-md p-2 mx-4'>
        <ReindeerSVG2 />
        <p>{name}</p> 
      </div>
      </Hint>
      </>
    );
  }
};