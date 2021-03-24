export default function getDateString() {
  const date = new Date()
  let month = date.getMonth() + 1
  let day = date.getUTCDate()
  let year = date.getUTCFullYear() 
  return {
    url: (
      month > 9
      ? `${year}${month}${day}`
      : `${year}0${month}${day}`
    ),
    header: date.toDateString().slice(4)
  }
}