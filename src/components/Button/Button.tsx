import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { isVariant } from "./helpers";
import { Tags } from "./const";

import { getDimension } from "../../utils/getDimensions";

import classNames from "classnames";

import type { FunctionComponent } from "react";

export const Button: FunctionComponent<ButtonProps> = ({
  as = "button",
  variant = "green",
  height,
  width,
  backgroundColor,
  children,
  href,
  onClick,
  className,
}) => {
  const dimension = getDimension({width, height});

  const Tag = Tags[as];
  const withHref = href && as === "a" ? { href } : {};

  return (
    <Tag
      style={{...dimension, backgroundColor }}
      onClick={onClick}
      className={classNames(className, styles.defaultButton, {
        [styles.greenVariant]: isVariant.green(variant),
        [styles.blackVarian]: isVariant.black(variant),
        [styles.blueVariant]: isVariant.blue(variant),
      })}
      {...withHref}
    >
      {children}
    </Tag>
  );
};