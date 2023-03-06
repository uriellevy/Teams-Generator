import React, {ChangeEvent, useContext, useState} from 'react'
import classes from "./AddSection.module.scss"
import { AiOutlinePlus } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';


const AddSection = () => {
    const { onPlayerAdd, allPlayersList } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
    const [playerName, setPlayerName] = useState("");
    const [playerRating, setPlayerRating] = useState("");

    const onInputsDelete = () => {
        setPlayerName("");
        setPlayerRating("");
    }

    const onPlayerAddHandler = () => {
        onPlayerAdd(playerName, +playerRating)
        onInputsDelete();
    }

    return (
        <form className={classes.addSectionWrapper}>
            <AiOutlinePlus className={classes.addItemBtn} onClick={onPlayerAddHandler}/>
            <div className={classes.inputsArea}>
                <TiDelete className={classes.eraseText} onClick={onInputsDelete}/>
                <div className={classes.inputsWrapper}>
                    <input type="text" placeholder='הזן שם שחקן...' dir='rtl' required value={playerName} onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)}/>
                    <input type="number" min={0} max={10} placeholder='הזן דירוג שחקן...' dir='rtl' value={playerRating} required onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerRating(e.target.value)}/>
                </div>
            </div>
        </form>
    )
}

export default AddSection