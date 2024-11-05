import { useState, useEffect } from 'react';
import creditLogo from '../../assets/images/credit.png';
import '../../styles/CreditApp.css';

function CreditApp() {
  const [credit, setCredit] = useState(0); // 크레딧 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 열림 여부
  const [chargeAmount, setChargeAmount] = useState(0); // 충전할 금액

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 크레딧을 불러옴
  useEffect(() => {
    const savedCredit = parseInt(localStorage.getItem('credit'), 10) || 0;
    setCredit(savedCredit);
  }, []);

  // 크레딧이 변경될 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('credit', credit);
  }, [credit]);

  // 충전하기 버튼 클릭 시 모달 열기
  const handleChargeClick = () => {
    setIsModalOpen(true);
  };

  // 충전할 금액 선택 핸들러
  const handleAmountChange = (amount) => {
    setChargeAmount(amount);
  };

  // 충전하기 버튼 클릭 시 크레딧 충전
  const handleChargeConfirm = () => {
    setCredit(credit + chargeAmount);
    setIsModalOpen(false);
    setChargeAmount(0);
  };

  return (
    <div>
      <div className="main__section--credit">
        <div>
          <div>내 크레딧</div>
          <div className="main__section--mycredit">
            <img src={creditLogo} alt="credit" />
            {credit.toLocaleString()}
          </div>
        </div>
        <button className="main__credit--button" onClick={handleChargeClick}>
          충전하기
        </button>
      </div>

      {/* 충전 모달 */}
      {isModalOpen && (
        <div className="credit__modal--overlay">
          <div className="credit__modal">
            <div className="credit__modal--header">
              <p>크레딧 충전하기</p>
              <button
                className="credit__modal--closeButton"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <button
              className={`credit__modal--selectButton ${chargeAmount === 100 ? 'active' : ''}`}
              onClick={() => handleAmountChange(100)}
            >
              <div className="credit__modal--logobox">
                <img src={creditLogo} alt="credit" />
                100
              </div>
              <span
                className={`radio-icon ${chargeAmount === 100 ? 'active' : ''}`}
              />
            </button>
            <button
              className={`credit__modal--selectButton ${chargeAmount === 500 ? 'active' : ''}`}
              onClick={() => handleAmountChange(500)}
            >
              <div className="credit__modal--logobox">
                <img src={creditLogo} alt="credit" />
                500
              </div>
              <span
                className={`radio-icon ${chargeAmount === 500 ? 'active' : ''}`}
              />
            </button>
            <button
              className={`credit__modal--selectButton ${chargeAmount === 1000 ? 'active' : ''}`}
              onClick={() => handleAmountChange(1000)}
            >
              <div className="credit__modal--logobox">
                <img src={creditLogo} alt="credit" />
                1000
              </div>
              <span
                className={`radio-icon ${chargeAmount === 1000 ? 'active' : ''}`}
              />
            </button>

            <button onClick={handleChargeConfirm} className="confirm-button">
              <img src={creditLogo} alt="credit" /> 충전하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreditApp;
