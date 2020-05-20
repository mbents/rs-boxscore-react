import React, { useState, useEffect } from 'react'
import { Select, FormControl, InputLabel } from '@material-ui/core'
import { IBoxscore } from '../models/IBoxscore'

export const Boxscores = (props: any) => {
  const [boxscores, setBoxscores] = useState<Array<IBoxscore>>([])

  useEffect(() => {
    if (boxscores.length === 0) {
      const getBoxscores = async() => {
        await fetch('https://mbents.github.io/rs-data/games/2013BOS.json')
          .then(response => response.json())
          .then(data => setBoxscores(data))
          .catch(error => console.log(error))
      }

      getBoxscores()
    }
  })

  const handleChange = (event: { currentTarget: any }) => {
    if (event.currentTarget.value) {
      const result = boxscores.filter(item => item.game_id === event.currentTarget.value)
      props.history.push({
        pathname: `/boxscores/${event.currentTarget.value}`,
        state: { boxscore: result[0] }
      })
    }
  }

  return (
    <React.Fragment>
      <FormControl>
        <InputLabel htmlFor="games">Games</InputLabel>
        <Select
          id="games"
          label="Games"
          autoWidth
          native
          onChange={handleChange}
        >
          <option value="" />
          {boxscores.map(item =>
            <option key={item.game_id} value={item.game_id}>{item.game_id}</option>
          )}
        </Select>
      </FormControl>
    </React.Fragment>
  )
}
