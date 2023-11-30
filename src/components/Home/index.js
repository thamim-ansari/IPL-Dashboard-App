import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const apiLink = 'https://apis.ccbp.in/ipl'
class Home extends Component {
  state = {
    iplTeamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamList()
  }

  getIplTeamList = async () => {
    const response = await fetch(apiLink)
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplTeamsData: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamList = () => {
    const {iplTeamsData} = this.state
    return (
      <ul className="team-list-container">
        {iplTeamsData.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg">
        <div className="home-container">
          <div className="home-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-logo-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}

export default Home
