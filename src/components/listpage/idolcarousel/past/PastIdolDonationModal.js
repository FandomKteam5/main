import { useState } from 'react';
import Modal from 'react-modal';
import '/Users/kyuyeonkim/Desktop/main/src/styles/IdolCarousel.css';

const IdolDonarionModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="idol-carousel-donate-button">
        후원하기
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="idol-carousel-donate-modal"
        overlayClassName={'idol-carousel-donate-modal-overlay'}
      >
        <div className="idol-carousel-donate-modal-content">
          <h1>후원하기</h1>
          <button onClick={closeModal} className="modal-close-button">
            X
          </button>
          {/* 이미지 삽입해야 함 -> 이미지 경로 오류로 못불러오는중*/}
          <div alt="" className="modal-idol-image">
            이미지
          </div>
          <h2>강남역 광고</h2>
          <p>민지 2023 첫 광고</p>
          <button onClick={closeModal} className="idol-carousel-donate-button">
            후원하기
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default IdolDonarionModal;
