import { useState, useEffect } from "react";
import axios from "axios";
import MatchDetails from "./MatchDetails";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const getFixtures = () => {
      axios
        .get(
          `https://apiv2.apifootball.com/?action=get_events&from=2021-01-15&to=2021-01-22&league_id=149&APIkey=9e1cb6da84bad3656c4258767aa92267e1b1c20018b1768a5717b79fae46807e`
        )
        .then((response) => {
          setFixtures(response.data);
        })
        .catch((err) => {});
    };
    getFixtures();
  }, []);

  console.log(fixtures);
  // console.log(fixtures[0]);
  // console.log(fixtures[0].match_hometeam_name)

  // const homeTeam = fixtures.map(match => match[0].match_hometeam_name);
  //const awayTeam = fixtures.map(match => match[0].match_awayteam_name);

  //console.log(homeTeam);
  if (!fixtures.length) {
    return <p>No Fixtures</p>;
  } else {
    return (
      <div className="matches">
        {fixtures.map((match) => {
          return (
            <MatchDetails
              home={match.match_hometeam_name}
              away={match.match_awayteam_name}
            />
          );
        })}
      </div>
    );
  }
};

export default Fixtures;
