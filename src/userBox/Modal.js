import { useState } from 'react'
import React from 'react';
import styles from './Modal.module.css'

const modalStyle = {
    color: 'red'
}

const Modal = (props) => {

const turnOffModal = () => {
    props.turnOffModal()
}

return <div className={props.trueFalse ? styles.ModalNoraml : 'Modal'}>
        {props.warningMSG}
        <button 
        className={styles.button}
        onClick={turnOffModal}>

        Click to retry</button>
    </div>
}

export default Modal;