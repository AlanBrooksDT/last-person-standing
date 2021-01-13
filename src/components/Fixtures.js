import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Fixtures.css";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [week, setWeek] = useState(0);

  useEffect(() => {
    const getWeek = () => {
      axios
        .get(`http://api.football-data.org/v2/competitions/2021`)
        .then((response) => {
          setWeek(response.data.currentSeason.currentMatchday);
        })
        .catch((err) => {});
    };
    getWeek();
  }, []);

  useEffect(() => {
    const getFixtures = () => {
      axios
        .get(
          `http://api.football-data.org/v2/competitions/2021/matches?matchday=${week}`
        )
        .then((response) => {
          setFixtures(response.data.matches);
        })
        .catch((err) => {});
    };
    getFixtures();
  }, [week]);

  axios.interceptors.request.use(
    (config) => {
      config.headers["X-Auth-Token"] = `1c195cb9649b46678c999c7bf128cddd`;
      return config;
    },
    (err) => {}
  );

  console.log(fixtures);

  const renderStatus = (status) => {
    switch (status) {
      case "FINISHED":
        return "FT";
      case "IN_PLAY":
        return "Live";
      case "SCHEDULED":
        return "-";
      case "POSTPONED":
        return "PP";
      default:
        return "";
    }
  };

  const renderMatchResults = () => {
    return (
      <>
        {fixtures.map((match, i) => (
          <div key={i} className={`${match.status} matchContainer`}>
            <div className="match">
              <div className="homeTeam" data-testid="homeTeam">
                {match.homeTeam.name}
              </div>
              <div className={`${match.status} score`} data-testid="score">
                {match.score.fullTime.homeTeam} -{" "}
                {match.score.fullTime.awayTeam}
              </div>
              <div className="awayTeam" data-testid="awayTeam">
                {match.awayTeam.name}
              </div>
              <div className="matchStatus">{renderStatus(match.status)}</div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="fixtureContainer" data-testid="fixtureContainer">
      {renderMatchResults()}
    </div>
  );
};

export default Fixtures;
