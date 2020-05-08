import React, { useState, useEffect } from 'react'
import { IBallpark } from '../models/IBallpark'
import MUIDataTable from 'mui-datatables'

export const Ballparks = () => {
  const [ballparks, setBallparks] = useState<Array<IBallpark>>([])

  const options = {
    rowsPerPage: 25,
    rowsPerPageOptions: [25,50,100],
    print: false,
    selectableRows: "none" as const
  }

  const columns = [
    {
      name: "PARKID",
      label: "Park ID",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "NAME",
      label: "Name",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "AKA",
      label: "Other Names",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "CITY",
      label: "City",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "STATE",
      label: "State",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "START",
      label: "Start",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "END",
      label: "End",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "LEAGUE",
      label: "League",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "NOTES",
      label: "Notes",
      options: {
        filter: false,
        sort: true,
      }
    }
  ]

  useEffect(() => {
    if (ballparks.length === 0) {
      const getBallparks = async() => {
        await fetch('https://mbents.github.io/rs-data/ballparks/')
          .then(response => response.json())
          .then(data => setBallparks(data))
          .catch(error => console.log(error))
      }

      getBallparks()
    }
  })

  return (
    <React.Fragment>
      <MUIDataTable
        title={"MLB Ballparks"}
        columns={columns}
        data={ballparks}
        options={options}
      />
    </React.Fragment>
  )
}
