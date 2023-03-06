import React from 'react'
import classes from "./TopBar.module.scss"
import { ListItemDesc } from '../../../interfaces/interfaces';

interface TopBarProps {
  listItems: ListItemDesc[]
}


const TopBar = ({listItems}: TopBarProps) => {

  const getIndicationContent = () => {
    const listLength = listItems.length;
    const activeLength = listItems.filter((item) => item.isActive).length;
    return ` ${activeLength}/${listLength}:שחקנים פעילים`;
  }


  return (
    <div className={classes.topbarWrapper}>
        <div className={classes.topIndication}>{getIndicationContent()}</div>
    </div>
  )
}

export default TopBar