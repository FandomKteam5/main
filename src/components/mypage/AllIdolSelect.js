import { useEffect, useState } from 'react';
import '../../styles/mypage/allidolselect.css';
import IdolCard from './IdolCard';

import { ReactComponent as LeftBtn } from '../../assets/icons/btn_pagination_arrow_left.svg';
import { ReactComponent as RightBtn } from '../../assets/icons/btn_pagination_arrow_right.svg';

import addBtn from '../../assets/icons/Ic_plus_24px.png';

const AllIdolSelect = ({
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
  // const [selectedIds, setSelectedIds] = useState([]);

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
  };

  return (
    <div className="allidolselect-container">
      <div className="allidolselect-btn">
        <LeftBtn />
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
      <div className="allidolselect-btn">
        <RightBtn disabled={cursor === 0} onClick={onLoadMore} />
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
