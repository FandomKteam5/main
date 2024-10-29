import React from 'react';

const RankItem = ({ rank, idol, isSelected, onSelect }) => {
  return (
    <div className="rank-item" onClick={() => onSelect(idol.id)}>
      <div className="rank-number">{rank}</div>
      <img src={idol.image} alt={`${idol.id} profile`} />
      <div className="rank-details">
        <p className="idol-name">
          {idol.group} {idol.name}
        </p>
        <p>{idol.totalVotes.toLocaleString()} 표</p>
      </div>
      <input
        className="radio-btn"
        type="radio"
        checked={isSelected}
        onChange={() => onSelect(idol.id)}
      />
    </div>
  );
};

export default RankItem;
