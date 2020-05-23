import React from 'react'
import { IBoxscore } from '../models/IBoxscore'
import { Grid } from '@material-ui/core'
import { getPositionString } from '../services/getPositionString'
import { IPlayer } from '../models/IPlayer'
import { getPlayerString } from '../services/getPlayerString'

interface ILineup {
  boxscore: IBoxscore,
  players: Array<IPlayer>
}

export const Lineup: React.FC<ILineup> = (props) => {
  return (
    <React.Fragment>
      <Grid container justify="space-around">
        <Grid item>{props.boxscore.home_team}</Grid>
        <Grid item>{props.boxscore.visiting_team}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_1, props.players)}, ${getPositionString(props.boxscore.home_position_1)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_1, props.players)}, ${getPositionString(props.boxscore.visitor_position_1)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_2, props.players)}, ${getPositionString(props.boxscore.home_position_2)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_2, props.players)}, ${getPositionString(props.boxscore.visitor_position_2)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_3, props.players)}, ${getPositionString(props.boxscore.home_position_3)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_3, props.players)}, ${getPositionString(props.boxscore.visitor_position_3)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_4, props.players)}, ${getPositionString(props.boxscore.home_position_4)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_4, props.players)}, ${getPositionString(props.boxscore.visitor_position_4)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_5, props.players)}, ${getPositionString(props.boxscore.home_position_5)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_5, props.players)}, ${getPositionString(props.boxscore.visitor_position_5)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_6, props.players)}, ${getPositionString(props.boxscore.home_position_6)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_6, props.players)}, ${getPositionString(props.boxscore.visitor_position_6)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_7, props.players)}, ${getPositionString(props.boxscore.home_position_7)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_7, props.players)}, ${getPositionString(props.boxscore.visitor_position_7)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_8, props.players)}, ${getPositionString(props.boxscore.home_position_8)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_8, props.players)}, ${getPositionString(props.boxscore.visitor_position_8)}`}</Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>{`${getPlayerString(props.boxscore.home_batter_9, props.players)}, ${getPositionString(props.boxscore.home_position_9)}`}</Grid>
        <Grid item>{`${getPlayerString(props.boxscore.visitor_batter_9, props.players)}, ${getPositionString(props.boxscore.visitor_position_9)}`}</Grid>
      </Grid>
    </React.Fragment>
  )
}
