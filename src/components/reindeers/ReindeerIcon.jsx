import  RudolphSVG  from "@/components/reindeers/RudolphSVG";
import ReindeerSVG2 from "@/components/reindeers/ReindeerSVG";
export const ReindeerIcon = ({name}) => {
  if (name === 'Rudolph') {
    return (
      <div className='w-32 h-40 flex flex-col justify-center items-center bg-transparent border border-gray-300 rounded-md p-2 mx-4'>
        <RudolphSVG /> 
        <p>{name}</p>
      </div>
    );
  }else {
    return (
      <div className='w-32 h-40 flex flex-col justify-center items-center bg-transparent border border-gray-300 rounded-md p-2 mx-4'>
        <ReindeerSVG2 />
        <p>{name}</p> 
      </div>
    );
  }
};