import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="team-card-items">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-logo-image" />
        <p className="team-names">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
