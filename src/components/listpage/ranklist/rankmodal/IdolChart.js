const IdolChart = ({ rank, idol }) => (
  <div className="idol-chart-item">
    <span>{rank}</span>
    <img
      src={idol.profilePicture}
      alt={`${idol.name}`}
      className="idol-profile"
    />
    <span>{idol.name}</span>
    <span>{idol.totalVotes.toLocaleString()}표</span>
  </div>
);

export default IdolChart;
