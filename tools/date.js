export default function getDateString() {
  const date = new Date()
  
  let month = date.getMonth() + 1
  month = month > 9 ? `${month}` : `0${month}`
  
  let day = date.getUTCDate()
  day = day > 9 ? `${day}` : `0${day}`

  let year = date.getUTCFullYear() 
  
  return {
    url: `${year}${month}${day}`,
    header: date.toDateString().slice(4)
  }
}