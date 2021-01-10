import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: centre;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 30px 30px 40px;
  color: white;
  font-size: 10px;
`;

const Title = styled.h2`
@media (max-width: 415px) {
  font-size: 2em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  }
}
`;

const StyledP = styled.p`
  @media (max-width: 415px) {
    font-size: 11px
        }
  }
`;

const Rules = () => (
  <StyledDiv>
    <Title>Rules</Title>
    <StyledP>
      Each week all entrants must pick a Premier League team to win their game.
      If entrants team win, they’re through to next round. Lose or draw, and the
      entrant is out of the competition. Entrants must notify the organiser by
      (Time, Date) of their Selection. If you do not select a team by the
      deadline, or in the event of you nominating a team that you have already
      used, you will be assigned the lowest alphabetic ordered team in the
      table, that you have not previously selected. You cannot select the same
      team to win more than once during the competition. Once you have chosen a
      team, you cannot change it. If a match involving your Selection is
      postponed (after you have made your selection), you will continue to the
      next round. However, that team will no longer be available for you to pick
      in the following rounds. If fewer than five entrants remain standing and
      they are eliminated in the same week, the prize fund will be shared
      equally between them. If two or more entrants remain standing after the
      final game of the season, then the prize fund will be equally shared
      between them.
    </StyledP>
  </StyledDiv>
);

export default Rules;
