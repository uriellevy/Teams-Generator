import React, { ChangeEvent, RefObject, useState } from 'react'
import classes from "./AddSection.module.scss"
import { AiOutlinePlus } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { CONSTS } from '../../../constants/Consts';
interface AddSectionProps {
    playerInputRef: RefObject<HTMLInputElement>
    onPlayerAdd: (name: string, rating: number) => void
}

const AddSection = React.memo(({ playerInputRef, onPlayerAdd}: AddSectionProps) => {
    const {ERROR_MESSAGE, ADD_SECTION_TITLE, PLAYER_NAME_PLACEHOLDER, PLAYER_RATE_PLACEHOLDER} = CONSTS;
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
        } else {
            onPlayerAdd(playerName, +playerRating)
            setInputsError(false);
            onInputsDelete();
        }
        playerInputRef.current?.focus();
    }

    return (
        <form className={classes.addSectionContainer}>
            <div className={classes.addSectionTitle}>{ADD_SECTION_TITLE}</div>
            <div className={classes.addSectionWrapper}>
                <AiOutlinePlus className={classes.addItemBtn} onClick={onPlayerAddHandler} />
                <div className={classes.inputsArea}>
                    <TiDelete className={classes.eraseText} onClick={onInputsDelete} />
                    <div className={classes.inputsWrapper}>
                        {inputsError && <div className={classes.errorMessage}>{ERROR_MESSAGE}</div>}
                        <input type="text" ref={playerInputRef} placeholder={PLAYER_NAME_PLACEHOLDER} dir='rtl' required value={playerName} onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)} />
                        <input type="number" min={0} max={10} placeholder={PLAYER_RATE_PLACEHOLDER} dir='rtl' value={playerRating} required onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerRating(e.target.value)} />
                    </div>
                </div>
            </div>
        </form>
    )
})

export default AddSection