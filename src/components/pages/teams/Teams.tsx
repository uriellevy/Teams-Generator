import {useContext} from 'react'
import classes from "./Teams.module.scss"
import Team from './Team'
import AnimatedPage from "../../../utils/AnimatedPage";
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';


const Teams = () => {
  const { allTeams } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;

  return (
    <div className={classes.teamsContainer}>
      <AnimatedPage>
        {allTeams.map((team, i) => (
          <Team team={team} teamNumber={i + 1} key={i}/>
        ))}
      </AnimatedPage>
    </div>
  )
}

export default Teams