// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo, // alt= `latest match ${competing_team}`
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match-container1">
      <div className="latest-match-container">
        <h1 className="latest-match"> Latest Matches </h1>
        <div className="main-card">
          <div className="upper-container">
            <div>
              <p className="competing-team"> {competingTeam} </p>
              <p className="date"> {date} </p>
              <p className="venue"> {venue} </p>
              <p className="result"> {result} </p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="competing-team-logo"
            />
          </div>
          <hr className="hr-line" />
          <div className="">
            <p className="header"> First Innings </p>
            <p className="sub-text"> {firstInnings} </p>
            <p className="header"> Second Innings</p>
            <p className="sub-text"> {secondInnings} </p>
            <p className="header"> Man of The Match </p>
            <p className="sub-text"> {manOfTheMatch} </p>
            <p className="header"> Umpires </p>
            <p className="sub-text"> {umpires} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
