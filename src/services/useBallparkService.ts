import { useEffect, useState } from 'react'
import { IBallpark } from '../models/IBallpark'

const useBallparkService = () => {
  const [ballparks, setBallparks] = useState<Array<IBallpark>>([])

  useEffect(() => {
    const getBallparks = async() => {
      await fetch('https://mbents.github.io/rs-data/ballparks/')
        .then(response => response.json())
        .then(data => setBallparks(data))
        .catch(error => console.log(error))
    }

    getBallparks()
  }, [])

  return ballparks
}

export default useBallparkService
