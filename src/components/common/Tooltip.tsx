import { HTMLAttributes, ReactElement } from "react";
import styles from "@/styles/css/common/Tooltip.module.css";

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {}

const Tooltip = (props: TooltipProps): ReactElement => {
  return (
    <div className={`tooltip ${styles.tooltip}`} {...props}>
      {props.children}
    </div>
  );
};

export default Tooltip;
