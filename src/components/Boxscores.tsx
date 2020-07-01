import React, { useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Select, FormControl, InputLabel, Grid, Button } from '@material-ui/core'
import _ from 'lodash'
import { SearchContext } from '../store/SearchContext'
import { observer } from 'mobx-react'

const Boxscores = (props) => {
  const searchContext = useContext(SearchContext)

  useEffect(() => {
    const getFranchises = async() => {
      await fetch('https://mbents.github.io/rs-data/franchises')
        .then(response => response.json())
        .then(data => {
          const uniqueFranchises = _.uniqBy(data, 'Current_Franchise_ID')
          const temp = _.sortBy(uniqueFranchises, 'Current_Franchise_ID')
          searchContext.updateFranchises(temp)
        })
        .catch(error => console.log(error))
    }

    getFranchises()
  }, [searchContext])

  const handleChange = (event: { currentTarget: any }) => {
    if (event.currentTarget.value) {
      const result = searchContext.getBoxscores.filter(item => item.game_id === event.currentTarget.value)
      props.history.push({
        pathname: `/boxscores/${event.currentTarget.value}`,
        state: { boxscore: {...result[0]} }
      })
    }
  }

  const handleFranchiseChange = (event: { currentTarget: any }) => {
    searchContext.updateFranchise(event.currentTarget.value)
  }

  const handleYearChange = (event: { currentTarget: any }) => {
    searchContext.updateYear(event.currentTarget.value)
  }

  const handleClick = async() => {
    if (searchContext.getSelectedYear && searchContext.getSelectedFranchise) {
      await fetch(`https://mbents.github.io/rs-data/games/${searchContext.getSelectedYear}${searchContext.getSelectedFranchise}.json`)
        .then(response => response.json())
        .then(data => searchContext.updateBoxscores(data))
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
              value={searchContext.getSelectedFranchise || ''}
            >
              <option value="" />
              {searchContext.getFranchises.map(item =>
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
              value={searchContext.getSelectedYear || ''}
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
        {searchContext.getBoxscores.length > 0 &&
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
              {searchContext.getBoxscores.map(item =>
                <option key={item.game_id} value={item.game_id}>{item.game_id}</option>
              )}
            </Select>
          </FormControl>
        </Grid>}
      </Grid>
    </React.Fragment>
  )
}

export default withRouter(observer(Boxscores))
