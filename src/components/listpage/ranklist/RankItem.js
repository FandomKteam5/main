import '../../../styles/listpage/RankItem.css';

const RankItem = ({ rank, idol, align = 'row' }) => {
  console.log(align);
  return (
    <li className="rank-item">
      <div className="idol-info">
        <img src={idol.profilePicture} alt={idol.name} />
        <span className="rank-number">{rank}</span>
        <div className="column-idol">
          <p className="idol-name">
            {idol.group} {idol.name}
          </p>
          {/* 조건부 구현 */}
          {align === 'column' && (
            <p className="idol-votes">
              {idol.totalVotes ? idol.totalVotes.toLocaleString() : '0'}표
            </p>
          )}
        </div>
      </div>
      {align === 'row' && (
        <p className="idol-votes">
          {idol.totalVotes ? idol.totalVotes.toLocaleString() : '0'}표
        </p>
      )}
    </li>
  );
};

export default RankItem;
