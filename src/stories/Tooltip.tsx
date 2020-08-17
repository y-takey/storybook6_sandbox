import React from "react";

export interface Props {
  value?: string;
}

const Tooltip: React.FC<Props> = ({ value = "top" }) => value;

export default Tooltip;
