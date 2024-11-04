import RankItem from './RankItem';

const IdolChart = ({ idolList }) => {
  // const sortedVoteIdols = [...idols].sort(
  //   (a, b) => b.totalVotes - a.totalVotes
  // );

  return (
    <ul className="idolListUl">
      {idolList &&
        idolList.map((idols) => <RankItem key={idols.id} idol={idols} />)}
    </ul>
  );
};

export default IdolChart;
