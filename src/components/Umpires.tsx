import React from 'react'
import { IBoxscore } from '../models/IBoxscore'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { getPlayerString } from '../services/getPlayerString'
import { IPlayer } from '../models/IPlayer'

interface IUmpires {
  boxscore: IBoxscore,
  players: Array<IPlayer>
}

export const Umpires: React.FC<IUmpires> = (props) => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><em>Umpires</em></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_plate_umpire, props.players)}, home`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.first_base_umpire, props.players)}, 1B`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.second_base_umpire, props.players)}, 2B`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.third_base_umpire, props.players)}, 3B`}</TableCell>
          </TableRow>
          {props.boxscore.left_field_umpire &&
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.left_field_umpire, props.players)}, LF`}</TableCell>
          </TableRow>}
          {props.boxscore.right_field_umpire &&
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.right_field_umpire, props.players)}, RF`}</TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
