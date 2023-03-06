import React from 'react'
import classes from "./Teams.module.scss"
import { dummyTeams } from '../../../constants/Consts'
import Team from './Team'
import AnimatedPage from "../../../utils/AnimatedPage";


const Teams = () => {

  return (
    <div className={classes.teamsContainer}>
      <AnimatedPage>
        {dummyTeams.map((team) => (
          <Team team={team} />
        ))}
      </AnimatedPage>
    </div>
  )
}

export default Teams