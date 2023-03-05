import React from 'react'
import classes from "./Teams.module.scss"
import { dummyTeams } from '../../../constants/Consts'
import Team from './Team'

const Teams = () => {

  return (
    <div className={classes.teamsContainer}>
      {dummyTeams.map((team) => (
        <Team team={team}/>
      ))}
    </div>
  )
}

export default Teams