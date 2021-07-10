import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  background-color: ${(props) => {
    if (props.variant === "secondary") {
      return "#D9B8FF";
    } else {
      return "#4D96A9";
    }
  }};
  font-size: 16px;
  height: 48px;
  padding: 8px 22px;

  @media (max-width: 1075px) {
    font-size: 12px;
    padding: 6px 18px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (max-width: 765px) {
    height: 38px;
    padding: 4px 12px;
    font-size: 11px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Button = (props) => {
  return <Wrapper variant={props.variant}>{props.children}</Wrapper>;
};

export default Button;
