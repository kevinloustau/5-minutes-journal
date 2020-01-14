import React, {useState} from 'react';
import './DynamicInputComponent.css';

export default function DynamicInputComponent(props) {

  const [inputValue, setInputValue] = useState(props.content)


  function handleInputChange (i,e){
    let newArray = inputValue;
    newArray[i] = e.target.value;
    console.log(newArray);
    setInputValue(newArray)
  }

  if (inputValue !== undefined){
    console.log(inputValue[1])
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
