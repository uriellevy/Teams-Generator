import classes from "./Team.module.scss"
import { TeamItem } from '../../../interfaces/interfaces'
import RatingDisplay from '../../common/ratingDisplay/RatingDisplay'
import { CONSTS } from '../../../constants/Consts'
import { useState } from "react"

interface TeamProps {
    team: TeamItem[]
    teamIndex: number
}

const Team = ({team, teamIndex}: TeamProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const openEditModeHandler = () => {
    setIsEditMode(true);
    console.log(teamIndex)
  }



  return (
    <div className={`${classes.teamContainer} ${classes.fadeIn}`}>
        <div onClick={openEditModeHandler} className={classes.teamTitle}>{`${CONSTS.TEAM_NUMBER} ${teamIndex + 1}`}</div>
        {team.map((teamItem) => (
            <div className={classes.teamItemWrapper} key={teamItem.id}>
                <RatingDisplay rating={teamItem.rating}/>
                <div className={classes.teamPlayer}>{teamItem.playerName}</div>
            </div>
        ))}
    </div>
  )
}

export default Team