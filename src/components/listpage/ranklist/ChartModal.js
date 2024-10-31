const ChartModal = ({ isOpen, closeModal, currentTab, setIsVote }) => {
  const handleVote = () => {
    // 투표 후 모달 닫기
    setIsVote(true);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{currentTab} 차트에 투표하기</h3>
        <button onClick={handleVote}>투표하기</button>
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
};

export default ChartModal;
