import { useState, useEffect } from 'react';
import { getCharts, postVotes } from '../../../services/RankApi';
import LackModal from './LackModal';
import '../../../styles/listpage/ChartModal.css';
import RankItem from './RankItem';

const ChartModal = ({
  isOpen, // 모달 열림 여부
  closeModal, // 모달 닫기 함수
  currentTab, // 현재 탭 (성별에 따라 아이돌 목록 변경)
  //setUserCredit, // 사용자 크레딧 상태 설정 함수
  onVoteSuccess,
}) => {
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [showLackModal, setShowLackModal] = useState(false);
  const [idolList, setIdolList] = useState([]); // 아이돌 목록
  const userCredit = localStorage.getItem('credit'); // 사용자 크레딧

  // 아이돌 차트 가져오기
  // const fetchIdols = async () => {
  //   try {
  //     const data = await getCharts({ gender: currentTab, limit: 10 });
  //     if (data.idols) {
  //       const sortedResults = data.idols;
  //       setIdolList(sortedResults);
  //     }
  //   } catch (error) {
  //     console.error('에러 발생: ', error);
  //     alert('순위 리스트를 가져오는 데 오류가 발생했습니다.');
  //   }
  // };
  const fetchIdols = async () => {
    try {
      const data = await getCharts({ gender: currentTab }); // API 호출 (성별과 제한 설정)
      if (data.idols) {
        const sortedResults = data.idols; // 결과 정렬
        setIdolList(sortedResults); // 아이돌 목록 상태 설정
      }
    } catch (error) {
      console.error('에러 발생: ', error);
      alert('순위 리스트를 가져오는 데 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchIdols();
    }
  }, [isOpen]);

  // 투표 핸들러 함수
  const handleVote = async () => {
    if (selectedIdol) {
      // 선택된 아이돌이 있을 경우
      if (userCredit >= 1000) {
        // 크레딧 충분한지 확인
        try {
          await postVotes(selectedIdol.id); // API 호출로 투표
          localStorage.setItem('credit', userCredit - 1000); // 크레딧 차감
          alert(`${selectedIdol.name}에 투표했습니다!`);
          onVoteSuccess(selectedIdol.id);
          closeModal();
        } catch (error) {
          alert('투표 중 오류가 발생했습니다.');
        }
      } else {
        // closeModal(); // 기존 모달 창 닫기
        setShowLackModal(true); // 크레딧 부족 시 모달 열기
      }
    } else {
      alert('투표할 아이돌을 선택해주세요!'); // 아이돌 선택 안 된 경우
    }
  };

  // 재요청 필요

  // 크레딧 부족 모달 닫기
  const closeLackModal = () => {
    setShowLackModal(false);
  };

  //if (!isOpen) return null; // 모달창이 열려 있지 않으면 렌더링 중지
  if (!isOpen && !showLackModal) return null; // 둘 다 닫혀있으면 렌더링 중지

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
            <ul className="modal-list">
              {idolList &&
                idolList.map((idols, index) => (
                  <li key={idols.id}>
                    <RankItem
                      key={idols.id}
                      rank={index + 1}
                      idol={idols}
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
            <div className="modal-footer">
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
      </div>

      {showLackModal && (
        <LackModal showLackModal={showLackModal} onClose={closeLackModal} />
      )}
    </>
  );
};

export default ChartModal;
