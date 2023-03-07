import React, { ChangeEvent, useContext, useState } from 'react'
import classes from "./ModalConfirm.module.scss"
import { CONSTS } from '../../../constants/Consts'
import { ListItemDesc } from '../../../interfaces/interfaces'
import UseOutsideClick from '../../../utils/customHooks/UseOutsideClick'
import { useNavigate } from "react-router-dom";
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext'

interface ModalConfirmProps {
    allPlayersList: ListItemDesc[]
    setFalse: () => void
}

const ModalConfirm = ({allPlayersList, setFalse}: ModalConfirmProps) => {
  const { randomShuffle } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;

    const [numberOfTeams, setNumberOfTeams] = useState("0");
    const [indication, setIndication] = useState("");
    const [error, setError] = useState(false);
    const numOfActivePlayers = allPlayersList.filter((item) => item.isActive).length;
    const indicationStyle = `${error ? `${classes.teamsIndication} ${classes.errorMessage}`: `${classes.teamsIndication}`}`;
    const navigate = useNavigate();
    // const ref = UseOutsideClick(setFalse)

    const getTeamsDivisionResponse = (numOfTeams: number, numOfPlayers: number) => {
        const firstTeamLength = Math.floor(numOfPlayers / numOfTeams);
        const isRemainExist = numOfPlayers % numOfTeams === 0 ? false : true;
        if(numOfTeams === 0) return "";
        if(numOfTeams > numOfPlayers) {
            setError(true);
            return `${numOfPlayers + 1}${CONSTS.NOT_POSSIBLE_RESPONSE}`;
        }else {
            setError(false);
            return isRemainExist ? `(גודל קבוצה: ${firstTeamLength}-${firstTeamLength + 1})` : `(גודל קבוצה: ${firstTeamLength})`;
        }
    }

    const onRangeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIndication(getTeamsDivisionResponse(+e.target.value, numOfActivePlayers))
        setNumberOfTeams(e.target.value)
    }

    const onModalRandomSubmit = () => {
        if(error || numberOfTeams === "0") return;
        randomShuffle(+numberOfTeams);
        setTimeout(() => {

            navigate("/teams");
        },0)
    }

  return (
    <div className={classes.modalContainer}>
        <div className={`${classes.modalWrapper} ${classes.fadeIn}`}>
            <div className={classes.modalTitle}>{CONSTS.MODAL_MAIN_TITLE}</div>
            <div className={classes.inputWrapper}>
                <div className={classes.teamsNumber}>{numberOfTeams}</div>
                <div className={indicationStyle}>{indication}</div>
                <input type="range" min={0} max={30} value={numberOfTeams} className={classes.rangeInput} onChange={onRangeInputChange}/>
            </div>
            <div className={classes.bottomArea}>
                {/* <button className={classes.btnConfirm} onClick={onModalRandomSubmit}>{CONSTS.MODAL_RATING_SORT}</button> */}
                <button className={classes.btnConfirm} onClick={onModalRandomSubmit}>{CONSTS.MODAL_RANDOM}</button>
                <button className={classes.btnCancel} onClick={() => setFalse()}>{CONSTS.MODAL_CANCEL}</button>
            </div>
        </div>
    </div>
  )
}

export default ModalConfirm