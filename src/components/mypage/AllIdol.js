import '../../styles/mypage/allidol.css';
import AllIdolSelect from './AllIdolSelect';

const AllIdol = ({
  loadingError,
  getListError,
  handleGetListError,
  idolList,
  isLoading,
  handleLoadMore,
  addFavoriteIdolTemp,
  addFavoriteIdol,
  favoriteList,
}) => {
  if (getListError) {
    return (
      <div className="allidol-conatiner">
        <p>아이돌 목록을 가져오는 중에 오류가 발생했습니다.</p>
        <button onClick={handleGetListError}>다시 시도</button>
      </div>
    );
  }

  // 추가하기 버튼 클릭시 임시 관심 아이돌 목록을 관심 아이돌 목록에 추가
  const onClickAdd = () => {
    addFavoriteIdol();
  };

  return (
    <div className="allidol-conatiner">
      <p>관심 있는 아이돌을 추가해보세요.</p>
      <div className="allidol-card-container">
        {isLoading ? (
          <p>아이돌 목록을 가져오는 중입니다...</p>
        ) : (
          <AllIdolSelect
            loadingError={loadingError}
            idolList={idolList}
            handleLoadMore={handleLoadMore}
            addFavoriteIdolTemp={addFavoriteIdolTemp}
            favoriteList={favoriteList}
          />
        )}
      </div>
      <div className="allidol-addBtn-container">
        <button onClick={onClickAdd}>추가하기</button>
      </div>
    </div>
  );
};

export default AllIdol;
