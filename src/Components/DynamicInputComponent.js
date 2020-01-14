import React, {useState} from 'react';
import './DynamicInputComponent.css';

export default function DynamicInputComponent(props) {

  const [inputValue, setInputValue] = useState(["","",""])
  
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react

  function handleInputChange (i,e){
    let newValue = inputValue;
    console.log(newValue);
    newValue[i] = e.target.value;

    setInputValue(newValue);
  }

  let inputHMTL = [];
  let listNumber = '';
  for (let i = 0; i < props.numberOfEl; i++) {
    if (props.numberOfEl > 1) {
      listNumber = `${i + 1}.`;
    }
    inputHMTL.push(
      <p key={i} className="inputComponent">
        <span className="listNumber">{listNumber}</span>
        <input key={i} type="text" name={i} value={inputValue[i]} onChange={(e) => handleInputChange(i,e)} />
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
