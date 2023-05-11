import {useContext, useEffect, useState} from 'react'
import classes from "./Teams.module.scss"
import Team from './Team'
import AnimatedPage from "../../../utils/AnimatedPage";
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';


const Teams = () => {
  const { allTeams } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
  const [teamsName,setTeamsName] = useState<string[]>([]);
  useEffect(() => {
    allTeams.forEach((curr,i) => {
      setTeamsName([...teamsName, `קבוצה מספר ${i}`])
    })
  },[])
  console.log(allTeams)
  console.log(teamsName)

  return (
    <div className={classes.teamsContainer}>
      <AnimatedPage>
        {allTeams.map((team, i) => (
          <Team team={team} teamIndex={i} key={i}/>
        ))}
      </AnimatedPage>
    </div>
  )
}

export default Teams