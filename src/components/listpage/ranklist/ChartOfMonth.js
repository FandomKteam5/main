import { useEffect, useState } from 'react';
import { getCharts, getIdolList } from '../../../services/RankApi';
import IdolChart from './IdolChart';
import { ReactComponent as Chart } from '../../../assets/icons/chart.svg';
import ChartModal from './ChartModal';
// import MoreButton from "./MoreButton"; //
import '../../../styles/listpage/ChartOfMonth.css';

// 모달 open, close를 위한 state
const useModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return [open, handleOpen, handleClose];
};

// 데이터 로딩 관리
const useLoad = (getData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async (...args) => {
    try {
      setLoadingError(null);
      setIsLoading(true);
      const result = await getData(...args);
      return result;
    } catch (error) {
      setLoadingError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError, handleLoad];
};

const ChartOfMonth = () => {
  const [isOpen, openModal, closeModal] = useModal(); // 모달창
  const [idolList, setIdolList] = useState([]); // 아이돌 목록
  const [isLoading, loadingError, handleLoad] = useLoad(getCharts);
  const [currentTab, setCurrentTab] = useState('female'); // 현재 탭의 성별
  const [page, setPage] = useState(1); // 현재 페이지
  const [hasMore, setHasMore] = useState(true); // 더보기

  // 콘솔로 fetch 확인
  useEffect(() => {
    // getCharts 데이터를 가져와 콘솔에 출력하는 함수
    const fetchAndLogCharts = async () => {
      try {
        const data = await getCharts({ gender: 'female', page: 1, limit: 10 }); // 기본 매개변수 전달
        console.log('데이터 가져오기:', data); // 데이터를 콘솔에 출력
      } catch (error) {
        console.error('에러 발생', error); // 에러가 발생할 경우 콘솔에 출력
      }
    };

    fetchAndLogCharts(); // 컴포넌트가 마운트될 때 호출
  }, []);

  // 콘솔로 fetch 확인
  useEffect(() => {
    // 아이돌 데이터를 가져와 콘솔에 출력하는 함수
    const fetchAndLoadIdols = async () => {
      try {
        const data = await getIdolList({ pageSize: 10, keyword: '' }); // 예시로 여성 아이돌 데이터를 가져옴
        console.log('데이터 가져오기:', data);
      } catch (error) {
        console.error('에러 발생', error);
      }
    };

    fetchAndLoadIdols(); // 컴포넌트가 마운트될 때 호출
  }, []);

  // 성별과 페이지에 따른 데이터 가져오기
  // const fetchIdols = async () => {
  //   const chart = await handleLoad({ gender: currentTab, page, limit: 10 });
  //   if (chart && chart.results) {
  //     setIdolList((prevList) => [...prevList, ...chart.results]);
  //     setHasMore(chart.next !== null); // 다음 페이지가 있는지 확인
  //   }
  // };

  // const fetchIdols = async (reset = false) => {
  //   const data = await handleLoad({ gender: currentTab, page, limit: 10 });
  //   if (data.idols) {
  //     const sortedResults = data.idols.sort(
  //       (a, b) => b.totalVotes - a.totalVotes
  //     ); // totalVotes 기준으로 내림차순 정렬
  //     setIdolList((prevList) =>
  //       reset ? sortedResults : [...prevList, ...sortedResults]
  //     );
  //     // setIdolList((prevList) =>
  //     //   reset ? data.results : [...prevList, ...data.results]
  //     // ); // 새로 로드 시 목록 초기화
  //     // setHasMore(data.nextPage !== null); // 다음 페이지가 있는지 확인
  //     if (!data.nextCursor || data.idols.length === 0) {
  //       setHasMore(false);
  //       setPage(null);
  //     } else {
  //       setHasMore(true);
  //       setPage(data.idols.nextCursor); // 다음 페이지 설정
  //     }
  //   }
  // };
  const fetchIdols = async () => {
    const data = await handleLoad({ gender: currentTab, page, limit: 10 });
    if (data.idols) {
      const sortedResults = data.idols;
      setIdolList(sortedResults);
    }
  };

  // 성별 전환 시 리스트 리셋 및 새로운 데이터 가져오기
  // useEffect(() => {
  //   setIdolList([]);
  //   setPage(1); // 첫 페이지로 페이지 리셋
  //   fetchIdols();
  // }, [currentTab]);
  useEffect(() => {
    setIdolList([]);
    setHasMore([]);
    setPage(1); // 첫 페이지로 페이지 리셋
    fetchIdols(true);
  }, [currentTab]);

  // 페이지 전환 시 아이돌 가져오기
  useEffect(() => {
    if (page > 1) {
      fetchIdols();
    }
  }, [page]);

  // 성별로 탭 전환
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setPage(1); // 탭 클릭시 페이지 리셋
    setIdolList([]); // 탭이 전환될 때 리스트를 초기화
  };

  // 더 보기 클릭시 아이돌 가져오기
  // const loadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  const loadMore = () => {
    if (hasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="chart-container">
      <div className="header">
        <h1>이달의 차트</h1>
        <button className="chart-vote-button" onClick={openModal}>
          <Chart className="chart-icon" />
          차트 투표하기
        </button>
      </div>
      <div className="tabs">
        <button
          className={`tab ${currentTab === 'female' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('female')}
        >
          이달의 여자 아이돌
        </button>
        <button
          className={`tab ${currentTab === 'male' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('male')}
        >
          이달의 남자 아이돌
        </button>
      </div>
      <div className="idol-list">
        {isLoading && idolList.length === 0 ? (
          <p>Loading...</p>
        ) : loadingError ? (
          <p className="error-message">에러 발생: {loadingError.message}</p>
        ) : (
          idolList.map((idols, index) => (
            <IdolChart key={idols.id} rank={index + 1} idol={idols} />
          ))
        )}
      </div>
      {hasMore && (
        <button className="load-more-button" onClick={loadMore}>
          더 보기
        </button>
      )}
      {/* <MoreButton onClick={loadMore} isLoading={isLoading} hasMore={hasMore} /> */}
      {isOpen && (
        <ChartModal
          isOpen={isOpen}
          closeModal={closeModal}
          currentTab={currentTab}
          setIsVote={() => {}}
        />
      )}
    </div>
  );
};

export default ChartOfMonth;
