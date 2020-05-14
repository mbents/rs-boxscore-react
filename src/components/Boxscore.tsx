import React, { useState, useEffect } from 'react'
import { Select, FormControl, InputLabel } from '@material-ui/core'
import { IBoxscore } from '../models/IBoxscore'

export const Boxscore = () => {
  const [boxscore, setBoxscore] = useState<Array<IBoxscore>>([])
  const [currentBoxscore, setCurrentBoxscore] = useState<IBoxscore>()

  useEffect(() => {
    if (boxscore.length === 0) {
      const getBoxscore = async() => {
        await fetch('https://mbents.github.io/rs-data/games/2013BOS.json')
          .then(response => response.json())
          .then(data => setBoxscore(data))
          .catch(error => console.log(error))
      }

      getBoxscore()
    }
  })

  const handleChange = (event: { currentTarget: any }) => {
    if (event.currentTarget.value) {
      const result = boxscore.filter(item => item.game_id === event.currentTarget.value)
      console.log(result[0])
      setCurrentBoxscore(result[0])
    }
  }

  return (
    <React.Fragment>
      <FormControl>
        <InputLabel htmlFor="games">Games</InputLabel>
        <Select
          id="games"
          native
          label="Games"
          autoWidth
          onChange={handleChange}
        >
          <option value="" />
          {boxscore.map(item =>
            <option value={item.game_id}>{item.game_id}</option>
          )}
        </Select>
      </FormControl>
    </React.Fragment>
  )
}
