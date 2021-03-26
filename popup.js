import { baseURL, parseJSON } from './config.js'
import formatCard from './card.js'
import date from './date.js'

const scoreList = document.getElementById("score-list")
const dateTitle = document.getElementById("date-title")

const setDate = () => dateTitle.innerText = date().header

const displayScores = data => {
  data.games.forEach(game => {
    let li = document.createElement("li")
    li.innerHTML = `${formatCard(game)}`
    scoreList.appendChild(li)
  })
}

const getScores = () => {
  setDate()
  fetch(baseURL)
  .then(parseJSON)
  .then(displayScores)
}

document.addEventListener("DOMContentLoaded", event => getScores())
