import React from 'react'
import classes from "./Team.module.scss"
import { TeamItem } from '../../../interfaces/interfaces'
import RatingDisplay from '../../common/ratingDisplay/RatingDisplay'
import { CONSTS } from '../../../constants/Consts'

interface TeamProps {
    team: TeamItem[]
    teamNumber: number
}

const Team = ({team, teamNumber}: TeamProps) => {
  return (
    <div className={`${classes.teamContainer} ${classes.fadeIn}`}>
        <div className={classes.teamTitle}>{`${CONSTS.TEAM_NUMBER} ${teamNumber}`}</div>
        {team.map((teamItem) => (
            <div className={classes.teamItemWrapper}>
                <RatingDisplay rating={teamItem.rating}/>
                <div className={classes.teamPlayer}>{teamItem.playerName}</div>
            </div>
        ))}
    </div>
  )
}

export default Team