import type { PropsWithChildren } from "react";

export type ButtonVariant = "blue" | "black" | "green";

export type ButtonTag = "div" | "a" | "button";

export interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariant;
  as?: ButtonTag;
  width?: number;
  height?: number;
  backgroundColor?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}
