import { useEffect, useState, useRef } from 'react';
import '../../styles/mypage/allidolselect.css';
import IdolCard from './IdolCard';

import { ReactComponent as LeftBtn } from '../../assets/icons/btn_pagination_arrow_left.svg';
import { ReactComponent as RightBtn } from '../../assets/icons/btn_pagination_arrow_right.svg';

import addBtn from '../../assets/icons/Ic_plus_24px.png';

const AllIdolSelect = ({
  cursor,
  idolList = [],
  handleLoadMore,
  addFavoriteIdolTemp,
  favoriteList,
  tempFavoriteList,
  onClickAdd,
  pageSize,
}) => {
  const [allIdols, setAllIdols] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  // 한 페이지당 아이템 개수 계산
  const itemsPerPage = pageSize === 16 ? 16 : 8; // 8x2 또는 4x2 형태

  // 전체 슬라이드 수 계산
  const totalSlides = Math.ceil(allIdols.length / itemsPerPage);

  // 슬라이드 이동 함수
  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNextSlide = async () => {
    if (currentSlide < totalSlides - 1) {
      // 마지막 슬라이드가 아닐 때
      setCurrentSlide((prev) => prev + 1); // 다음 슬라이드로 이동
    } else if (cursor !== null && !isLoading) {
      // 마지막 슬라이드이고, 커서가 있고, 로딩 중이 아닐 때
      try {
        setIsLoading(true); // 로딩 중 상태로 변경
        await handleLoadMore(); // 데이터 로드
        setIsLoading(false); // 로딩 완료 상태로 변경
        setCurrentSlide((prev) => prev + 1); // 다음 슬라이드로 이동
      } catch (error) {
        setIsLoading(false);
        console.error('Error loading more data:', error);
      }
    }
  };

  useEffect(() => {
    setAllIdols(idolList);
    console.log(pageSize);
  }, [idolList, pageSize]);

  const onClick = (id) => {
    addFavoriteIdolTemp(id);
  };

  // 현재 보여줄 아이돌 목록 계산
  const getCurrentPageIdols = () => {
    const startIndex = currentSlide * itemsPerPage;
    return allIdols.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="allidolselect-container">
      <div className="allidolselect-cards-container">
        <div
          className={`allidolselect-btn ${currentSlide === 0 ? 'disabled' : ''}`}
          onClick={handlePrevSlide}
        >
          <LeftBtn />
        </div>
        <div ref={containerRef} className={`allidolselect-card-container`}>
          <div
            className={`allidolselect-card-list  ${pageSize === 8 ? 'tablet' : ''}`}
          >
            {getCurrentPageIdols().map((card) => (
              <IdolCard
                onClick={onClick}
                key={card.id}
                id={card.id}
                name={card.name}
                image={card.profilePicture}
                groupName={card.group}
                isSelected={tempFavoriteList.some(
                  (item) => item.id === card.id
                )}
                isFavorite={favoriteList.some((item) => item.id === card.id)}
                size="large"
              />
            ))}
          </div>
        </div>
        <div
          className={`allidolselect-btn ${cursor === null && currentSlide === totalSlides - 1 ? 'disabled' : ''}`}
          onClick={handleNextSlide}
        >
          <RightBtn disabled={isLoading} />
        </div>
      </div>
      <div className="allidolselect-addbtn-container">
        <button className="allidolselect-addbtn" onClick={onClickAdd}>
          <img src={addBtn} alt="add" />
          추가하기
        </button>
      </div>
    </div>
  );
};

export default AllIdolSelect;
