import React, { useState, useEffect } from 'react';
import RankItem from './RankItem';
import VoteButton from './VoteButton';

const VoteModal = () => {
  const [idols, setIdols] = useState([]);
  const [selectedIdol, setSelectedIdol] = useState(null);

  const handleSelect = (idolName) => {
    setSelectedIdol(idolName);
  };

  const handleVote = () => {
    if (!selectedIdol) {
      alert('Please select an idol to vote for.');
      return;
    }
    alert(`You voted for ${selectedIdol}!`);
  };

  return (
    <div className="vote-modal">
      <h2>이달의 여자 아이돌</h2>
      <div className="rank-list">
        {idols.map((idol, index) => (
          <RankItem
            key={idol.name}
            rank={index + 1}
            idol={idol}
            isSelected={selectedIdol === idol.name}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <VoteButton onVote={handleVote} />
    </div>
  );
};

export default VoteModal;
