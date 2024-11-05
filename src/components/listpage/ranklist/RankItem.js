import '../../../styles/listpage/RankItem.css';

const RankItem = ({ rank, idol }) => {
  return (
    <li className="rank-item">
      <div className="idol-info">
        <img src={idol.profilePicture} alt={idol.name} />
        <span className="rank-number">{rank}</span>
        <p className="idol-name">
          {idol.group} {idol.name}
        </p>
      </div>
      <p className="idol-votes">
        {idol.voteCount ? idol.totalVotes.toLocaleString() : '0'}표
      </p>
    </li>
  );
};

export default RankItem;
