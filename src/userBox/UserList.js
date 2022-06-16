import styles from './UserList.module.css';
import EachUser from './EachUser';
import React from 'react';

const UserList = (props) => {

    const usersArray = props.usersArray;
    const numTest = 'numTest 568'

    return (
        <div className={styles['user-list']}>
            <EachUser usersArray={usersArray} numTest={numTest}/>
        </div>
    )
} 

export default UserList;