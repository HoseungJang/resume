import React from "react";
import styled from "styled-components";

import { IProject } from "../../interfaces/Project";

import { Color } from "../../constants/Color";

export const LinkButton: React.FC<
  IProject["references"][0] & { disabled?: boolean }
> = ({ name, link, disabled }) => {
  return (
    <Containter
      type="submit"
      onClick={(e) => {
        e.stopPropagation();
        window.location.href = link;
      }}
      disabled={disabled}
    >
      {name}
    </Containter>
  );
};

const Containter = styled.button`
  width: fit-content;

  padding: 5px 15px;

  border: 2px solid ${Color.White};
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.5s, color 0.5s;

  font-size: 16px;
  font-weight: 500;

  color: ${Color.White};

  outline: none;

  &:hover {
    background-color: ${Color.White};

    color: ${Color.Black};
  }
`;
