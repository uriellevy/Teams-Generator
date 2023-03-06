import React from 'react'
import classes from "./TopBar.module.scss"
import { ListItemDesc } from '../../../interfaces/interfaces';

interface TopBarProps {
  allPlayersList: ListItemDesc[]
}


const TopBar = ({allPlayersList}: TopBarProps) => {

  const getIndicationContent = () => {
    const listLength = allPlayersList.length;
    const activeLength = allPlayersList.filter((item) => item.isActive).length;
    return ` ${activeLength}/${listLength}:שחקנים פעילים`;
  }


  return (
    <div className={classes.topbarWrapper}>
        <div className={classes.topIndication}>{getIndicationContent()}</div>
    </div>
  )
}

export default TopBar