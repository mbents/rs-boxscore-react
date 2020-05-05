import React from 'react'
import { IFranchise } from '../models/IFranchise'
import { TableRow, TableCell } from '@material-ui/core'

interface IFranchiseListItem {
  franchise: IFranchise
  index: number
}

export const FranchiseListItem: React.FC<IFranchiseListItem> = (props) => {
  return (
    <TableRow key={`${props.franchise.Franchise_ID}-${props.index}`}>
      <TableCell align="right">{props.franchise.Current_Franchise_ID}</TableCell>
      <TableCell align="right">{props.franchise.Franchise_ID}</TableCell>
      <TableCell align="right">{props.franchise.League}</TableCell>
      <TableCell align="right">{props.franchise.Division}</TableCell>
      <TableCell align="right">{props.franchise.Location_Name}</TableCell>
      <TableCell align="right">{props.franchise.Nickname}</TableCell>
      <TableCell align="right">{props.franchise.Alternate_Nicknames}</TableCell>
      <TableCell align="right">{props.franchise.First_Date_Nickname_Used}</TableCell>
      <TableCell align="right">{props.franchise.Last_Date_Nickname_Used}</TableCell>
      <TableCell align="right">{props.franchise.City}</TableCell>
      <TableCell align="right">{props.franchise.State}</TableCell>
    </TableRow>
  )
}
