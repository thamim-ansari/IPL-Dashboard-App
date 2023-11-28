import './index.css'

const LatestMatch = props => {
  const {LatestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = LatestMatchData
  return (
    <div>
      <div>
        <h1>{competingTeam}</h1>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
      </div>
    </div>
  )
}

export default LatestMatch
