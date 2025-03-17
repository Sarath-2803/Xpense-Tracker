import React,{useState,useEffect} from 'react';
import Button from '../components/Button';
import { collection, setDoc,doc ,getDoc } from 'firebase/firestore';
import { db} from '../Firebase/Firebase';
import './Fields.css';
import { getAuth,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import DisplayMsg from '../components/DisplayMsg';

const Fields = () => {
  const [items,setItems] = useState([1]);
  const [FieldsValues, setFieldsValues] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [UserFields, setUserFields] = useState({});
  const navigate = useNavigate();
 
  //to get the user email
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth,async (user) => {
      if (user) {
        setUserEmail(user.email);

        const docRef = doc(collection(db, 'fields'), user.email);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          setUserFields(docSnap.data());
          console.log(docSnap.data());
        }
        else{
          console.log('No such document!');
        }
       } else {
        console.log('No user is signed in.');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);


// function to handle input change
  const handleInputChange = (index, value) => {
    setFieldsValues({ ...FieldsValues, [index]: value });
  };

// function to add fields to the database
  const handleFinish = async () => {
    try {
      if(!userEmail){
        alert('Please login first!');
        return;
      }
        
      console.log(userEmail);
      const docId= userEmail;
      await setDoc(doc(collection(db, 'fields'), docId), FieldsValues);
      //<DisplayMsg message='Fields added successfully!' trigger='1'/>
     alert('Fieldss added successfully!');
      //console.log('UserFields');
      navigate('/Tracker',{state:{UserFields:FieldsValues}}); 
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


export default Fields;
