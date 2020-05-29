import React, { useState, useEffect } from 'react'
import { Select, FormControl, InputLabel } from '@material-ui/core'
import { IBoxscore } from '../models/IBoxscore'
import { IFranchise } from '../models/IFranchise'
import _ from 'lodash'

export const Boxscores = (props: any) => {
  const [boxscores, setBoxscores] = useState<Array<IBoxscore>>([])
  const [franchises, setFranchises] = useState<Array<IFranchise>>([])

  useEffect(() => {
    const getFranchises = async() => {
      await fetch('https://mbents.github.io/rs-data/franchises')
          .then(response => response.json())
          .then(data => {
            const uniqueFranchises = _.uniqBy(data, 'Franchise_ID')
            setFranchises(_.sortBy(uniqueFranchises, 'Franchise_ID'))
          })
          .catch(error => console.log(error))
    }

    getFranchises()
  }, [])

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

  const handleFranchiseChange = (event: { currentTarget: any }) => {
    console.log(event.currentTarget.value)
  }

  return (
    <React.Fragment>
      <FormControl>
        <InputLabel htmlFor="franchises">Franchises</InputLabel>
        <Select
          id="franchises"
          label="Franchises"
          autoWidth
          native
          onChange={handleFranchiseChange}
        >
          <option value="" />
          {franchises.map(item =>
            <option key={item.Franchise_ID} value={item.Current_Franchise_ID}>
              {`${item.Location_Name} ${item.Nickname} (${item.First_Date_Nickname_Used} \u2013 ${item.Last_Date_Nickname_Used || 'present'})`}
            </option>
          )}
        </Select>
      </FormControl>
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
