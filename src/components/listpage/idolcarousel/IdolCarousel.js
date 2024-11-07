import { useEffect, useState } from 'react';
import '../../../styles/listpage/IdolCarousel.css';
import { getDonations } from '../../../services/DonationApi';
import IdolDonationCard from './IdolDonationCard';

const IdolCarousel = () => {
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const [totalSlides, setTotalSlides] = useState(0);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 데이터 받아오기
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        setIsLoading(true);
        const data = await getDonations({ cursor, pageSize: itemsPerSlide });
        if (data && data.list) {
          setItems((prevItems) => [...prevItems, ...data.list]);
          setTotalSlides(
            Math.ceil((items.length + data.list.length) / itemsPerSlide)
          );
          setCursor(data.nextCursor);
        }
      } catch (error) {
        console.error('Error fetching donations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDonations();
  }, [cursor]);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (cursor !== null && !isLoading) {
      setCursor(cursor);
    }
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return items.slice(startIndex, startIndex + itemsPerSlide);
  };

  // 버튼 표시 여부를 결정하는 조건 계산
  const showPrevButton = currentSlide > 0;
  const showNextButton =
    currentSlide < totalSlides - 1 || (cursor !== null && !isLoading);

  return (
    <div className="idolcarousel-container">
      <div>
        <p>후원을 기다리는 조공</p>
      </div>
      <div className="idolcarousel-content">
        <div className="idolcarousel-btn-container">
          {showPrevButton && (
            <button className="idolcarousel-btn" onClick={handlePrevSlide}>
              &lt;
            </button>
          )}
        </div>
        {items.length > 0 ? (
          <div className="idolcarousel-list">
            {getCurrentSlideItems().map((item, index) => (
              <IdolDonationCard key={index} item={item} />
            ))}
          </div>
        ) : (
          <p>후원을 기다리는 조공이 없습니다.</p>
        )}
        <div className="idolcarousel-btn-container">
          {showNextButton && (
            <button className="idolcarousel-btn" onClick={handleNextSlide}>
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdolCarousel;
