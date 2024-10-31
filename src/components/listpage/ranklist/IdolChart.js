import '../../../styles/listpage/IdolChart.css';

const IdolChart = ({ rank, idol }) => (
  <div className="idol-card">
    <div className="idol-rank">{rank}</div>
    <img src={idol.imageUrl} alt={idol.name} className="idol-image" />
    <div className="idol-info">
      <div className="idol-name">{idol.name}</div>
      <div className="idol-votes">{idol.votes}표</div>
    </div>
  </div>
);

export default IdolChart;
