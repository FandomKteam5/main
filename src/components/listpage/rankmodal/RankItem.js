const RankItem = ({ rank, idol, isSelected, onSelect }) => {
  return (
    <div className="rank-item" onClick={() => onSelect(idol.name)}>
      <img src={idol.image} alt={`${idol.name} profile`} />
      <div className="rank-details">
        <p>
          {rank}. {idol.name}
        </p>
        <p>{idol.votes} 표</p>
      </div>
      <input type="radio" checked={isSelected} onChange={() => {}} />
    </div>
  );
};

export default RankItem;
