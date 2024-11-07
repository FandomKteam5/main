import AllIdol from '../components/mypage/AllIdol';
import FavoriteIdol from '../components/mypage/FavoriteIdol';
import '../styles/mypage/mypage.css';
import Container from '../components/common/Container';

import { getIdols } from '../services/MyPageApi';
import { useState, useEffect } from 'react';

import useWindowSize from '../components/hooks/useWindowSize';

const MyPage = () => {
  const [getListError, setGetListError] = useState(null);

  const [favoriteList, setFavoriteList] = useState([]);
  const [idolList, setIdolList] = useState([]);

  const [cursor, setCursor] = useState();
  const [pageSize, setPageSize] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const [tempFavoriteList, setTempFavoriteList] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  // 반응형을 위한 창 크기 상태
  const pageState = useWindowSize();

  // 창 크기에 따른 페이지 상태 변경
  // useEffect(() => {
  //   if (windowSize.width < 768) {
  //     setIsMobile(true);
  //     setPageSize(9);
  //     console.log(isMobile);
  //   } else if (windowSize.width < 1024) {
  //     setIsMobile(false);
  //     setPageSize(8);
  //   } else {
  //     setIsMobile(false);
  //     setPageSize(16);
  //   }
  //   // 페이지 크기에 따라 아이돌 목록 가져오기
  //   handleLoadIdols({ cursor: 0, pageSize });
  //   // 관심있는 아이돌 목록 가져오기
  //   getFavoriteIdols();
  // }, [windowSize]);

  // // 창 크기에 따른 페이지 상태 변경
  useEffect(() => {
    if (pageState === 'MOBILE') {
      setIsMobile(true);
      setPageSize(9);
      console.log(isMobile);
    } else if (pageState === 'TABLET') {
      setIsMobile(false);
      setPageSize(8);
    } else {
      setIsMobile(false);
      setPageSize(16);
    }
    // 페이지 크기에 따라 아이돌 목록 가져오기
    handleLoadIdols({ cursor: 0, pageSize });
    // 관심있는 아이돌 목록 가져오기
    getFavoriteIdols();
  }, [pageState, pageSize]);

  // 아이돌 목록 가져오는데 실패했을 때
  const handleGetListError = (error) => {
    setGetListError(error);
  };

  // 관심있는 아이돌 목록 가져오기
  const getFavoriteIdols = () => {
    const favoriteList = localStorage.getItem('favoriteList');
    if (favoriteList) {
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
      console.log(result);
    } catch (error) {
      setLoadingError(error);
      console.error(error);
      return;
    } finally {
      setIsLoading(false);
    }

    // 아이돌 목록 가져오기 성공 시
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
    // 관심있는 아이돌 리스트에 있을 경우 선택 불가능하게 하기
    if (favoriteList.some((item) => item.id === id)) {
      return;
    }
    // 임시 관심 아이돌 리스트에 있을 경우 임시 관심 아이돌 리스트에서 삭제
    if (tempFavoriteList.some((item) => item.id === id)) {
      setTempFavoriteList((prevList) =>
        prevList.filter((item) => item.id !== id)
      );
    } else {
      // 임시 관심 아이돌 리스트에 없을 경우 추가
      const idol = idolList.find((item) => item.id === id);
      setTempFavoriteList((prevList) => [...prevList, idol]);
    }
  };

  // 추가하기 버튼 클릭 시 관심있는 아이돌 목록에 추가
  const addFavoriteIdol = () => {
    const newFavoriteList = [...favoriteList, ...tempFavoriteList];
    localStorage.setItem('favoriteList', JSON.stringify(newFavoriteList)); // 문자열로 변환
    setFavoriteList(newFavoriteList);
    setTempFavoriteList([]);
  };

  return (
    <Container>
      <div className="mypage-container">
        <FavoriteIdol
          favoriteList={favoriteList}
          removeFavoriteIdol={removeFavoriteIdol}
        />
        <AllIdol
          pageSize={pageSize}
          cursor={cursor}
          loadingError={loadingError}
          getListError={getListError}
          handleGetListError={handleGetListError}
          idolList={idolList}
          isLoading={isLoading}
          handleLoadMore={handleLoadMore}
          addFavoriteIdolTemp={addFavoriteIdolTemp}
          addFavoriteIdol={addFavoriteIdol}
          favoriteList={favoriteList}
          tempFavoriteList={tempFavoriteList}
          isMobile={isMobile}
        />
      </div>
    </Container>
  );
};

export default MyPage;
