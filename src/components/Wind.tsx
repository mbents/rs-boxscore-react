import React from 'react'

interface IWind {
  windDirection: string,
  windSpeed: string
}

export const Wind: React.FC<IWind> = (props) => {

  const getWindDirection = (code) => {
    switch (code) {
      case "0":
      default:
        return "unknown"
      case "1":
        return "to left"
      case "2":
        return "to center"
      case "3":
        return "to right"
      case "4":
        return "left to right"
      case "5":
        return "from left"
      case "6":
        return "from center"
      case "7":
        return "from right"
      case "8":
        return "right to left"
    }
  }

  return (
    <p>{`Wind ${getWindDirection(props.windDirection)} at ${props.windSpeed} mph`}</p>
  )
}
