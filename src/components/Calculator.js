import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KeyCalc from "./KeyCalc";

const CalculatorContainer = styled.div`
  max-width: 600px;
  background: #e0e0e0;
  margin: auto;
  padding: 30px 50px;
  border-radius: 15px;
`;

const Result = styled.div`
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  background: white;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid lightblue;
`;

function Calculator() {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](parseFloat(prevValue), parseFloat(nextValue));
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = number => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
  };

  const handleOperation = value => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <CalculatorContainer>
      <Result>{nextValue}</Result>
      <div className="calculator-keypad">
        <KeyCalc handleOperation={handleOperation} />
      </div>
    </CalculatorContainer>
  );
}

export default Calculator;
