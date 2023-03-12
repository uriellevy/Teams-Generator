import React, { useState, useEffect } from 'react'
import classes from "./NavigationBar.module.scss"
import { CONSTS } from '../../../constants/Consts'
import { MdArrowForwardIos } from "react-icons/md"
import { BsShareFill } from "react-icons/bs"
import { useLocation, useNavigate } from 'react-router-dom';


const NavigationBar = () => {
  const { NAV_TITLE, TEAMS_RESULTS, BACK_HOME_PAGE } = CONSTS;
  const [isHomeNav, setIsHomeNav] = useState(true);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setIsHomeNav(location.pathname === "/" ? true : false)
  }, [location]);

  const onMenuClick = () => {
    const shareData = { url: window.location.href }
    navigator.share(shareData);
  }

  return (
    <>
      {isHomeNav ?
        <div className={classes.navContainer}>{NAV_TITLE}</div>
        :
        <div className={classes.navTeamsContainer}>
          <div className={classes.navMainTitle}>{TEAMS_RESULTS}</div>
          <div className={classes.btnBackWrapper} onClick={() => navigate("/")}>
            <div className={classes.backTitle}>{BACK_HOME_PAGE}</div>
            <MdArrowForwardIos className={classes.btnBack} />
          </div>
        </div>
      }
    </>
  )
}

export default NavigationBar