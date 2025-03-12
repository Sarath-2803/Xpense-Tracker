import React,{useState} from 'react';
import Button from '../components/Button';
import { collection, setDoc,doc  } from 'firebase/firestore';
import { db} from '../Firebase/Firebase';
import './Fields.css';

import DisplayMsg from '../components/DisplayMsg';

const Fields = () => {
  const [items,setItems] = useState([1]);
  const [FieldsValues, setFieldsValues] = useState({});

// function to handle input change
  const handleInputChange = (index, value) => {
    setFieldsValues({ ...FieldsValues, [index]: value });
  };

// function to add fields to the database
  const handleFinish = async () => {
    try {
      const docId= 'userName';
      await setDoc(doc(collection(db, 'fields'), docId), FieldsValues);
      <DisplayMsg message='Fields added successfully!' trigger='1'/>
      //alert('Fieldss added successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  //add function
  const add = () => {
    setItems([...items,items.length + 1]);
  }

// delete function
  const deleteFun = () => {
    if(items.length > 1){
      items.pop();
      setItems([...items]);
    }
  }
  return (
    <div id='container'>
      
        <h3>Enter Fields</h3>

        <div id='FieldsDiv'>
          {items.map((item,index) => (
            <div id='fieldInputBtn'>
              <input key={index} type="text" id={`Fields${item}`} onChange={(e) => handleInputChange(index, e.target.value)} placeholder={`Fields ${item}`} />
              <Button text='-' id='deleteBtn' onClick={deleteFun}/>
            </div>
          ))}
        </div>

        <div  id='buttonDiv'>
          <Button id='addBtn' text='Add' onClick={add}/>
          <Button text='Finish' id='finishBtn'onClick={handleFinish}/>
        </div>
    </div>
  )
}


export default Fields