import { useState } from 'react'
import UserInput from '../src/userBox/UserInput'
import UserList from '../src/userBox/UserList'
import Modal from '../src/userBox/Modal'
import ValidationControl from './userBox/ValidationControl'

import './App.css';

function App(props) {

  const [usersArray, setUsersArray] = useState([
    {id: Math.random(), username: 'Dan', age: 32},
    {id: Math.random(), username: 'Pat', age: 14},
    {id: Math.random(), username: 'Jin', age: 56},
    {id: Math.random(), username: 'Carl', age: 5}
    ]);

  const [noWarning, setWarning] = useState('');
  const [noModal, YesModal] = useState(false);

  const negNum = () => {return <p>Must be greater than 0</p>}
  const NaNError = () => {return <p>Age must not be empty</p>}
  const noUserName = () => {return<p>Username must not be empty</p>}
  const noInput = () => {return<p>Username and Age both empty</p>}

  const getNewUserFunc = (newObj) => {

    console.log(newObj)
    if (newObj.username === "" && newObj.age.toString() === NaN.toString()) {
      setWarning(noInput)
      YesModal(true)
      return null;
    }

    else if (newObj.username === "") {
      setWarning(noUserName)
      YesModal(true)
      return null;
    } 

    else if(newObj.age.toString() === NaN.toString()) {
      setWarning(NaNError)
      YesModal(true)
      return null;
     }

    else if (newObj.age < 0) {
      setWarning(negNum)
      YesModal(true)
      return null;

    } 
    else
    setUsersArray(prevState => { return [newObj, ...prevState]});
  }

  const takeNewObjFunc = (newObj) => {
    console.log(newObj);
    return newObj;
  } 

  const noModalFunc = (value) => {
    YesModal(false)
  }

  return (
    <div className="App">
      <UserInput userInfoStateUp={getNewUserFunc} toCheck={500} />
      <UserList usersArray={usersArray}/>

      <Modal warningMSG={noWarning} 
              trueFalse={noModal} 
              turnOffModal={noModalFunc}></Modal>
      <ValidationControl usersArray={usersArray} justNum={'just number'}/>
    </div>
  );
}

export default App;
