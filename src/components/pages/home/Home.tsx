import React from 'react'
import classes from "./Home.module.scss"
import TopBar from './TopBar'
import ListItem from './ListItem'
import AddSection from './AddSection'
import { dummyListItems } from '../../../constants/Consts'

const Home = () => {
    
  return (
    <div className={classes.homeContainer}>
        <TopBar/>
        {dummyListItems.map((item,) => (
            <ListItem/>
        ))}
        <AddSection/>
    </div>
  )
}

export default Home