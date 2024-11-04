// import { useState, useEffect } from 'react';
// import { getCharts, postVotes } from '../../../services/RankApi';

// const VoteModal = ({ gender, isOpen, onClose }) => {
//   const [idols, setIdols] = useState([]);
//   const [selectedIdol, setSelectedIdol] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchIdols = async () => {
//       try {
//         const data = await getCharts({ gender, pageSize: 30 });
//         setIdols(data.idols);
//       } catch (error) {
//         console.error('에러 발생', error);
//       }
//     };

//     if (isOpen) {
//       fetchIdols();
//     }
//   }, [gender, isOpen]);

//   const handleVote = async () => {
//     if (selectedIdol) {
//       setIsLoading(true);
//       try {
//         await postVotes(selectedIdol.id);
//         alert(`${selectedIdol.name}에 투표하였습니다!`);
//         onClose();
//       } catch (error) {
//         console.error('Error voting:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>
//           {gender === 'female' ? '이달의 여자 아이돌' : '이달의 남자 아이돌'}
//         </h2>
//         <button onClick={onClose} className="close-button">
//           X
//         </button>
//         <div className="idol-list">
//           {idols.map((idol, index) => (
//             <label key={idol.id} className="idol-item">
//               <input
//                 type="radio"
//                 name="idol"
//                 checked={selectedIdol?.id === idol.id}
//                 onChange={() => setSelectedIdol(idol)}
//               />
//               <span>
//                 {index + 1}. {idol.name}
//               </span>
//               <span>{idol.totalVotes.toLocaleString()}표</span>
//             </label>
//           ))}
//         </div>
//         <button
//           onClick={handleVote}
//           disabled={!selectedIdol || isLoading}
//           className="vote-button"
//         >
//           {isLoading ? '투표 중...' : '투표하기'}
//         </button>
//         <p>투표하는 데 1000 크레딧이 소모됩니다.</p>
//       </div>
//     </div>
//   );
// };

// export default VoteModal;
