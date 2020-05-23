import { useEffect, useState } from 'react'
import { IPlayer } from '../models/IPlayer'

const usePlayerService = () => {
  const [players, setPlayers] = useState<Array<IPlayer>>([])

  useEffect(() => {
    console.log('useEffect in usePlayerService')
    const getPlayers = async() => {
      await fetch('https://mbents.github.io/rs-data/players/')
        .then(response => response.json())
        .then(data => setPlayers(data))
        .catch(error => console.log(error))
    }

    getPlayers()
  }, [])

  return players
}

export default usePlayerService
