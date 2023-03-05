import React from 'react'
import classes from "./ModalConfirm.module.scss"
import { CONSTS } from '../../../constants/Consts'

const ModalConfirm = () => {
  return (
    <div className={classes.modalContainer}>
        <div className={classes.modalWrapper}>
            <div className={classes.modalTitle}>{CONSTS.MODAL_MAIN_TITLE}</div>
            <div className={classes.inputWrapper}>
                <div className={classes.teamsNumber}>3</div>
                <div className={classes.teamsIndication}>2 teams</div>
                <input type="range" min={0} max={30}  className={classes.rangeInput}/>
                <div className={classes.errorMessage}>כמות הקבוצות צריכה להיות קטנה מ-5</div>
            </div>
            <div className={classes.bottomArea}>
                <button className={classes.btnConfirm}>{CONSTS.MODAL_CONFIRM}</button>
                <button className={classes.btnCancel}>{CONSTS.MODAL_CANCEL}</button>
            </div>
        </div>
        
    </div>
  )
}

export default ModalConfirm