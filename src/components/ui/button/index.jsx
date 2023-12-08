import React from "react";
import Button from "@mui/material/Button";
import styles from "./button.module.scss";

export default function ButtonUI(props) {
  const {
    className,
    isBorderRadius,
    variant,
    width,
    text,
    color,
    isIconStart,
    iconStart,
    isIconEnd,
    iconEnd,
    submit,
  } = props;

  return (
    <div className={className}>
      <Button
        className={isBorderRadius ? styles.borderRadius : ""}
        variant={variant ? variant : "contained"}
        color={color}
        startIcon={isIconStart ? iconStart : null}
        endIcon={isIconEnd ? iconEnd : null}
        onClick={(e) => submit(e)}
        sx={{ width: width + "%" }}
      >
        {text}
      </Button>
    </div>
  );
}
