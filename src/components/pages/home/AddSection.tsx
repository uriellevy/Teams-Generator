import React, {ChangeEvent, RefObject, useContext, useState} from 'react'
import classes from "./AddSection.module.scss"
import { AiOutlinePlus } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';
import { CONSTS } from '../../../constants/Consts';
interface AddSectionProps {
    playerInputRef: RefObject<HTMLInputElement>
}



const AddSection = ({playerInputRef}: AddSectionProps) => {
    const { onPlayerAdd } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
    const [playerName, setPlayerName] = useState("");
    const [playerRating, setPlayerRating] = useState("");
    const [inputsError, setInputsError] = useState(false);

    const onInputsDelete = () => {
        setPlayerName("");
        setPlayerRating("");
    }

    const onPlayerAddHandler = () => {
        const unvalidNumber = +playerRating < 0 || +playerRating > 10 || !playerRating;
        const unvalidName = !playerName || playerName.length > 15;
        
        if (unvalidNumber || unvalidName) {
            setInputsError(true);
        }else {
            onPlayerAdd(playerName, +playerRating)
            setInputsError(false);
            onInputsDelete();
        }
        playerInputRef.current?.focus();
    }

    return (
        <form className={classes.addSectionWrapper}>
            <AiOutlinePlus className={classes.addItemBtn} onClick={onPlayerAddHandler}/>
            <div className={classes.inputsArea}>
                <TiDelete className={classes.eraseText} onClick={onInputsDelete}/>
                <div className={classes.inputsWrapper}>
                    {inputsError && <div className={classes.errorMessage}>{CONSTS.ERROR_MESSAGE}</div>}
                    <input type="text" ref={playerInputRef} placeholder='הזן שם שחקן (עד 15 אותיות)' dir='rtl' required value={playerName} onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)}/>
                    <input type="number" min={0} max={10} placeholder='הזן דירוג שחקן (0-10)' dir='rtl' value={playerRating} required onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerRating(e.target.value)}/>
                </div>
            </div>
        </form>
    )
}

export default AddSection