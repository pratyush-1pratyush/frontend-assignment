import React, { useState, useEffect } from 'react';
import { initialStreamers } from '../Constants/constant';
import { LeaderBoardContainer, PlayerRow, PlayerName, PlayerScore } from './StyledComponents';

const LeaderBoard = () => {
  const [players,setPlayers] = useState(initialStreamers);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedPlayers = players.map(player => ({
        ...player,
        score: player.score + Math.floor(Math.random() * 10) + 1,
      }))
      updatedPlayers.sort((a, b) => b.score - a.score);
      setPlayers(updatedPlayers);
    }, 1000);

    return () => clearInterval(interval);
  }, [players]);

  return (
    <LeaderBoardContainer>
      {players.map((player, index) => (
        <PlayerRow key={player.id} color={player.color} style={{ transform: `translateY(${index * 10}px)` }}>
          <PlayerName>{player.name}</PlayerName>
          <PlayerScore>{player.score}</PlayerScore>
        </PlayerRow>
      ))}
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;
