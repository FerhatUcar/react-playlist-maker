import React, { MouseEventHandler } from "react";
import { ButtonComponent } from "./style";

interface ButtonProps {
  text: string | JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

export const Button = ({ text, onClick, color }: ButtonProps): JSX.Element => {
  return (
    <ButtonComponent color={color} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
};
