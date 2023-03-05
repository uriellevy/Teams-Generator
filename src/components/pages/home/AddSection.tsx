import React from 'react'
import classes from "./AddSection.module.scss"
import { AiOutlinePlus } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';


const AddSection = () => {
    return (
        <div className={classes.addSectionWrapper}>
            <AiOutlinePlus className={classes.addItemBtn} />
            <div className={classes.inputsArea}>
                <TiDelete className={classes.eraseText} />
                <div className={classes.inputsWrapper}>
                    <input type="text" placeholder='הזן שם שחקן...' dir='rtl' required/>
                    <input type="number" min={0} max={10} placeholder='הזן דירוג שחקן...' dir='rtl' required/>
                </div>
            </div>
        </div>
    )
}

export default AddSection