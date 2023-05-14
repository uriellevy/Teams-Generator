import classes from "./Team.module.scss";
import { TeamItem } from '../../../interfaces/interfaces';
import RatingDisplay from '../../common/ratingDisplay/RatingDisplay';
import { CONSTS } from '../../../constants/Consts';
import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";


interface TeamProps {
  team: TeamItem[]
  teamIndex: number
}

const Team = ({ team, teamIndex }: TeamProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const openEditModeHandler = () => {
    setIsEditMode(true);
  }



  return (
    <Droppable droppableId={teamIndex.toString()}>
      {(provided) => (
        <div className={`${classes.teamContainer} ${classes.fadeIn}`} {...provided.droppableProps} ref={provided.innerRef}>
          <div onClick={openEditModeHandler} className={classes.teamTitle}>{`${CONSTS.TEAM_NUMBER} ${teamIndex + 1}`}</div>
          {team.map((teamItem, i) => (
            <Draggable draggableId={teamItem.id} index={i} key={teamItem.id}>
              {(provided) => (
                <div className={classes.teamItemWrapper} key={teamItem.id} {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}>
                  <RatingDisplay rating={teamItem.rating} />
                  <div className={classes.teamPlayer}>{teamItem.playerName}</div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Team