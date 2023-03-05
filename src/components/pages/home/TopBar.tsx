import React from 'react'
import classes from "./TopBar.module.scss"
import { AiFillDelete } from 'react-icons/ai';


const TopBar = () => {
  return (
    <div className={classes.topbarWrapper}>
        <AiFillDelete className={classes.deleteAllBtn}/>
        <div className={classes.topIndication}>שחקנים פעילים 3 מתוך 30</div>
    </div>
  )
}

export default TopBar