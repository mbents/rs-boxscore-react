import React, { useState, useEffect } from 'react'
import { IBoxscore } from '../models/IBoxscore'
import { Lineup } from './Lineup'
import { getDateString } from '../services/getDateString'
import useBallparkService from '../services/useBallparkService'
import { IBallpark } from '../models/IBallpark'
import usePlayerService from '../services/usePlayerService'
import { Score } from './Score'
import { Typography, Grid } from '@material-ui/core'
import { Umpires } from './Umpires'
import { WeatherConditions } from './WeatherConditions'

export const Boxscore = (props: any) => {
  const [currentBoxscore, setCurrentBoxscore] = useState<IBoxscore>(null)
  const [ballpark, setBallpark] = useState<IBallpark>()

  const ballparks = useBallparkService()
  const players = usePlayerService()

  useEffect(() => {
    if (ballparks?.length > 0 && currentBoxscore?.game_site) {
      const result = ballparks.filter(item => {
        return item.PARKID === currentBoxscore.game_site
      })
      if (result?.length > 0) {
        setBallpark(result[0])
      }
    }
  }, [ballparks, currentBoxscore])

  useEffect(() => {
    if (currentBoxscore === null) {
      setCurrentBoxscore(props.location.state.boxscore)
      console.log(props.location.state.boxscore)
    }
  }, [currentBoxscore, props.location.state.boxscore])

  const getTimeOfGame = (minutes: string) => {
    const minutesNumber = parseInt(minutes)
    const remainder = minutesNumber % 60
    return `${Math.floor(minutesNumber / 60)}:${remainder < 10 ? '0' : ''}${remainder}`
  }

  return (
    currentBoxscore && players.length > 0 &&
    <React.Fragment>
      <Grid container justify="space-evenly">
        <Grid item>
          <Typography>{getDateString(currentBoxscore?.date)}</Typography>
          <Typography>{`${ballpark?.NAME}, ${ballpark?.CITY}, ${ballpark?.STATE}`}</Typography>
          <Score boxscore={currentBoxscore} />
          <Umpires boxscore={currentBoxscore} players={players} />
          <p>{`Attendance \u2013 ${currentBoxscore.attendance}`}</p>
          <p>{`Time of game \u2013 ${getTimeOfGame(currentBoxscore.time_of_game)}`}</p>
          <WeatherConditions boxscore={currentBoxscore} />
        </Grid>
        <Grid item>
          <Lineup boxscore={currentBoxscore} players={players} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
