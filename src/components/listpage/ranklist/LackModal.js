import './PopupModal.css';
import CreditIcon from '../../../../assets/icons/credit.svg';
import CloseIcon from '../../../../assets/icons/close.svg';

function LackModal({ onClose }) {
  return (
    <div className="modal-background">
      <div className="popup-container">
        <img
          src={CloseIcon}
          className="close-button"
          onClick={onClose}
          alt="닫기"
        />
        <img src={CreditIcon} className="popup-icon" alt="크레딧 아이콘" />
        <div className="popup-notification">
          앗! 투표하기 위한 <span className="highlight-text">크레딧</span>이
          부족해요
        </div>
        <button className="confirm-button" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default LackModal;
