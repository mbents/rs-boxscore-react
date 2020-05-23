import React, { useState, useEffect } from 'react'
import { IBoxscore } from '../models/IBoxscore'
import { Lineup } from './Lineup'
import { getDateString } from '../services/getDateString'
import useBallparkService from '../services/useBallparkService'
import { IBallpark } from '../models/IBallpark'
import usePlayerService from '../services/usePlayerService'

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

  return (
    <h5>
      {currentBoxscore && players.length > 0 &&
      <React.Fragment>
        <p>{getDateString(currentBoxscore?.date)}</p>
        <p>{`${ballpark?.NAME}, ${ballpark?.CITY}, ${ballpark?.STATE}`}</p>
        <Lineup boxscore={currentBoxscore} players={players} />
      </React.Fragment>
      }
    </h5>
  )
}
