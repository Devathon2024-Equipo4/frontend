import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// side can be "top", "bottom", "left", or "right"
// align can be "start", "center", or "end"
export const Hint = ({ children, label, side = "top", align = "center" }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align} className="bg-black text-white border border-white/5">
          <p className="font-medium text-sm tracking-wider ">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};