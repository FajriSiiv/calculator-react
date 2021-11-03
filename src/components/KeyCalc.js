import React from "react";
import CalculatorKey from "./keypad";
import styled from "styled-components";

const GridCalc = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  & button:last-child {
    grid-column: span 3 / span 1;
  }
`;

export default function KeyCalc({ handleOperation }) {
  return (
    <div>
      <GridCalc className="keys-function">
        <CalculatorKey keyValue={"c"} onClick={handleOperation} />
        <CalculatorKey keyValue={"\xB1"} onClick={handleOperation} />
        <CalculatorKey keyValue={"%"} onClick={handleOperation} />
        <CalculatorKey keyValue={"+"} onClick={handleOperation} />
        <CalculatorKey keyValue={"-"} onClick={handleOperation} />
        <CalculatorKey keyValue={"*"} onClick={handleOperation} />
        <CalculatorKey keyValue={"/"} onClick={handleOperation} />
        <CalculatorKey keyValue={9} onClick={handleOperation} />
        <CalculatorKey keyValue={8} onClick={handleOperation} />
        <CalculatorKey keyValue={7} onClick={handleOperation} />
        <CalculatorKey keyValue={6} onClick={handleOperation} />
        <CalculatorKey keyValue={5} onClick={handleOperation} />
        <CalculatorKey keyValue={4} onClick={handleOperation} />
        <CalculatorKey keyValue={3} onClick={handleOperation} />
        <CalculatorKey keyValue={2} onClick={handleOperation} />
        <CalculatorKey keyValue={1} onClick={handleOperation} />
        <CalculatorKey className="key-zero" keyValue={0} onClick={handleOperation} />
        <CalculatorKey className="key-dot" keyValue={"."} onClick={handleOperation} />
        <CalculatorKey keyValue={"="} onClick={handleOperation} />
      </GridCalc>
    </div>
  );
}
