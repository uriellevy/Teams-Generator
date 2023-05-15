import { useContext } from 'react'
import classes from "./Teams.module.scss"
import Team from './Team'
import AnimatedPage from "../../../utils/AnimatedPage";
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


const Teams = () => {
  const { allTeams, setAllTeams } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;

  const handleDragAndDrop = (results: any) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    if (type === "group") {
      const reorderedStores = [...allTeams];
      const teamsSourceIndex = source.index;
      const teamsDestinatonIndex = destination.index;
      const [removedStore] = reorderedStores.splice(teamsSourceIndex, 1);
      reorderedStores.splice(teamsDestinatonIndex, 0, removedStore);

      return setAllTeams(reorderedStores);
    }

    if(source.droppableId !== destination.droppableId) {
      const reorderedStores = [...allTeams];
      const indexOfSourceArray = +source.droppableId;
      const draggedItem = reorderedStores[+source.droppableId][source.index];
      const indexOfDestinationArray = +destination.droppableId;
      
      reorderedStores[indexOfSourceArray].splice(source.index,1);
      reorderedStores[indexOfDestinationArray].splice(destination.index,0,draggedItem);

      setAllTeams(reorderedStores)
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragAndDrop}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div className={classes.teamsContainer} {...provided.droppableProps} ref={provided.innerRef}>
            <AnimatedPage>
              {allTeams.map((team, i) => (
                <Draggable draggableId={i.toString()} index={i} key={i}>
                  {(provided) => (
                    <div  {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}>
                      <Team team={team} teamIndex={i} key={i} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </AnimatedPage>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Teams