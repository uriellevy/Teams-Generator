import React from 'react'
import classes from "./ListItem.module.scss"
import { ListItemDesc } from '../../../interfaces/interfaces'
import { MdRemoveCircle } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import RatingDisplay from '../../../utils/RatingDisplay';
import { CONSTS } from '../../../constants/Consts';

interface ListItemProps {
  listItem: ListItemDesc
}

const ListItem = ({ listItem }: ListItemProps) => {
  const activeBtnStyle = `${classes.activePlayer} ${listItem.isActive ? classes.active : ""}`;
  const activeBtnContent = `${listItem.isActive ? CONSTS.ACTIVE_PLAYER : CONSTS.NOT_ACTIVE_PLAYER}`;
  
  return (
    <li className={classes.listItemWrapper}>
      <div className={classes.itemIconsWrapper}>
        <MdRemoveCircle className={classes.iconRemoveItem} />
        <FaEdit className={classes.iconEditItem} />
        <div className={activeBtnStyle}>{activeBtnContent}</div>
      </div>
      <RatingDisplay rating={listItem.rating} />
      <div className={classes.text}>{listItem.playerName}</div>
    </li>
  )
}

export default ListItem