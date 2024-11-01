import { useEffect, useState } from 'react';
import { getCharts } from '../../../services/RankApi';
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

// 데이터 로딩
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
  const [isOpen, openModal, closeModal] = useModal();
  const [idolList, setIdolList] = useState([]);
  const [isLoading, loadingError, handleLoad] = useLoad(getCharts);
  const [currentTab, setCurrentTab] = useState('female');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 성별과 페이지에 따른 데이터 가져오기
  const fetchIdols = async () => {
    const chart = await handleLoad({ gender: currentTab, page, limit: 10 });
    if (chart && chart.results) {
      setIdolList((prevList) => [...prevList, ...chart.results]);
      setHasMore(chart.next !== null);
    }
  };

  // 성별 전환 시 리스트 리셋 및 새로운 데이터 가져오기
  useEffect(() => {
    setIdolList([]);
    setPage(1); // 첫 페이지로 페이지 리셋
    fetchIdols();
    console.log(1);
  }, [currentTab]);

  // 페이지 전환 시 아이돌 가져오기
  useEffect(() => {
    if (page > 1) {
      fetchIdols();
      console.log(2);
    }
  }, [page]);

  // 성별로 탭 전환
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setPage(1); // 탭 클릭시 페이지 리셋
  };

  // 더 보기 클릭시 아이돌 가져오기
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
          여자 아이돌
        </button>
        <button
          className={`tab ${currentTab === 'male' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('male')}
        >
          남자 아이돌
        </button>
      </div>
      <div className="idol-list">
        {isLoading && idolList.length === 0 ? (
          <p>Loading...</p>
        ) : loadingError ? (
          <p className="error-message">에러 발생: {loadingError.message}</p>
        ) : (
          idolList.map((idol, index) => (
            <IdolChart key={idol.id} rank={index + 1} idol={idol} />
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
