import { useState } from 'react';
import '../../../styles/listpage/IdolDonationCard.css';

const IdolDonationCard = ({ item }) => {
  const { idol, title, subtitle, targetDonation, receivedDonations, deadline } =
    item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [isDonationValid, setIsDonationValid] = useState(false);

  // 마감까지 남은 일 수 계산
  const calculateDaysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    const timeDiff = deadlineDate - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  const daysLeft = calculateDaysLeft(deadline);
  const progress = Math.min((receivedDonations / targetDonation) * 100, 100);
  const currentCredits = parseInt(localStorage.getItem('credit'), 10) || 0;

  const handleDonationChange = (e) => {
    const value = e.target.value;
    setDonationAmount(value);
    const numValue = parseInt(value, 10);
    setIsDonationValid(numValue > 0 && numValue <= currentCredits);
  };

  const handleDonate = () => {
    if (isDonationValid) {
      alert('준비중인 기능입니다.');
      // 후원 로직 추가
      console.log(`Donated ${donationAmount} credits to ${idol.name}`);
      closeModal();
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setDonationAmount('');
    setIsDonationValid(false);
  };

  return (
    <>
      <div className="idol-donation-card">
        <div className="idol-donation-card-image-container">
          <img
            src={idol.profilePicture}
            alt={idol.name}
            className="idol-donation-card-image"
          />
          <button className="card-donate-button" onClick={openModal}>
            후원하기
          </button>
        </div>
        <div className="idol-donation-card-content">
          <p className="subtitle">{subtitle}</p>
          <h3 className="title">{title}</h3>
          <div className="donation-info">
            <p className="current-target">
              {receivedDonations.toLocaleString()}원 /{' '}
              {targetDonation.toLocaleString()}원
            </p>
            <p className="days-left">{daysLeft}일 남음</p>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>후원하기</h3>
              <button className="modal-close-button" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-content">
              <img
                src={idol.profilePicture}
                alt={idol.name}
                className="modal-image"
              />
              <h3 className="modal-title">{title}</h3>
              <p className="modal-subtitle">{subtitle}</p>
              <div className="modal-credits">
                보유 크레딧: {currentCredits.toLocaleString()}원
              </div>
              <input
                type="number"
                value={donationAmount}
                onChange={handleDonationChange}
                placeholder="후원 금액을 입력해주세요"
                className="donation-input"
                min="1"
                max={currentCredits}
              />
              <button
                className="modal-donate-button"
                onClick={handleDonate}
                disabled={!isDonationValid}
              >
                {isDonationValid ? '후원하기' : '보유 크레딧이 부족합니다'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IdolDonationCard;
