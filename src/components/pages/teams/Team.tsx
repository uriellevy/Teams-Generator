import React from 'react'
import classes from "./Team.module.scss"
import { TeamItem } from '../../../interfaces/interfaces'

interface TeamProps {
    team: TeamItem[]
}

const Team = ({team}: TeamProps) => {
  return (
    <div className={classes.teamContainer}>
        {team.map((teamItem) => (
            <div className={classes.teamItemWrapper}>
                <div className={classes.playerRating}>{teamItem.rating}</div>
                <div className={classes.teamPlayer}>{teamItem.playerName}</div>
            </div>
        ))}
    </div>
  )
}

export default Team