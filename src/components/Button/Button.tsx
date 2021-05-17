import React from "react";
import { ButtonComponent } from "./style";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonComponent>{text}</ButtonComponent>;
};
