export default function formatCard(game) {
  let timeStatus = "";
  let vScore = game.vTeam.score;
  let hScore = game.hTeam.score;
  switch (game.statusNum) {
    case 1:
      timeStatus = game.homeStartTime;
      vScore = 0;
      hScore = 0;
      break;
    case 2:
      timeStatus = game.clock
      break;
    case 3:
      timeStatus = "F"
      break;
    default:
      console.log("timeStatus issue. statusNum = ", game.statusNum)
  }

  
  return (
    `<table>
      <tr>
        <td class="box">
          <span class="visitor-name">${game.vTeam.triCode}</span>
          <span class="visitor-score">${vScore}</span>
        </td>
        <td class="time-box">${timeStatus}</td>
        <td class="box">
          <span class="home-score">${hScore}</span>
          <span class="home-name">${game.hTeam.triCode}</span>
        </td>
      </tr>
    </table>`
  )
}