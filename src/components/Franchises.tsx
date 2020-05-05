import React, { useState, useEffect } from 'react'
import { FranchiseListItem } from './FranchiseListItem'
import { IFranchise } from '../models/IFranchise'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

export const Franchises = () => {
  const [franchises, setFranchises] = useState<Array<IFranchise>>()

  useEffect(() => {
    const getFranchises = async() => (
      await fetch('https://mbents.github.io/rs-data/franchises/')
        .then(response => response.json())
        .then(data => setFranchises(data))
        .catch(error => console.log(error))
    )

    getFranchises()
  })

  return (
    <React.Fragment>
      <h3>MLB Franchises</h3>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="right">Current Franchise ID</TableCell>
              <TableCell align="right">Franchise ID</TableCell>
              <TableCell align="right">League</TableCell>
              <TableCell align="right">Division</TableCell>
              <TableCell align="right">Location Name</TableCell>
              <TableCell align="right">Nickname</TableCell>
              <TableCell align="right">Alternate Nicknames</TableCell>
              <TableCell align="right">Used From</TableCell>
              <TableCell align="right">Used Until</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {franchises?.map((franchise, index) =>
            <FranchiseListItem
              franchise={franchise}
              index={index}
            />
          )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}
