import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-items">
      <li className="team-card-items">
        <img src={teamImageUrl} alt={name} className="team-logo-image" />
        <p className="team-names">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
