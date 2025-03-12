import React,{useState} from 'react';
import Button from '../components/Button';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import './Field.css';

const Field = () => {
  const [items,setItems] = useState([1]);
  const [fieldValues, setFieldValues] = useState({});

  const handleInputChange = (index, value) => {
    setFieldValues({ ...fieldValues, [index]: value });
  };

  const handleFinish = async () => {
    try {
      await addDoc(collection(db, 'fields'), fieldValues);
      alert('Fields added successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const add = () => {
    setItems([...items,items.length + 1]);
  }
  return (
    <div id='container'>
        <h3>Enter Field</h3>

        <div id='fieldDiv'>
          {items.map((item,index) => (
            <input key={index} type="text" id={`field${item}`} onChange={(e) => handleInputChange(index, e.target.value)} placeholder={`Field ${item}`} />
          ))}
        </div>

        <div  id='buttonDiv'>
          <Button id='addBtn' text='Add' onClick={add}/>
          <Button text='Finish' id='finishBtn'onClick={handleFinish}/>
        </div>
    </div>
  )
}


export default Field