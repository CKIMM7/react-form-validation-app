import React from 'react';
import { useState } from 'react'
import styles from './UserInput.module.css';
import ValidationControl from './ValidationControl'

const UserInput = (props) => {

    const [inputUserName, setinputUserName] = useState('')
    const [inputUserAge, setinputUserAge] = useState('')
    const [validateObj, setValidateObj] = useState({})
    const thisNum = 10

    const showInputUserName = (event) => {
        // console.log(event.target.value);
        setinputUserName(event.target.value);
    }

    const showInputUserAge = (event) => {
        // console.log(event.target.value);
        setinputUserAge(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const userObj = {
            id: Math.random(), 
            username: inputUserName, 
            age: parseInt(inputUserAge)
        };

        setValidateObj(userObj)
        props.userInfoStateUp(userObj);
 
        setinputUserName("");
        setinputUserAge("");
    }

    // console.log('userInput')
    // console.log(validateObj)
    // console.log(props.toCheck)

    return (
        <form onSubmit={formSubmitHandler} className={styles.formControl}>
            <div>
                <label>Username </label>
                <input type="text" value={inputUserName} onChange={showInputUserName}/>
            </div>
            <div>
                <label>Age(Years) </label>
                <input type="number" value={inputUserAge} onChange={showInputUserAge} />
            </div>
            <button type="submit">Add User</button>
            <ValidationControl toCheck={props.toCheck}/>
        </form>
    )
} 

export default UserInput;