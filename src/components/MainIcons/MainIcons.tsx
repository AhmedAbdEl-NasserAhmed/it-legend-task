import { mainIcons } from "../../constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../lib/ToolTip";
import "./MainIcons.css";

const MainIcons = () => {
  return (
    <div className="main-icons">
      {mainIcons.map((icon) => {
        return (
          <Tooltip key={icon.label}>
            <TooltipTrigger onClick={icon.onClick}>{icon.icon}</TooltipTrigger>
            <TooltipContent className="Tooltip">{icon.label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default MainIcons;
