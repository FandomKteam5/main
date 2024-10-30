import AllIdol from '../components/mypage/AllIdol';
import FavoriteIdol from '../components/mypage/FavoriteIdol';
import '../styles/mypage/mypage.css';
import Container from '../components/common/Container';

import { getIdols } from '../services/MyPageApi';
import { useState, useEffect } from 'react';

const MyPage = () => {
  const [getListError, setGetListError] = useState(null);

  const [favoriteList, setFavoriteList] = useState([]);
  const [idolList, setIdolList] = useState([]);

  const [cursor, setCursor] = useState(0);
  const [pageSize, setPageSize] = useState(8);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const [tempFavoriteList, setTempFavoriteList] = useState([]);

  // 반응형 웹을 위한 창 크기에 따른 페이지 사이즈 변경
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setPageSize(6);
    } else if (window.innerWidth < 1024) {
      setPageSize(8);
    } else {
      setPageSize(16);
    }
  };

  // 창 크기 변경 이벤트 등록
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 아이돌 목록 가져오는데 실패했을 때
  const handleGetListError = (error) => {
    setGetListError(error);
  };

  // 관심있는 아이돌 목록 가져오기
  const getFavoriteIdols = () => {
    const favoriteList = localStorage.getItem('favoriteList');
    if (favoriteList) {
      console.log(favoriteList);
      setFavoriteList(JSON.parse(favoriteList)); // 문자열 객체로 변환
    }
  };

  // 관심있는 아이돌 목록에서 삭제
  const removeFavoriteIdol = (id) => {
    const newFavoriteList = favoriteList.filter((item) => item.id !== id);
    localStorage.setItem('favoriteList', JSON.stringify(newFavoriteList));
    setFavoriteList(newFavoriteList);
  };

  // 아이돌 목록 가져오기
  const handleLoadIdols = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getIdols(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { list, nextCursor } = result;
    if (options.cursor === 0) {
      setIdolList(list);
    } else {
      setIdolList((prev) => {
        return [...prev, ...list];
      });
    }

    setCursor(nextCursor);
  };

  // 아이돌 목록 더 가져오기
  const handleLoadMore = () => {
    handleLoadIdols({ cursor, pageSize });
  };

  // 추가할 아이돌 임시 목록 저장
  const addFavoriteIdolTemp = (id) => {
    const idol = idolList.find((item) => item.id === id);
    setTempFavoriteList((prevList) => [...prevList, idol]);
  };

  // 추가하기 버튼 클릭 시 관심있는 아이돌 목록에 추가
  const addFavoriteIdol = () => {
    const newFavoriteList = [...favoriteList, ...tempFavoriteList];
    localStorage.setItem('favoriteList', JSON.stringify(newFavoriteList)); // 문자열로 변환
    setFavoriteList(newFavoriteList);
    setTempFavoriteList([]);
  };

  // 페이지 사이즈 변경
  const handlePageSizeChange = (size) => {
    setPageSize(size);
    handleLoadIdols({ cursor: 0, pageSize: size });
  };

  // 컴포넌트가 처음 렌더링될 때 아이돌 목록 가져오기
  useEffect(() => {
    handleLoadIdols({ cursor: 0, pageSize });
    getFavoriteIdols();
  }, []);

  return (
    <Container>
      <div className="mypage-container">
        <FavoriteIdol
          favoriteList={favoriteList}
          removeFavoriteIdol={removeFavoriteIdol}
        />
        <AllIdol
          cursor={cursor}
          loadingError={loadingError}
          getListError={getListError}
          handleGetListError={handleGetListError}
          idolList={idolList}
          isLoading={isLoading}
          handleLoadMore={handleLoadMore}
          handlePageSizeChange={handlePageSizeChange}
          addFavoriteIdolTemp={addFavoriteIdolTemp}
          addFavoriteIdol={addFavoriteIdol}
          favoriteList={favoriteList}
        />
      </div>
    </Container>
  );
};

export default MyPage;
