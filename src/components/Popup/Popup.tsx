import { PopupProps } from "./types";
import styles from "./Popup.module.scss";
import { CloseIcon } from "./CloseIcon";

import { getDimension } from "../../utils/getDimensions";
import { Button } from "../Button";

import { FunctionComponent } from "react";
import classNames from "classnames";

export const Popup: FunctionComponent<PopupProps> = ({
  title = "",
  TitleTag = "h2",
  description = "",
  backgroundColor,
  width,
  height,
  className,
  show,
  onClose,
}) => {
  const dimension = getDimension({ width, height });

  if (!show) {
    return null;
  }

  return (
    <div
      style={{...dimension, backgroundColor }}
      className={classNames(className, styles.container)}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <TitleTag>{title}</TitleTag>
          <Button onClick={onClose} className={styles.closeButton}>
            <CloseIcon />
          </Button>
        </div>

        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};