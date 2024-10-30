import React from 'react';

const RankItem = ({ rank, idol }) => {
  return (
    <div className="rank-item">
      <div className="rank-number">{rank}</div>
      <img className="idol-image" src={idol.image} alt={idol.name} />
      <div className="idol-info">
        <p className="idol-name">{idol.name}</p>
        <p className="idol-votes">{idol.votes}표</p>
      </div>
    </div>
  );
};

export default RankItem;
