import React, {ChangeEvent, useContext, useState} from 'react'
import classes from "./AddSection.module.scss"
import { AiOutlinePlus } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';
import { CONSTS } from '../../../constants/Consts';
import { localStorageService } from '../../../services/localStorage';



const AddSection = () => {
    const { onPlayerAdd, allPlayersList } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
    const [playerName, setPlayerName] = useState("");
    const [playerRating, setPlayerRating] = useState("");
    const [inputsError, setInputsError] = useState(false);

    const onInputsDelete = () => {
        setPlayerName("");
        setPlayerRating("");
    }

    const onPlayerAddHandler = () => {
        if (+playerRating < 0 || +playerRating > 10 || !playerName || !playerRating) {
            setInputsError(true);
        }else {
            onPlayerAdd(playerName, +playerRating)
            setInputsError(false);
            onInputsDelete();
        }
    }

    return (
        <form className={classes.addSectionWrapper}>
            <AiOutlinePlus className={classes.addItemBtn} onClick={onPlayerAddHandler}/>
            <div className={classes.inputsArea}>
                <TiDelete className={classes.eraseText} onClick={onInputsDelete}/>
                <div className={classes.inputsWrapper}>
                    {inputsError && <div className={classes.errorMessage}>{CONSTS.ERROR_MESSAGE}</div>}
                    <input type="text" placeholder='הזן שם שחקן...' dir='rtl' required value={playerName} onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)}/>
                    <input type="number" min={0} max={10} placeholder='הזן דירוג שחקן (0-10)...' dir='rtl' value={playerRating} required onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerRating(e.target.value)}/>
                </div>
            </div>
        </form>
    )
}

export default AddSection