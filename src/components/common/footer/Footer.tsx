import React from 'react'
import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={classes.copyright}>
            Made by{' '}
            <a
                className={classes.copyrightBtn}
                href="https://www.linkedin.com/in/uriel-levy-9b325b174/"
                target="_blank"
                rel="noreferrer"
            >
                Uriel Levy
            </a>
        </footer>
    )
}

export default Footer