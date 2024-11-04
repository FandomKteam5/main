const RankItem = ({ rank, idols }) => {
  return (
    <li className="rank-item">
      <div className="idol-info">
        <img src={idols.profilePicture} alt={idols.name} />
        <span className="rank-number">{rank}</span>
        <p className="idol-name">
          {idols.group} {idols.name}
        </p>
        <p>{idols}</p>
      </div>
      <p className="idol-votes">
        {idols.voteCount ? idols.totalVotes.toLocaleString() : '0'}표
      </p>
    </li>
  );
};

export default RankItem;
