export const getDateString = (inputString) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const year = inputString.substring(0, 4)
  const month = inputString.substring(4, 6)
  const day = inputString.substring(6)
  const date = new Date(`${month} ${day}, ${year}`)
  return date.toLocaleDateString('en-US', options)
}
