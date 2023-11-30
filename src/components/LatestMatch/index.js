import './index.css'

const LatestMatch = props => {
  const {LatestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = LatestMatchData
  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-result-and-image-container">
          <div className="competing-team-and-venue-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="venue-and-result">{venue}</p>
            <p className="venue-and-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-team-logo"
          />
        </div>
        <hr className="line-break" />
        <div className="latest-match-stats-container">
          <p className="match-stats-headings">First Innings</p>
          <p className="stats">{firstInnings}</p>
          <p className="match-stats-headings">Second Innings</p>
          <p className="stats">{secondInnings}</p>
          <p className="match-stats-headings">Man Of The Match</p>
          <p className="stats">{manOfTheMatch}</p>
          <p className="match-stats-headings">Umpires</p>
          <p className="stats">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
