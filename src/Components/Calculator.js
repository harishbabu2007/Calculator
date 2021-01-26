import React, { useState } from "react";
import "./styles/Calculator.css";
import Button from "./Button";

function Calculator() {
  const [calculations, setCalculations] = useState("");
  const AddValue = (value) => {
    if (value === "C") {
      return setCalculations("");
    } else if (value === "=") {
      try {
        return setCalculations(eval(calculations));
      } catch {
        return setCalculations("Math Error");
      }
    } else {
      return setCalculations(calculations + value);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__display">
        <h2>{calculations}</h2>
      </div>
      <div className="calculator__btns">
        <Button value="C" clicker={AddValue} />
        <Button value="+" clicker={AddValue} />
        <Button value="-" clicker={AddValue} />
        <Button value="/" clicker={AddValue} />
        <Button value="*" clicker={AddValue} />
        <Button value="=" clicker={AddValue} />
        <Button value="1" clicker={AddValue} />
        <Button value="2" clicker={AddValue} />
        <Button value="3" clicker={AddValue} />
        <Button value="4" clicker={AddValue} />
        <Button value="5" clicker={AddValue} />
        <Button value="6" clicker={AddValue} />
        <Button value="7" clicker={AddValue} />
        <Button value="8" clicker={AddValue} />
        <Button value="9" clicker={AddValue} />
      </div>
      <Button value="0" clicker={AddValue} classbtn="button__long" />
    </div>
  );
}

export default Calculator;
