import React, { useState, useEffect } from 'react'
import { IFranchise } from '../models/IFranchise'
import MUIDataTable from 'mui-datatables'

export const Franchises = () => {
  const [franchises, setFranchises] = useState<Array<IFranchise>>([])

  const options = {
    pagination: false,
    print: false,
    selectableRows: "none" as const
  }

  const columns=[
    {
      name: "Current_Franchise_ID",
      label: 'Current Franchise ID',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Franchise_ID",
      label: 'Franchise ID',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "League",
      label: "League",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Division",
      label: 'Division',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Location_Name",
      label: 'Location Name',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Nickname",
      label: 'Nickname',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Alternate_Nicknames",
      label: "Alternate Nicknames",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "First_Date_Nickname_Used",
      label: 'Used From',
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "Last_Date_Nickname_Used",
      label: 'Used Until',
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "City",
      label: 'City',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "State",
      label: "State",
      options: {
        filter: true,
        sort: true,
      }
    },
  ]

  useEffect(() => {
    if (franchises?.length === 0) {
      const getFranchises = async() => (
        await fetch('https://mbents.github.io/rs-data/franchises/')
          .then(response => response.json())
          .then(data => setFranchises(data))
          .catch(error => console.log(error))
      )

      getFranchises()
    }
  })

  return (
    <React.Fragment>
      <MUIDataTable
        title={"MLB Franchises"}
        columns={columns}
        data={franchises}
        options={options}
      />
    </React.Fragment>
  )
}
