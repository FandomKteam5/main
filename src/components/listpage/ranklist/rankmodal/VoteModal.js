import { useState } from 'react';
import RankItem from './RankItem';
import VoteButton from './VoteButton';
import MockData from './MockData';

const VoteModal = () => {
  const [selectedIdol, setSelectedIdol] = useState(null);

  const handleSelect = (id) => {
    setSelectedIdol(id);
  };

  const handleVote = () => {
    if (selectedIdol !== null) {
      alert(`투표: ${seletedIdol}`);
    } else {
      alert('투표할 아이돌 선택해주세요.');
    }
  };

  return (
    <div className="vote-modal">
      <h2>이달의 여자 아이돌</h2>
      <div className="rank-list">
        {MockData.map((item, index) => (
          <RankItem
            key={item.idol.id}
            rank={index + 1}
            idol={item.idol}
            isSelected={selectedIdol === item.idol.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <VoteButton onVote={handleVote} />
      <p className="vote-credits">투표하는 데 1000 크레딧이 소모됩니다.</p>
    </div>
  );
};

export default VoteModal;
