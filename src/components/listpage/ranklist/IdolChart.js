import RankItem from './RankItem';
import '../../../styles/listpage/IdolChart.css';

const IdolChart = ({ idolList }) => {
  // const sortedVoteIdols = [...idols].sort(
  //   (a, b) => b.totalVotes - a.totalVotes
  // );

  return (
    <ul className="idol-list">
      {idolList &&
        idolList.map((idols, index) => (
          <RankItem key={idols.id} rank={index + 1} idol={idols} />
        ))}
    </ul>
  );
};

export default IdolChart;

// const IdolChart = ({ idolList }) => {
//   const sortedIdolList = [...idolList].sort(
//     (a, b) => b.totalVotes - a.totalVotes
//   );

//   return (
//     <ul className="idol-list">
//       {sortedIdolList &&
//         sortedIdolList.map((idols, index) => (
//           <RankItem key={idols.id} rank={index + 1} idol={idols} />
//         ))}
//     </ul>
//   );
// };

// export default IdolChart;
