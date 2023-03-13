import React, { useContext, useRef, useEffect } from 'react'
import classes from "./Home.module.scss"
import TopBar from './TopBar'
import ListItem from './ListItem'
import AddSection from './AddSection'
import { CONSTS } from '../../../constants/Consts'
import { RiAddCircleFill } from 'react-icons/ri';
import ModalConfirm from './ModalConfirm'
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext'
import useBoolean from '../../../utils/customHooks/UseBoolean'
import ReactGA from 'react-ga';

ReactGA.initialize('G-QLEJF1HVTP');


const Home = () => {
    const { allPlayersList } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
    const [isModalConfirmOpen, { setTrue, setFalse }] = useBoolean(false);
    const playerInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    })

    return (
            <div className={classes.homeContainer}>
                <TopBar allPlayersList={allPlayersList} />
                {allPlayersList.length ?
                    <ul className={`${classes.listWrapper} ${classes.fadeIn}`}>
                        {allPlayersList.map((listItem) => (<ListItem listItem={listItem} />))}
                    </ul>
                    :
                    <div className={classes.listEmptyWrapper} onClick={() => playerInputRef.current?.focus()}>
                        <div className={classes.listEmptyText}>{CONSTS.LIST_EMPTY_TEXT}</div>
                        <RiAddCircleFill className={classes.listEmptyIcon} />
                    </div>
                }
                <div className={classes.bottomForm}>
                    <AddSection playerInputRef={playerInputRef}/>
                    <button className={classes.btnSubmit} onClick={() => setTrue()}>{CONSTS.GENERATE_TEAMS_BTN}</button>
                </div>
                {isModalConfirmOpen && <ModalConfirm allPlayersList={allPlayersList} setFalse={setFalse} isModalConfirmOpen={isModalConfirmOpen} />}
            </div>
    )
}

export default Home