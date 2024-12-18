import '../../styles/mypage/allidol.css';
import AllIdolSelect from './AllIdolSelect';
import AllIdolSelectMobile from './AllIdolSelectMobile';

const AllIdol = ({
  cursor,
  loadingError,
  getListError,
  handleGetListError,
  idolList,
  isLoading,
  handleLoadMore,
  addFavoriteIdolTemp,
  addFavoriteIdol,
  favoriteList,
  tempFavoriteList,
  isMobile,
  pageSize,
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
      <div className="allidol-title">
        <p>관심 있는 아이돌을 추가해보세요.</p>
      </div>
      <div className="allidol-card-container">
        {isLoading ? (
          <p>아이돌 목록을 가져오는 중입니다...</p>
        ) : isMobile ? (
          <AllIdolSelectMobile
            cursor={cursor}
            loadingError={loadingError}
            idolList={idolList}
            handleLoadMore={handleLoadMore}
            addFavoriteIdolTemp={addFavoriteIdolTemp}
            favoriteList={favoriteList}
            tempFavoriteList={tempFavoriteList}
            onClickAdd={onClickAdd}
          />
        ) : (
          <AllIdolSelect
            pageSize={pageSize}
            cursor={cursor}
            loadingError={loadingError}
            idolList={idolList}
            handleLoadMore={handleLoadMore}
            addFavoriteIdolTemp={addFavoriteIdolTemp}
            favoriteList={favoriteList}
            tempFavoriteList={tempFavoriteList}
            onClickAdd={onClickAdd}
            isLoadings={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default AllIdol;
