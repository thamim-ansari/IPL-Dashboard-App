import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import './index.css'

const teamColorList = {
  RCB: 'bangalore',
  KKR: 'kolkata',
  KXP: 'punjab',
  CSK: 'chennai',
  RR: 'rajasthan',
  MI: 'mumbai',
  SH: 'hyderabad',
  DC: 'delhi',
}
class TeamMatches extends Component {
  state = {
    pageThemeColor: '',
    LatestMatchData: [],
    matchCardData: [],
    teamBannerImage: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const bannerImageUrl = data.team_banner_url
    const formattedLatestMatchDetail = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const formattedRecentMatches = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({
      pageThemeColor: teamColorList[id],
      LatestMatchData: formattedLatestMatchDetail,
      matchCardData: formattedRecentMatches,
      teamBannerImage: bannerImageUrl,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {teamBannerImage, LatestMatchData} = this.state
    return (
      <div className="team-matches-container">
        <img
          src={teamBannerImage}
          alt="team banner"
          className="team-banner-image"
        />
        <h1>Latest Matches</h1>
        <LatestMatch LatestMatchData={LatestMatchData} />
      </div>
    )
  }

  render() {
    const {pageThemeColor, isLoading} = this.state
    const pageBgClass = `team-matches-bg-container ${pageThemeColor}`
    return (
      <div className={pageBgClass}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
