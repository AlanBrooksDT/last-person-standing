import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Fixtures.css';
import dayjs from 'dayjs'
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const getFixtures = () => {
      axios
        .get(
          `https://apiv2.apifootball.com/?action=get_events&from=2020-12-15&to=2020-12-20&league_id=149&APIkey=9e1cb6da84bad3656c4258767aa92267e1b1c20018b1768a5717b79fae46807e`
        )
        .then((response) => {
          setFixtures(response.data);
        })
        .catch((err) => {});
    };
    getFixtures();
  }, []);

  console.log(fixtures)

  const renderMatchResults = () => {

    if (fixtures.length === 0) {
      return <p>No Fixtures</p>;
    } else {
      return (
        <>
          {fixtures.map((match, i) => (
            <div key={i} className="matchContainer">
              <div className="match">
                <div className="matchDate">{dayjs(match.match_date).format('MMMM Do, YYYY')}</div>
                <div className="homeTeam">{match.match_hometeam_name}</div>
                <div className="score">
                  {match.match_hometeam_score} -{" "}
                  {match.match_awayteam_score}
                </div>
                <div className="awayTeam">{match.match_awayteam_name}</div>
              </div>
            </div>
          ))}
        </>
      )
    }
  }
    return (
      <div className="fixtureContainer">
        {renderMatchResults()}
      </div>
    );
  }
  

export default Fixtures;
