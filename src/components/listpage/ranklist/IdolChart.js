import RankItem from './RankItem';

const IdolChart = ({ idols }) => {
  // const sortedVoteIdols = [...idols].sort(
  //   (a, b) => b.totalVotes - a.totalVotes
  // );

  return (
    <ul className="idolListUl">
      {idols &&
        idols.map((idols, index) => (
          <RankItem key={idols.id} rank={index + 1} idols={idols} />
        ))}
    </ul>
  );
};

export default IdolChart;
