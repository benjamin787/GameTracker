import { baseURL } from './config.js'

const parseJSON = data => data.json()

const displayScores = data => {

}

const getScores = () => {
  fetch(baseURL)
    .then(parseJSON)
    .then(({ games }) => console.log(games))
}

let getButton = document.getElementById("getButton")

getButton.addEventListener("click", getScores)
