// import { useState } from 'react';
// import { postVotes } from '../../../services/RankApi';
// import LackModal from './LackModal';
// import '../../../styles/listpage/ChartModal.css';
// import RankItem from './RankItem';

// const ChartModal = ({
//   isOpen,
//   closeModal,
//   currentTab,
//   idols,
//   setIsVote,
//   userCredit,
//   setUserCredit,
// }) => {
//   const [selectedIdol, setSelectedIdol] = useState(null);
//   const [showLackModal, setShowLackModal] = useState(false);

//   const handleVote = async () => {
//     if (selectedIdol) {
//       if (userCredit >= 1000) {
//         try {
//           await postVotes(selectedIdol.id);
//           setUserCredit((prevCredit) => prevCredit - 1000);
//           setIsVote(true);
//           closeModal();
//           alert(`${selectedIdol.name}에 투표했습니다!`);
//         } catch (error) {
//           alert('투표 중 오류가 발생했습니다.');
//         }
//       } else {
//         setShowLackModal(true);
//       }
//     } else {
//       alert('투표할 아이돌을 선택해주세요!');
//     }
//   };

//   const closeLackModal = () => {
//     setShowLackModal(false);
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="modal-overlay">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h3>
//               {currentTab === 'female'
//                 ? '이달의 여자 아이돌'
//                 : '이달의 남자 아이돌'}
//             </h3>
//             <button onClick={closeModal} className="close-button">
//               ×
//             </button>
//           </div>
//           <div className="modal-body">
//             <ul className="idol-list">
//               {idols &&
//                 idols.map((idol, index) => (
//                   <li key={idol.id} className="idol-item">
//                     <label className="idol-label">
//                       <img
//                         src={idol.image}
//                         alt={idol.name}
//                         className="idol-image"
//                       />
//                       <div className="idol-info">
//                         <span className="idol-rank">{index + 1}</span>
//                         <div className="idol-details">
//                           <span className="idol-name">{idol.name}</span>
//                           <span className="idol-votes">
//                             {idol.totalVotes.toLocaleString()}표
//                           </span>
//                         </div>
//                       </div>
//                       <input
//                         type="radio"
//                         name="idol"
//                         value={idol.id}
//                         checked={selectedIdol?.id === idol.id}
//                         onChange={() => setSelectedIdol(idol)}
//                         className="idol-radio"
//                       />
//                     </label>
//                   </li>
//                 ))}
//             </ul>
//             <button onClick={handleVote} className="vote-button">
//               투표하기
//             </button>
//             <p className="credit-info">
//               투표하는 데 <span className="credit-cost">1000 크레딧</span>이
//               소모됩니다.
//             </p>
//           </div>
//         </div>
//       </div>

//       {showLackModal && <LackModal onClose={closeLackModal} />}
//     </>
//   );
// };

// export default ChartModal;

import { useState } from 'react';
import { postVotes } from '../../../services/RankApi';
import LackModal from './LackModal';
import '../../../styles/listpage/ChartModal.css';
import RankItem from './RankItem';

const ChartModal = ({
  isOpen,
  closeModal,
  currentTab,
  idols,
  setIsVote,
  userCredit,
  setUserCredit,
}) => {
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [showLackModal, setShowLackModal] = useState(false);

  const handleVote = async () => {
    if (selectedIdol) {
      if (userCredit >= 1000) {
        try {
          await postVotes(selectedIdol.id);
          setUserCredit((prevCredit) => prevCredit - 1000);
          setIsVote(true);
          closeModal();
          alert(`${selectedIdol.name}에 투표했습니다!`);
        } catch (error) {
          alert('투표 중 오류가 발생했습니다.');
        }
      } else {
        setShowLackModal(true);
      }
    } else {
      alert('투표할 아이돌을 선택해주세요!');
    }
  };

  const closeLackModal = () => {
    setShowLackModal(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              {currentTab === 'female'
                ? '이달의 여자 아이돌'
                : '이달의 남자 아이돌'}
            </h3>
            <button onClick={closeModal} className="close-button">
              ×
            </button>
          </div>
          <div className="modal-body">
            <ul className="idol-list">
              {idols &&
                idols.map((idols, index) => (
                  <li key={idols.id}>
                    <RankItem
                      rank={index + 1}
                      name={idols.name}
                      image={idols.image}
                      group={idols.group}
                      onClick={() => setSelectedIdol(idols)}
                      isSelected={selectedIdol?.id === idols.id}
                      isVote={idols.isVote}
                    />
                    <input
                      type="radio"
                      name="idol"
                      value={idols.id}
                      checked={selectedIdol?.id === idols.id}
                      onChange={() => setSelectedIdol(idols)}
                      className="idol-radio"
                    />
                  </li>
                ))}
            </ul>
            <button onClick={handleVote} className="vote-button">
              투표하기
            </button>
            <p className="credit-info">
              투표하는 데 <span className="credit-cost">1000 크레딧</span>이
              소모됩니다.
            </p>
          </div>
        </div>
      </div>

      {showLackModal && <LackModal onClose={closeLackModal} />}
    </>
  );
};

export default ChartModal;
