import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="card-heading">{competingTeam}</p>
      <p className="card-results">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
