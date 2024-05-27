import styled from "styled-components";

export const LeaderBoardContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const PlayerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  transition:transform 0.5s ease;
  background-color: ${({ color }) => color}
`;

export const PlayerName = styled.div`
   color:white;
`;

export const PlayerScore = styled.div`
  text-align: right;
  color:white;
`;