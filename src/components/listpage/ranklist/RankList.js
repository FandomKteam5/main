import React from 'react';
import RankItem from './RankItem';

const RankList = ({ idols }) => {
  return (
    <div className="rank-list">
      {idols.map((idol, index) => (
        <RankItem key={idol.id} rank={index + 1} idol={idol} />
      ))}
    </div>
  );
};

export default RankList;
