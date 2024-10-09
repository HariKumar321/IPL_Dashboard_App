// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachObj} = this.props
    const {id, name, teamImageUrl} = eachObj
    return (
      <Link className="link-card" to={`/team-matches/${id}`}>
        <li className="each-team-card">
          <img src={teamImageUrl} alt={name} className="each-team-logo" />
          <p className="team-name"> {name} </p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
