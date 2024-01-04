import { LabelHTMLAttributes, ReactElement } from "react";

export interface BadgeProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Badge = (props: BadgeProps): ReactElement => {
  return <label {...props}>{props.children}</label>;
};

export default Badge;
