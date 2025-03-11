import React,{useState} from 'react';
import Button from '../components/Button';
import './Field.css';

const Field = () => {
  const [items,setItems] = useState([1]);

  const add = () => {
    setItems([...items,items.length + 1]);
  }
  return (
    <div id='container'>
        <h3>Enter Field</h3>

        <div id='fieldDiv'>
          {items.map((item,index) => (
            <input key={index} type="text" id={`field${item}`} placeholder={`Field ${item}`} />
          ))}
        </div>

        <div  id='buttonDiv'>
          <Button id='addBtn' text='Add' onClick={add}/>
          <Button text='Finish' id='finishBtn'/>
        </div>
    </div>
  )
}


export default Field