import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {
    teamMatchesData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const fetchedData = await response.json()
    const formattedData = {
      teamBannerURL: fetchedData.team_banner_url,
      latestMatch: this.getFormattedData(fetchedData.latest_match_details),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({
      teamMatchesData: formattedData,
      isLoading: false,
    })
  }

  renderRecentMatchesList = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul className="matches-list-container">
        {recentMatches.map(eachItem => (
          <MatchCard key={eachItem.id} matchDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerURL, latestMatch} = teamMatchesData
    return (
      <div className="team-matches-container">
        <img
          src={teamBannerURL}
          alt="team banner"
          className="team-banner-image"
        />
        <LatestMatch LatestMatchData={latestMatch} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  getPageThemeColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const pageTheme = `team-matches-bg-container ${this.getPageThemeColor()}`
    return (
      <div className={pageTheme}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
