import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Fixtures.css';
import dayjs from 'dayjs'
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [week, setWeek] = useState(0);

  console.log("Fixtures");
    
  useEffect(() => {
    const getWeek = () => {
     axios.get(`http://api.football-data.org/v2/competitions/2021`)
        .then((response) => {
          setWeek(response.data.currentSeason.currentMatchday)
        })
        .catch((err) => {});
    };
    getWeek();
  }, []);

  console.log(week);
  
  useEffect(() => {
  
    const getFixtures = () => {
      axios.get(`http://api.football-data.org/v2/competitions/2021/matches?matchday=${week}`)
        .then((response) => {
          setFixtures(response.data.matches)
        })
        .catch((err) => {});
    };
    getFixtures();
  }, [week]);

  axios.interceptors.request.use(
    config => {
      config.headers["X-Auth-Token"] = `1c195cb9649b46678c999c7bf128cddd`;
      return config;
    },
    err => {
    
    }
  );
  
  console.log(fixtures)

  const renderMatchResults = () => {

    return (

        <>
          {fixtures.map((match, i) => (
            <div key={i} className="matchContainer">
              <div className="match">
                <div className="homeTeam">{match.homeTeam.name}</div>
                <div className="score">
                  {match.score.fullTime.homeTeam} -{" "}
                  {match.score.fullTime.awayTeam}
                </div>
                <div className="awayTeam">{match.awayTeam.name}</div>
              </div>
            </div>
          ))}
        </>
      )
  }
    return (
      <div className="fixtureContainer">
        Current Week: {week}
        {renderMatchResults()}

      </div>
    );
  }
  

export default Fixtures;
