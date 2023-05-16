import { useState, useEffect } from 'react';
import classes from "./NavigationBar.module.scss";
import { CONSTS } from '../../../constants/Consts';
import { MdArrowForwardIos } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BiTable } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';


const NavigationBar = () => {
  const { NAV_TITLE, TEAMS_RESULTS, BACK_HOME_PAGE, TABLE_PAGE, TEAMS } = CONSTS;
  const navigate = useNavigate();
  let location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      {pathName === "/" &&
        <div className={classes.navContainer}>{NAV_TITLE}</div>
      }
      {pathName === "/teams" &&
        <div className={classes.navTeamsContainer}>
          <div className={classes.navMainTitle}>{TEAMS_RESULTS}</div>
          <div className={classes.btnTableWrapper} onClick={() => navigate("/table")}>
            <div className={classes.btnTableTitle}>{TABLE_PAGE}</div>
            <BiTable className={classes.btnTable} />
          </div>
          <div className={classes.btnBackWrapper} onClick={() => navigate("/")}>
            <div className={classes.backTitle}>{BACK_HOME_PAGE}</div>
            <MdArrowForwardIos className={classes.btnBack} />
          </div>
        </div>
      }
      {pathName === "/table" &&
        <div className={classes.navTeamsContainer}>
          <div className={classes.navMainTitle}>{TEAMS_RESULTS}</div>
          <div className={classes.btnBackWrapper} onClick={() => navigate("/teams")}>
            <div className={classes.backTitle}>{TEAMS}</div>
            <RiTeamFill className={classes.btnBack} />
          </div>
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