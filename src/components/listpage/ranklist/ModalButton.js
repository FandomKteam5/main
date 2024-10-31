import { useState } from 'react';
import Modal from './VoteModal';

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>차트 투표하기</button>
      {isOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default ModalButton;
