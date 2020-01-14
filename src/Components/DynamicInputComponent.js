import React, {useState} from 'react';
import './DynamicInputComponent.css';

export default function DynamicInputComponent(props) {

  const [inputValue, setInputValue] = useState({1:"",2:"",3:""})

  function handleInputChange (e){
    const newValue = e.target.value;
    setInputValue({...inputValue,[e.target.name]:newValue});
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
        <input key={i} type="text" name={i} value={inputValue[i]} onChange={handleInputChange} />
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
