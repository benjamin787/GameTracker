export default function formatCard(game) {
  let timeStatus = ""
  switch (game.statusNum) {
    case 1:
      timeStatus = game.homeStartTime
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
      <th>${game.vTeam.triCode} vs ${game.hTeam.triCode}</th>
      <tr>
        <td>${game.vTeam.score}</td>
        <td>${timeStatus}</td>
        <td>${game.hTeam.score}</td>
      </tr>
    </table>`
  )
}