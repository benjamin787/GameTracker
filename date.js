const getDateString = () => {
  const date = new Date()
  let month = date.getMonth() + 1
  let day = date.getUTCDate()
  let year = date.getUTCFullYear()
  return `${year}${month}${day}`
}

export default getDateString;