import React, { useState, useEffect } from 'react'
import { Select, FormControl, InputLabel, Grid, Button } from '@material-ui/core'
import { IBoxscore } from '../models/IBoxscore'
import { IFranchise } from '../models/IFranchise'
import _ from 'lodash'

export const Boxscores = (props: any) => {
  const [boxscores, setBoxscores] = useState<Array<IBoxscore>>([])
  const [franchises, setFranchises] = useState<Array<IFranchise>>([])
  const [selectedFranchise, setSelectedFranchise] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)

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
    setSelectedFranchise(event.currentTarget.value)
  }

  const handleYearChange = (event: { currentTarget: any }) => {
    setSelectedYear(event.currentTarget.value)
  }

  const handleClick = async() => {
    if (selectedYear && selectedFranchise) {
      await fetch(`https://mbents.github.io/rs-data/games/${selectedYear}${selectedFranchise}.json`)
        .then(response => response.json())
        .then(data => setBoxscores(data))
        .catch(error => console.log(error))
    }
  }

  return (
    <Grid container justify="space-evenly">
      <Grid item>
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
      </Grid>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="year">Year</InputLabel>
          <Select
            id="year"
            label="Year"
            autoWidth
            native
            onChange={handleYearChange}
          >
            <option value="" />
            {_.range(2013, 1920, -1).map(year =>
              <option key={year} value={year}>{year}</option>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Go
        </Button>
      </Grid>
      <Grid item>
        {boxscores.length > 0 &&
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
        </FormControl>}
      </Grid>
    </Grid>
  )
}
