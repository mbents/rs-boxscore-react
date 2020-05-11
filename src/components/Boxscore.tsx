import React, { useState, useEffect } from 'react'

export const Boxscore = () => {
  const [boxscore, setBoxscore] = useState({})

  useEffect(() => {
    if (boxscore !== null) {
      const getBoxscore = async() => {
        await fetch('https://mbents.github.io/rs-data/games/2013BOS.json')
          .then(response => response.json())
          .then(data => setBoxscore(data))
          .catch(error => console.log(error))
      }

      getBoxscore()
    }
  })

  return (
    <h3>Hello boxscore</h3>
  )
}
