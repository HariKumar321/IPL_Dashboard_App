// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getSpecificIplTeamData()
  }

  getSpecificIplTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {team_banner_url, latest_match_details, recent_matches} = data

    const teamBannerUrl = team_banner_url

    const latestMatchDetails = {
      umpires: latest_match_details.umpires,
      result: latest_match_details.result,
      manOfTheMatch: latest_match_details.man_of_the_match,
      id: latest_match_details.id,
      date: latest_match_details.date,
      venue: latest_match_details.venue,
      competingTeam: latest_match_details.competing_team,
      competingTeamLogo: latest_match_details.competing_team_logo, // alt= `latest match ${competing_team}`
      firstInnings: latest_match_details.first_innings,
      secondInnings: latest_match_details.second_innings,
      matchStatus: latest_match_details.match_status,
    }

    const recentMatchesList = recent_matches.map(eachObj => ({
      umpires: eachObj.umpires,
      result: eachObj.result,
      manOfTheMatch: eachObj.man_of_the_match,
      id: eachObj.id,
      date: eachObj.date,
      venue: eachObj.venue,
      competingTeam: eachObj.competing_team,
      competingTeamLogo: eachObj.competing_team_logo, // alt as `competing team ${competing_team}`
      firstInnings: eachObj.first_innings,
      secondInnings: eachObj.second_innings,
      matchStatus: eachObj.match_status,
    }))

    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches: recentMatchesList,
      isLoading: false,
    })
  }

  renderBannerImage = () => {
    const {teamBannerUrl} = this.state

    return (
      <div className="banner-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
      </div>
    )
  }

  renderLatestMatch = () => {
    const {latestMatchDetails} = this.state

    return <LatestMatch latestMatchDetails={latestMatchDetails} />
  }

  renderMatchCard = () => {
    const {recentMatches} = this.state

    return (
      <ul className="ul-container">
        {recentMatches.map(eachObj => (
          <MatchCard key={eachObj.id} eachObj={eachObj} />
        ))}
      </ul>
    )
  }

  renderCompleteRoute = () => (
    <>
      {this.renderBannerImage()}

      {this.renderLatestMatch()}

      {this.renderMatchCard()}
    </>
  )

  renderFetchingData = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? this.renderFetchingData() : this.renderCompleteRoute()}
      </div>
    )
  }
}

export default TeamMatches
