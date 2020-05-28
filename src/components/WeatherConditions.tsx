import React from 'react'
import { IBoxscore } from '../models/IBoxscore'
import { Wind } from './Wind'

interface IWeatherConditions {
  boxscore: IBoxscore
}

export const WeatherConditions: React.FC<IWeatherConditions> = (props) => {
  const getSky = (code) => {
    switch (code) {
      case "0":
        return "Sky condition unknown"
      case "1":
        return "Sky is sunny"
      case "2":
        return "Sky is cloudy"
      case "3":
        return "Sky is overcast"
      case "4":
        return "Night"
      case "5":
        return "Dome"
    }
  }

  const getPrecipitation = (code) => {
    switch (code) {
      case "0":
        return "unknown"
      case "1":
        return "none"
      case "2":
        return "drizzle"
      case "3":
        return "showers"
      case "4":
        return "rain"
      case "5":
        return "snow"
    }
  }

  const getFieldCondition = (code) => {
    switch (code) {
      case "0":
        return "unknown"
      case "1":
        return "soaked"
      case "2":
        return "wet"
      case "3":
        return "damp"
      case "4":
        return "dry"
    }
  }

  return (
    <React.Fragment>
      <p>{`${getSky(props.boxscore.sky)} and temperature is ${props.boxscore.temperature}\u00B0`}</p>
      <Wind
        windDirection={props.boxscore.wind_direction}
        windSpeed={props.boxscore.wind_speed}
      />
      <p>{`Precipitation: ${getPrecipitation(props.boxscore.precipitation)}`}</p>
      <p>{`Field condition: ${getFieldCondition(props.boxscore.field_condition)}`}</p>
    </React.Fragment>
  )
}
