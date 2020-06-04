import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Select, FormControl, InputLabel, Grid, Button } from '@material-ui/core'
import { IBoxscore } from '../models/IBoxscore'
import { IFranchise } from '../models/IFranchise'
import _ from 'lodash'

const Boxscores = (props) => {
  const [boxscores, setBoxscores] = useState<Array<IBoxscore>>([])
  const [franchises, setFranchises] = useState<Array<IFranchise>>([])
  const [selectedFranchise, setSelectedFranchise] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)

  useEffect(() => {
    const getFranchises = async() => {
      await fetch('https://mbents.github.io/rs-data/franchises')
          .then(response => response.json())
          .then(data => {
            const uniqueFranchises = _.uniqBy(data, 'Current_Franchise_ID')
            setFranchises(_.sortBy(uniqueFranchises, 'Current_Franchise_ID'))
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
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item>
          <FormControl>
            <InputLabel htmlFor="franchises">Team</InputLabel>
            <Select
              id="franchises"
              label="Team"
              autoWidth
              native
              onChange={handleFranchiseChange}
            >
              <option value="" />
              {franchises.map(item =>
                <option key={item.Current_Franchise_ID} value={item.Current_Franchise_ID}>
                  {item.Current_Franchise_ID}
                </option>
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
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
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Go
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {boxscores.length > 0 &&
        <Grid item>
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
        </Grid>}
      </Grid>
    </React.Fragment>
  )
}

export default withRouter(Boxscores)
