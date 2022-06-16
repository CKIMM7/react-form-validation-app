import React from 'react';
import styles from './EachUser.module.css';

const EachUser = (props) => {

    const divStyle = {
        color: 'blue',
      };

    const usersArray = props.usersArray;
    const usersArrayMap = usersArray.map(userObj => 

        <div className={styles['user-each']}
        key={userObj.id}>            
        {userObj.username} is {userObj.age} years old</div>)

        console.log(props.numTest)

        return (
            <div>
                {usersArrayMap}
            </div>
        )
} 

export default EachUser;