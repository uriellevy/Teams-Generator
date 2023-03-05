import React from 'react'
import classes from "./ListItem.module.scss"
import { ListItemDesc } from '../../../interfaces/interfaces'
import { MdRemoveCircle } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { RiAddCircleFill } from 'react-icons/ri';
import { CONSTS } from '../../../constants/Consts';

interface ListItemProps {
    listItem: ListItemDesc
}

const ListItem = ({listItem}: ListItemProps) => {
  return (
    <li className={classes.listItemWrapper}>
        <div className={classes.itemIconsWrapper}>
        <MdRemoveCircle className={classes.iconRemoveItem}/>
        <FaEdit className={classes.iconEditItem}/>

        </div>
        <div className={classes.rating}>{listItem.rating}</div>
        <div className={classes.text}>{listItem.playerName}</div>
    </li>
  )
}

export default ListItem