import React from 'react'
import { IBoxscore } from '../models/IBoxscore'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { getPositionString } from '../services/getPositionString'
import { IPlayer } from '../models/IPlayer'
import { getPlayerString } from '../services/getPlayerString'

interface ILineup {
  boxscore: IBoxscore,
  players: Array<IPlayer>
}

export const Lineup: React.FC<ILineup> = (props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{props.boxscore.home_team}</TableCell>
            <TableCell>{props.boxscore.visiting_team}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_1, props.players)}, ${getPositionString(props.boxscore.home_position_1)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_1, props.players)}, ${getPositionString(props.boxscore.visitor_position_1)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_2, props.players)}, ${getPositionString(props.boxscore.home_position_2)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_2, props.players)}, ${getPositionString(props.boxscore.visitor_position_2)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_3, props.players)}, ${getPositionString(props.boxscore.home_position_3)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_3, props.players)}, ${getPositionString(props.boxscore.visitor_position_3)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_4, props.players)}, ${getPositionString(props.boxscore.home_position_4)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_4, props.players)}, ${getPositionString(props.boxscore.visitor_position_4)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_5, props.players)}, ${getPositionString(props.boxscore.home_position_5)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_5, props.players)}, ${getPositionString(props.boxscore.visitor_position_5)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_6, props.players)}, ${getPositionString(props.boxscore.home_position_6)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_6, props.players)}, ${getPositionString(props.boxscore.visitor_position_6)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_7, props.players)}, ${getPositionString(props.boxscore.home_position_7)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_7, props.players)}, ${getPositionString(props.boxscore.visitor_position_7)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_8, props.players)}, ${getPositionString(props.boxscore.home_position_8)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_8, props.players)}, ${getPositionString(props.boxscore.visitor_position_8)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPlayerString(props.boxscore.home_batter_9, props.players)}, ${getPositionString(props.boxscore.home_position_9)}`}</TableCell>
            <TableCell>{`${getPlayerString(props.boxscore.visitor_batter_9, props.players)}, ${getPositionString(props.boxscore.visitor_position_9)}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
