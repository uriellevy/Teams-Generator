import React, { useContext } from 'react'
import classes from "./Table.module.scss"
import { TeamsGeneratorContext, TeamsGeneratorContextType } from '../../../context/teamsGeneratorContext';

const Table = () => {
    const { allTeams } = useContext(TeamsGeneratorContext) as TeamsGeneratorContextType;
    return (
        <div className={classes.tableContainer}>
            <table className={classes.table}>
                <thead className={classes.tableHead}>
                    <tr className={classes.headTitleWrapper}>
                        {allTeams.map((curr, idx) => (
                            <th className={classes.headTitle}>{`קבוצה מספר ${idx + 1}`}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={classes.tableBody}>
                    {allTeams.map((team, idx) => (
                        <td  className={classes.bodyColumn} key={idx}>
                            {team.map((player) => (
                                <tr key={player.id} className={classes.playerWrapper}>{player.playerName}</tr>
                            ))}
                        </td>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table