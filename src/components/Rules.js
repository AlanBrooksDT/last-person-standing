import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: white;
`;

const Rules = () => (
  <div
    style={{
      textAlign: "centre",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "40px",
    }}
  >
    <h2 style={{ color: "white" }}>Rules</h2>
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
  </div>
);

export default Rules;
