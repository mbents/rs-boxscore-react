import { IPlayer } from "../models/IPlayer";

export const getPlayerString = (playerId: string, players: Array<IPlayer>) => {
  const player = players.filter(item => item.playerId === playerId)

  if (player) {
    return `${player[0].firstName} ${player[0].lastName}`
  } else {
    return null
  }
}