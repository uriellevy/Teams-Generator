import React from 'react'
import classes from "./NavigationBar.module.scss"
import { CONSTS } from '../../../constants/Consts'

const NavigationBar = () => {
  return (
    <div className={classes.navContainer}>{CONSTS.NAV_TITLE}</div>
  )
}

export default NavigationBar