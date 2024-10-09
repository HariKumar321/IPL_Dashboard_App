// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachObj} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachObj

  const matchStatusStyle = matchStatus === 'Won' ? 'green-color' : 'red-color'

  return (
    <li className="li-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team"> {competingTeam} </p>
      <p className="result"> {result} </p>
      <p className={`${matchStatusStyle}`}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
