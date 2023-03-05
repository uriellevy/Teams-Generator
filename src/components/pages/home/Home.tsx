import React from 'react'
import classes from "./Home.module.scss"
import TopBar from './TopBar'
import ListItem from './ListItem'
import AddSection from './AddSection'
import { dummyListItems, CONSTS } from '../../../constants/Consts'
import { RiAddCircleFill } from 'react-icons/ri';
import ModalConfirm from './ModalConfirm'


const Home = () => {

    return (
        <div className={classes.homeContainer}>
            <TopBar />
            {/* <ul className={classes.listWrapper}>
                {dummyListItems.map((listItem) => (
                    <ListItem listItem={listItem} />
                ))}
            </ul> */}
            <div className={classes.listEmptyWrapper}>
                <div className={classes.listEmptyText}>{CONSTS.LIST_EMPTY_TEXT}</div>
                <RiAddCircleFill className={classes.listEmptyIcon}/>
            </div>
            <form className={classes.bottomForm}>
                <AddSection />
                <input type="submit" className={classes.btnSubmit} value={CONSTS.GENERATE_TEAMS_BTN} />
            </form>
            <ModalConfirm/>
        </div>
    )
}

export default Home