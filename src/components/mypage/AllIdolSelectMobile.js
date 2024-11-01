import { useEffect, useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import IdolCard from './IdolCard';

const AllIdolSelectMobile = ({
  cursor,
  loadingError,
  idolList = [],
  handleLoadMore,
  addFavoriteIdolTemp,
  favoriteList,
  tempFavoriteList,
  onClickAdd,
}) => {
  const [allIdols, setAllIdols] = useState([]);

  const windowSize = useWindowSize();

  // 아이돌 목록 가져오기
  useEffect(() => {
    setAllIdols(idolList);
  }, [idolList]);

  // 아이돌 목록 더 가져오기
  const onLoadMore = () => {
    if (idolList.length > 0) {
      handleLoadMore();
    }
  };

  // 스크롤이 끝에 도달하면 아이돌 목록 더 가져오기
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      onLoadMore();
    }
  };

  // 클릭한 아이돌을 임시 관심 아이돌 목록에 추가
  const onClick = (id) => {
    addFavoriteIdolTemp(id);
  };

  return (
    <div>
      {/* 아이돌 리스트 3행 3열 */}
      {/* 추가하기 버튼 영역(투명하지만 어두운 배경, 아래에 있는 아이돌 리스트는
        흐릿하게 보이도록) */}
      <div>
        {loadingError ? (
          <div>{loadingError}</div>
        ) : (
          <>
            {allIdols.map((card) => (
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
          </>
        )}
      </div>
      <div>
        <button onClick={onClickAdd}>추가하기</button>
      </div>
    </div>
  );
};

export default AllIdolSelectMobile;
