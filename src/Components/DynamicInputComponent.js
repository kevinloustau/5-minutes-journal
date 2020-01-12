import React from 'react';
import './DynamicInputComponent.css';

export default function DynamicInputComponent(props) {
  let inputHMTL = [];
  let listNumber = '';
  for (let i = 0; i < props.numberOfEl; i++) {
    if (props.numberOfEl > 1) {
      listNumber = `${i + 1}.`;
    }
    inputHMTL.push(
      <p className="inputComponent">
        <span className="listNumber">{listNumber}</span>
        <input key={i} type="text" name={i} />
      </p>
    );
  }

  return (
    <div className="DynamicInputComponent">
      <h2>{props.title}</h2>
      {inputHMTL}
    </div>
  );
}
