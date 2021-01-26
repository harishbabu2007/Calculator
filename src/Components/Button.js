import React from "react";
import "./styles/Button.css";

function Button({ value, clicker, classbtn }) {
  return (
    <button onClick={() => clicker(value)} className={`button ${classbtn}`}>
      {value}
    </button>
  );
}

export default Button;
