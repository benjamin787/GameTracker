import date from "./date.js"

const parseJSON = data => data.json()

const baseURL = `http://data.nba.net/10s/prod/v1/${date().url}/scoreboard.json`

export { baseURL, parseJSON }