// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {iplTeamList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamCard()
  }

  getIplTeamCard = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const backEndData = data.teams

    const camelCaseData = backEndData.map(eachObj => ({
      id: eachObj.id,
      name: eachObj.name,
      teamImageUrl: eachObj.team_image_url,
    }))

    this.setState({iplTeamList: camelCaseData, isLoading: false})
  }

  renderListOfTeams = () => {
    const {iplTeamList} = this.state

    return (
      <div>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-main-img"
          />
          <h1 className="main-heading"> IPL Dashboard </h1>
        </div>

        <ul className="team-card-container">
          {iplTeamList.map(eachObj => (
            <TeamCard key={eachObj.id} eachObj={eachObj} />
          ))}
        </ul>
      </div>
    )
  }

  renderFetchingData = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? this.renderFetchingData() : this.renderListOfTeams()}
      </div>
    )
  }
}

export default Home
