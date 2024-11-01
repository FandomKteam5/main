// import { useState } from 'react';
// import Modal from './VoteModal';

// const ModalButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <div>
//       <button onClick={openModal}>차트 투표하기</button>
//       {isOpen && <Modal onClose={closeModal} />}
//     </div>
//   );
// };

// export default ModalButton;
import { ReactComponent as ChartIcon } from '../../../assets/icons/chart.svg';
import './ModalButton.css';

const ModalButton = ({ onClick, buttonText = '차트 투표하기' }) => {
  return (
    <button className="modal-button" onClick={onClick}>
      <ChartIcon className="modal-button-icon" />
      {buttonText}
    </button>
  );
};

export default ModalButton;
