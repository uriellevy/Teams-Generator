import React, { ChangeEvent, useContext, useState, useRef, useEffect } from 'react'
import classes from "./ListItem.module.scss"
import { ListItemDesc } from '../../../interfaces/interfaces'
import { MdRemoveCircle } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import { FaEdit } from 'react-icons/fa';
import RatingDisplay from '../../common/ratingDisplay/RatingDisplay';
import { CONSTS } from '../../../constants/Consts';
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';

interface ListItemProps {
  listItem: ListItemDesc
}

const ListItem = ({ listItem }: ListItemProps) => {
  const { onDeletePlayer, onToggleActiveStatus, onOpenEditMode, onEditPlayerConfirm } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
  const [playerEdited, setPlayerEdited] = useState(listItem.playerName);
  const [rating, setRating] = useState(listItem.rating);
  const textInputRef = useRef<HTMLInputElement>(null);
  const activeBtnStyle = `${classes.activePlayer} ${listItem.isActive ? classes.active : ""}`;
  const activeBtnContent = `${listItem.isActive ? CONSTS.ACTIVE_PLAYER : CONSTS.NOT_ACTIVE_PLAYER}`;

  useEffect(() => {
    textInputRef.current?.focus();
  }, [listItem.isEditMode])

  return (
    <li className={classes.listItemWrapper}>
      {listItem.isEditMode ?
        <>
          <div className={classes.editModeWrapper}>
            <GiConfirmed className={classes.iconConfirmEdit} onClick={() => onEditPlayerConfirm(listItem.id, playerEdited, rating)} />
            <div className={classes.editInputs}>
              <input className={classes.editPlayerName} type="number" min={0} max={10} placeholder='הזן דירוג שחקן...' dir='rtl' value={rating} onChange={(e: ChangeEvent<HTMLInputElement>) => setRating(+e.target.value)} />
              <input className={classes.editRating} type="text" ref={textInputRef} placeholder='הזן שם שחקן...' dir='rtl' required value={playerEdited} onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerEdited(e.target.value)} />
            </div>
          </div>
        </>
        :
        <>
          <div className={classes.itemIconsWrapper}>
            <MdRemoveCircle className={classes.iconRemoveItem} onClick={() => onDeletePlayer(listItem.id)} />
            <FaEdit className={classes.iconEditItem} onClick={() => onOpenEditMode(listItem.id)} />
            <div className={activeBtnStyle} onClick={() => onToggleActiveStatus(listItem.id)}>{activeBtnContent}</div>
          </div>
          <div className={classes.moreDetails}>
            <RatingDisplay rating={listItem.rating} />
            <div className={classes.text}>{listItem.playerName}</div>
          </div>
        </>
      }

    </li>
  )
}

export default ListItem