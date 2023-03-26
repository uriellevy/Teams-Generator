import { useContext, useRef } from 'react'
import { CONSTS } from '../../../constants/Consts'
import { RiAddCircleFill } from 'react-icons/ri';
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext'
import classes from "./Home.module.scss"
import TopBar from './TopBar'
import ListItem from './ListItem'
import AddSection from './AddSection'
import ModalConfirm from './ModalConfirm'
import useBoolean from '../../../utils/customHooks/UseBoolean'

const Home = () => {
    const { allPlayersList, onPlayerAdd } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
    const [isModalConfirmOpen, { setTrue, setFalse }] = useBoolean(false);
    const playerInputRef = useRef<HTMLInputElement>(null);

    return (
            <div className={classes.homeContainer}>
                <TopBar allPlayersList={allPlayersList} />
                {allPlayersList.length ?
                    <ul className={`${classes.listWrapper} ${classes.fadeIn}`}>
                        {allPlayersList.map((listItem) => (<ListItem listItem={listItem} key={listItem.id} />))}
                    </ul>
                    :
                    <div className={classes.listEmptyWrapper} onClick={() => playerInputRef.current?.focus()}>
                        <div className={classes.listEmptyText}>{CONSTS.LIST_EMPTY_TEXT}</div>
                        <RiAddCircleFill className={classes.listEmptyIcon} />
                    </div>
                }
                <div className={classes.bottomForm}>
                    <AddSection playerInputRef={playerInputRef} onPlayerAdd={onPlayerAdd}/>
                    <button className={classes.btnSubmit} onClick={() => setTrue()}>{CONSTS.GENERATE_TEAMS_BTN}</button>
                </div>
                {isModalConfirmOpen && <ModalConfirm allPlayersList={allPlayersList} setFalse={setFalse}/>}
            </div>
    )
}

export default Home