import React from 'react'
import { IBoxscore } from '../models/IBoxscore'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface IScore {
  boxscore: IBoxscore
}

const useStyles = makeStyles({
  table: {
    width: 100,
    margin: '2px'
  },
})

export const Score: React.FC<IScore> = (props) => {
  const classes = useStyles()
  return (
    <TableContainer>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>R</TableCell>
            <TableCell>H</TableCell>
            <TableCell>E</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{props.boxscore.home_team}</TableCell>
            <TableCell>{props.boxscore.home_final_score}</TableCell>
            <TableCell>{props.boxscore.home_hits}</TableCell>
            <TableCell>{props.boxscore.home_errors}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{props.boxscore.visiting_team}</TableCell>
            <TableCell>{props.boxscore.visitor_final_score}</TableCell>
            <TableCell>{props.boxscore.visitor_hits}</TableCell>
            <TableCell>{props.boxscore.visitor_errors}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
