import { useEffect, useState } from 'react';
import '../../styles/mypage/allidolselect.css';
import IdolCard from './IdolCard';

const AllIdolSelect = ({
  cursor,
  loadingError,
  idolList = [],
  handleLoadMore,
  addFavoriteIdolTemp,
}) => {
  const [allIdols, setAllIdols] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    setAllIdols(idolList);
  }, [idolList]);

  const onLoadMore = () => {
    if (idolList.length > 0) {
      handleLoadMore();
    }
  };

  // 클릭한 아이돌을 임시 관심 아이돌 목록에 추가
  const onClick = (id) => {
    addFavoriteIdolTemp(id);
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedId) => selectedId !== id); // 선택된 아이돌 제거
      } else {
        return [...prev, id]; // 선택된 아이돌 추가
      }
    });
    console.log(id);
  };

  return (
    <div className="allidolselect-container">
      <div>
        <button className="allidolselect-btn">왼쪽</button>
      </div>
      <div className="allidolselect-card-container">
        {loadingError ? (
          <div className="allidolselect-error-message">{loadingError}</div>
        ) : (
          <>
            {allIdols.map((card) => (
              <IdolCard
                onClick={onClick}
                key={card.id}
                id={card.id}
                name={card.name}
                image={card.image}
                groupName={card.groupName}
                isSelected={selectedIds.includes(card.id)}
              />
            ))}
          </>
        )}
      </div>
      <div>
        <button
          className="allidolselect-btn"
          disabled={cursor === 0}
          onClick={onLoadMore}
        >
          오른쪽
        </button>
      </div>
    </div>
  );
};

export default AllIdolSelect;
