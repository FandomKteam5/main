import RankItem from './RankItem';

const IdolChart = ({ isLoading, loadingError, idolList }) => {
  const chartClass = `chart ${idolList.length % 2 === 0 ? 'even' : ''}`;

  if (loadingError) {
    return <div className="error-message">Error: {loadingError}</div>;
  }

  if (idolList.length === 0 && isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <ul className={chartClass}>
      {idolList.map((idol, index) => (
        <RankItem key={idol.id} idol={idol} ranking={index + 1} />
      ))}
    </ul>
  );
};

export default IdolChart;
