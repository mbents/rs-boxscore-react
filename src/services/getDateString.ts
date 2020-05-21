export const getDateString = (inputString) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const year = '20130410'.substring(0, 4)
  const month = '20130410'.substring(4, 6)
  const day = '20130410'.substring(6)
  const date = new Date(`${month} ${day}, ${year}`)
  return date.toLocaleDateString('en-US', options)
}
