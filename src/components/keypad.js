import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 25px;
  font-size: 20px;
  border: none;
  background: white;
  border: 2px solid lightblue;
  border-radius: 8px;
  &:hover {
    border: 2px solid lightcyan;
  }
`;

function CalculatorKey(props) {
  return (
    <Button className={`${props.className}`} onClick={() => props.onClick(props.keyValue)}>
      {props.keyValue}{" "}
    </Button>
  );
}

export default CalculatorKey;
