import React, {useState, useEffect} from 'react';
import './DynamicInputComponent.css';
import {JournalContext} from '../App';

export default function DynamicInputComponent(props) {

  const [inputValue, setInputValue] = useState(props.content);

  const {handleDayChange} = React.useContext(JournalContext);
  handleDayChange(props.name,inputValue);

  useEffect(() => {
    setInputValue(props.content);
  }, [props.content])

  function handleInputChange (e){
    setInputValue({...inputValue,[e.target.name]:e.target.value});
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
        <input key={i} type="text" name={i} value={inputValue[i]} onChange={e => handleInputChange(e)} />
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
