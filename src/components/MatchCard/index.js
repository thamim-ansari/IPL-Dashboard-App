import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const MatchStatusClass =
    matchStatus === 'Won' ? `match-status won` : `match-status`
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="card-heading">{competingTeam}</p>
      <p className="card-results">{result}</p>
      <p className={MatchStatusClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
