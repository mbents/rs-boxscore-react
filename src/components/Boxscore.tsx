import React, { useState, useEffect } from 'react'
import { IBoxscore } from '../models/IBoxscore'

export const Boxscore = (props: any) => {
  const [currentBoxscore, setCurrentBoxscore] = useState<IBoxscore>(null)

  useEffect(() => {
    if (currentBoxscore === null) {
      setCurrentBoxscore(props.location.state.boxscore)
    }
  }, [currentBoxscore, props.location.state.boxscore])

  return (
    <h5>
      {currentBoxscore &&
        `Game played on ${currentBoxscore?.day_of_week}, ${currentBoxscore?.date}`
      }
    </h5>
  )
}
