import React, {useContext} from 'react'
import classes from "./Teams.module.scss"
import { dummyTeams } from '../../../constants/Consts'
import Team from './Team'
import AnimatedPage from "../../../utils/AnimatedPage";
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';


const Teams = () => {
  const { allTeams } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
  console.log(allTeams)

  return (
    <div className={classes.teamsContainer}>
      <AnimatedPage>
        {allTeams.map((team) => (
          <Team team={team} />
        ))}
      </AnimatedPage>
    </div>
  )
}

export default Teams