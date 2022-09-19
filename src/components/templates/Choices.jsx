import React from "react";

function Choices(props) {
  let letterMap = { 0: "A", 1: "B", 2: "C", 3: "D" };
  return (
    <div>
      <p>
        <span className="name">{letterMap[props.index]} . </span> {props.choice}
      </p>
    </div>
  );
}

export default Choices;
