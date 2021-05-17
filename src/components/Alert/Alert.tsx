import React from "react";
import { AlertBlock } from "./styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AlertProps {
  closeAlert: () => void;
  text: string;
}

export const Alert = ({ closeAlert, text }: AlertProps): JSX.Element => (
  <AlertBlock>
    <span>{text}</span>
    <FontAwesomeIcon onClick={closeAlert} icon={faTimes} />
  </AlertBlock>
);
