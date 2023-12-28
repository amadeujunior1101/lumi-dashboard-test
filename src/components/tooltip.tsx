import { Tooltip } from "@mui/material";
import React from "react";

interface TooltipComponentProps {
  children: React.ReactNode;
  tooltipTitle: string;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  children,
  tooltipTitle,
}) => {
  return (
    <Tooltip title={tooltipTitle}>
      <div>{children}</div>
    </Tooltip>
  );
};

export { TooltipComponent };
